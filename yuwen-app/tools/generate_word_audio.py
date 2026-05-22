import json
import subprocess
import sys
import time
from pathlib import Path


def load_units(app_dir: Path):
    html = (app_dir / "index.html").read_text(encoding="utf-8")
    script = html.split("<script>", 1)[1].rsplit("</script>", 1)[0]
    data_code = script[script.index("const units = "):script.index("const storeKey")]
    js = (
        "const vm = require('vm');"
        f"const code = {json.dumps(data_code + '; JSON.stringify(units);')};"
        "console.log(vm.runInNewContext(code, {}));"
    )
    result = subprocess.run(["node", "-e", js], check=True, capture_output=True, text=True)
    return json.loads(result.stdout)


def tts(text: str, out_file: Path) -> bool:
    if out_file.exists() and out_file.stat().st_size > 1024:
        return True
    command = [
        sys.executable,
        "-m",
        "edge_tts",
        "-v",
        "zh-CN-XiaoxiaoNeural",
        "--rate=-10%",
        "--pitch=+2Hz",
        "-t",
        text,
        "--write-media",
        str(out_file),
    ]
    for attempt in range(4):
        try:
            subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return True
        except subprocess.CalledProcessError:
            time.sleep(2 + attempt)
    return False


def main() -> None:
    app_dir = Path(__file__).resolve().parents[1]
    out_dir = app_dir / "audio" / "words"
    out_dir.mkdir(parents=True, exist_ok=True)
    units = load_units(app_dir)
    count = 0
    missing = []
    for unit in units:
        for lesson in unit["lessons"]:
            for index, word in enumerate(lesson["words"]):
                out_file = out_dir / f"{lesson['id']}-{index}.mp3"
                count += 1
                ok = tts(word, out_file)
                if ok:
                    print(f"{count}: {lesson['title']} {word} -> {out_file.name}", flush=True)
                else:
                    missing.append(f"{lesson['title']} {word} -> {out_file.name}")
                    print(f"MISS {count}: {missing[-1]}", flush=True)
    if missing:
        print("\nMissing files:")
        print("\n".join(missing))
        sys.exit(1)


if __name__ == "__main__":
    main()
