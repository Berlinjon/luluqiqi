import subprocess
import sys
from pathlib import Path


FEEDBACK = {
    "try-again": "再试一次",
    "complete": "任务完成，太棒了",
}


def main() -> None:
    out_dir = Path(__file__).resolve().parents[1] / "audio" / "feedback"
    out_dir.mkdir(parents=True, exist_ok=True)
    for name, text in FEEDBACK.items():
        out_file = out_dir / f"{name}.mp3"
        if out_file.exists() and out_file.stat().st_size > 1024:
            print(f"skip {out_file.name}")
            continue
        subprocess.run(
            [
                sys.executable,
                "-m",
                "edge_tts",
                "-v",
                "zh-CN-XiaoxiaoNeural",
                "--rate=-8%",
                "--pitch=+3Hz",
                "-t",
                text,
                "--write-media",
                str(out_file),
            ],
            check=True,
        )
        print(f"{text} -> {out_file.name}")


if __name__ == "__main__":
    main()
