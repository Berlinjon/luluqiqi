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
        "--rate=-8%",
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
    out_dir = app_dir / "audio" / "lessons"
    out_dir.mkdir(parents=True, exist_ok=True)
    missing = []
    for unit in load_units(app_dir):
        for lesson in unit["lessons"]:
            text = " ".join(lesson["read"])
            out_file = out_dir / f"{lesson['id']}.mp3"
            if tts(text, out_file):
                print(f"{lesson['title']} -> {out_file.name}", flush=True)
            else:
                missing.append(f"{lesson['title']} -> {out_file.name}")
                print(f"MISS {missing[-1]}", flush=True)
    if missing:
        print("\nMissing files:")
        print("\n".join(missing))
        sys.exit(1)


if __name__ == "__main__":
    main()
