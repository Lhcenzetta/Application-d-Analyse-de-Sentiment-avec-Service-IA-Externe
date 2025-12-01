"""Expose FastAPI app for Vercel detection."""
import sys
from pathlib import Path

# Ensure the backend app directory is importable
BASE_DIR = Path(__file__).resolve().parent.parent
BACKEND_APP_DIR = BASE_DIR / "Backend" / "App"
sys.path.append(str(BACKEND_APP_DIR))

from main import app  # type: ignore  # noqa: E402

