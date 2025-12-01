"""Alternate FastAPI entrypoint for Vercel detection."""
import sys
from pathlib import Path

# Make Backend/App importable
ROOT_DIR = Path(__file__).resolve().parent.parent
BACKEND_DIR = ROOT_DIR / "Backend"
BACKEND_APP_DIR = BACKEND_DIR / "App"
sys.path.extend([str(BACKEND_DIR), str(BACKEND_APP_DIR)])

from App.main import app  # type: ignore  # noqa: E402

