import subprocess
import sys
import time
from pathlib import Path


STROKES = {
    "heng": "横",
    "shu": "竖",
    "pie": "撇",
    "na": "捺",
    "dian": "点",
    "ti": "提",
    "piedian": "撇点",
    "hengzhe": "横折",
    "henggou": "横钩",
    "hengpie": "横撇",
    "shugou": "竖钩",
    "hengzhegou": "横折钩",
    "shuti": "竖提",
    "piezhe": "撇折",
    "hengzhezhepie": "横折折撇",
    "hengzheti": "横折提",
    "shuzhe": "竖折",
    "shuwan": "竖弯",
    "shuwangou": "竖弯钩",
    "wangou": "弯钩",
    "xiegou": "斜钩",
    "wogou": "卧钩",
    "hengzhewangou": "横折弯钩",
    "hengpiewangou": "横撇弯钩",
    "shuzhezhegou": "竖折折钩",
    "hengzhezhezhegou": "横折折折钩",
}


def main() -> None:
    out_dir = Path(__file__).resolve().parents[1] / "audio" / "strokes"
    out_dir.mkdir(parents=True, exist_ok=True)
    for key, text in STROKES.items():
        out_file = out_dir / f"{key}.mp3"
        if out_file.exists() and out_file.stat().st_size > 1024:
            print(f"skip {text} -> {out_file.name}")
            continue
        command = [
            sys.executable,
            "-m",
            "edge_tts",
            "-v",
            "zh-CN-XiaoxiaoNeural",
            "--rate=-12%",
            "--pitch=+2Hz",
            "-t",
            text,
            "--write-media",
            str(out_file),
        ]
        for attempt in range(3):
            try:
                subprocess.run(command, check=True)
                break
            except subprocess.CalledProcessError:
                if attempt == 2:
                    raise
                time.sleep(2 + attempt)
        print(f"{text} -> {out_file.name}")


if __name__ == "__main__":
    main()
