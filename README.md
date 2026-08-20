# Sentiment Analysis with External AI Service

**Application d'Analyse de Sentiment avec Service IA Externe**

A full-stack sentiment analysis platform that sends text to the Hugging Face API and returns a score from **1 to 5** using the multilingual model [`nlptown/bert-base-multilingual-uncased-sentiment`](https://huggingface.co/nlptown/bert-base-multilingual-uncased-sentiment).

The project is composed of a **secure JWT-authenticated FastAPI backend**, a **modern Next.js frontend**, and is fully **containerized with Docker**, tested with **pytest**, and validated with **GitHub Actions CI**.

> Built as part of the **Simplon Network AI & Full-Stack Training Journey**.

---

## Table of Contents
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Backend (FastAPI)](#1-backend-fastapi)
  - [2. Frontend (Next.js)](#2-frontend-nextjs)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Docker](#docker)
- [Testing](#testing)
- [CI/CD](#cicd)
- [Deployment (Vercel)](#deployment-vercel)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

- 🔐 **JWT authentication** — register / login / protected prediction endpoint (`HS256` with `python-jose`).
- 🧠 **External AI integration** — calls the Hugging Face inference API with a real multilingual BERT sentiment model.
- ⭐ **1–5 star scoring** — the model's label is mapped to `negative`, `neutral`, or `positive`.
- 🖥️ **Modern Next.js UI** — landing page, auth pages, and a live analyzer dashboard with history stored in `localStorage`.
- 📦 **Fully Dockerized** — independent Dockerfiles for the backend and frontend.
- 🔁 **Automated CI** — GitHub Actions runs backend tests + frontend lint & build on every push / PR.
- 🌍 **Vercel-ready API** — thin entrypoints (`api/`) expose the FastAPI app for serverless deployment.

---

## How It Works

```
┌──────────────┐   JWT (Bearer)   ┌────────────────┐   HTTP POST   ┌──────────────────────────────┐
│  Next.js UI  │ ───────────────► │ FastAPI Backend │ ────────────► │ Hugging Face Inference API   │
│ (React 19)   │ ◄─────────────── │  (SQLite + JWT) │ ◄──────────── │ nlptown/bert-base-multilingual│
└──────────────┘   score + label  └────────────────┘     labels    │ -uncased-sentiment           │
                                                                    └──────────────────────────────┘
```

1. The user writes a sentence / review on the **Next.js** dashboard.
2. The frontend authenticates with a **JWT** (`Bearer` token) and sends the text to the FastAPI endpoint `/auth/predict`.
3. FastAPI validates the token, then calls the **Hugging Face** inference API via `requests`.
4. The model returns probabilities for labels `1 star … 5 stars`; the highest-probability label becomes the score.
5. The score is mapped to a sentiment (`1–2` = negative, `3` = neutral, `4–5` = positive) and returned to the UI.

---

## Tech Stack

| Layer     | Technology |
|-----------|------------|
| Backend   | [FastAPI](https://fastapi.tiangolo.com/), Uvicorn, SQLAlchemy, python-jose |
| Database  | SQLite (`test.db`) |
| AI Model  | [nlptown/bert-base-multilingual-uncased-sentiment](https://huggingface.co/nlptown/bert-base-multilingual-uncased-sentiment) via Hugging Face Inference API |
| Frontend  | [Next.js 16](https://nextjs.org/), React 19, TypeScript, Tailwind CSS 4, Framer Motion, tsparticles |
| Auth      | JWT (HS256), HTTP Bearer |
| Containers| Docker |
| CI/CD     | GitHub Actions |
| Tests     | pytest (`TestClient`), ESLint |

---

## Project Structure

```
.
├── Backend/                  # FastAPI application
│   ├── App/
│   │   ├── main.py           # App entry, CORS, router mounting
│   │   ├── autho.py          # Auth routes + JWT verification + /predict
│   │   ├── Model.py          # Hugging Face integration + sentiment mapping
│   │   ├── models.py         # SQLAlchemy User model
│   │   ├── schema.py         # Pydantic schemas
│   │   ├── database.py       # SQLite engine / session
│   │   └── tests/
│   │       └── test_api.py   # Backend API tests
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/                 # Next.js application
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── login/            # Login page
│   │   ├── registre/         # Registration page
│   │   ├── prediction/       # Sentiment analyzer dashboard
│   │   └── components/       # NavBar
│   ├── Dockerfile
│   ├── package.json
│   └── next.config.ts
│
├── api/                      # Vercel serverless entrypoints (FastAPI)
│   ├── main.py
│   ├── app.py
│   └── index.py
│
├── .github/workflows/ci.yml  # CI pipeline
├── requirements.txt          # Root requirements (delegates to Backend/)
└── test.db                   # SQLite database
```

---

## Prerequisites

- [Python](https://www.python.org/) 3.11+
- [Node.js](https://nodejs.org/) 18+ and npm
- [Docker](https://www.docker.com/) (optional, for containerized run)
- A **Hugging Face API token** — free at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

---

## Getting Started

### 1. Backend (FastAPI)

```bash
cd Backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

# set your Hugging Face token (optional but recommended)
export HF_API_TOKEN="hf_xxxxxxxxxxxxx"

uvicorn App.main:app --reload --port 8000
```

The API is now available at `http://127.0.0.1:8000`. Interactive docs: `http://127.0.0.1:8000/docs`.

### 2. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The frontend calls the backend at `http://127.0.0.1:8000` (see `app/login/page.jsx`, `app/registre/page.jsx`, and the `NEXT_PUBLIC_API_URL` env var used in `app/prediction/page.jsx`).

---

## Environment Variables

| Variable               | Where       | Required | Description                                        |
|------------------------|-------------|----------|----------------------------------------------------|
| `HF_API_TOKEN`         | Backend     | ✅        | Hugging Face API token used to authenticate requests to the inference endpoint |
| `JWT_SECRET` / `SK`    | Backend     | ⚠️        | Secret used to sign JWT tokens. Falls back to a hard-coded default if unset — **always set one in production** |
| `NEXT_PUBLIC_API_URL`  | Frontend    | ⚠️        | Base URL of the FastAPI backend (used by the prediction page) |

---

## API Reference

Base URL (local): `http://127.0.0.1:8000`

| Method | Endpoint               | Auth   | Description                            |
|--------|------------------------|--------|----------------------------------------|
| POST   | `/auth/register`       | No     | Create a new user (`username`, `password`) |
| POST   | `/auth/login`          | No     | Authenticate and receive a JWT `access_token` |
| POST   | `/auth/predict`        | ✅ Bearer | Analyze the sentiment of `text` (protected) |
| GET    | `/auth/get_prediction` | No     | List all stored predictions/users     |

### Example — Login

```bash
curl -X POST http://127.0.0.1:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "demo", "password": "secret"}'
```

Response:

```json
{ "access_token": "eyJhbGciOiJIUzI1NiIs..." }
```

### Example — Predict

```bash
curl -X POST http://127.0.0.1:8000/auth/predict \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -d '{"text": "I absolutely love this product!"}'
```

Response:

```json
{
  "message": "I absolutely love this product!",
  "prediction": 0.871234,
  "sentiment": "positive"
}
```

> `prediction` is the confidence score of the winning label; the star rating is derived from the label (`1`–`5`).

---

## Docker

### Backend

```bash
cd Backend
docker build -t sentiment-backend .
docker run -p 8000:8000 -e HF_API_TOKEN="hf_xxxxxxxx" sentiment-backend
```

### Frontend

```bash
cd frontend
docker build -t sentiment-frontend .
docker run -p 3000:3000 sentiment-frontend
```

---

## Testing

### Backend (pytest)

```bash
cd Backend
pip install -r requirements.txt
PYTHONPATH=App pytest App/tests -q
```

### Frontend (lint)

```bash
cd frontend
npm run lint
```

---

## CI/CD

`.github/workflows/ci.yml` runs on every push to `main` and on pull requests:

- **Backend job** — Python 3.11, installs dependencies, runs `pytest App/tests`.
- **Frontend job** — Node 20, `npm ci`, runs ESLint, then `next build`.

---

## Deployment (Vercel)

The `api/` directory contains serverless entrypoints (`main.py`, `app.py`, `index.py`) that expose the FastAPI app. This lets you deploy the backend directly to Vercel. The Next.js frontend can be deployed through the standard [Vercel Next.js workflow](https://nextjs.org/docs/deployment).

Remember to configure the environment variables (`HF_API_TOKEN`, `JWT_SECRET`, `NEXT_PUBLIC_API_URL`) in your hosting provider.

---

## Roadmap

- [ ] Hash passwords (e.g. bcrypt / passlib) instead of storing plain text
- [ ] Add password expiry / refresh tokens
- [ ] Migrate from SQLite to PostgreSQL for production
- [ ] Add `docker-compose.yml` to run backend + frontend together
- [ ] Persist prediction history server-side instead of `localStorage`
- [ ] Add rate limiting and request validation
- [ ] Expand test coverage (auth, predict, error cases)

---

## License

This project was created as part of a training journey and is shared for educational purposes.
