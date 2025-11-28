"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="page">
      <header className="navbar">
        <div className="brand">
          <span className="brand-mark">SA</span>
          <span className="brand-name">Sentiment Analysis</span>
        </div>
        <nav className="nav-links">
          <Link href="/login">Login</Link>
          <Link href="/registre" className="nav-cta">Get Started</Link>
        </nav>
      </header>

      <main className="layout">
        {/* LEFT – HERO / PROJECT DESCRIPTION */}
        <section className="hero">
          <h1 className="hero-title">
            Understand the tone of your text,
            <span className="hero-highlight"> instantly.</span>
          </h1>

          <p className="hero-subtitle">
            An AI-powered sentiment analysis platform built with FastAPI, JWT-secured APIs,
            and a clean Next.js interface.
          </p>

          <p className="hero-text">
            This project is part of the <strong>Simplon</strong> network. It uses the
            Hugging Face model <strong>nlptown/bert-base-multilingual-uncased-sentiment</strong>{" "}
            to score text from <strong>1 to 5</strong> and returns a clear sentiment label.
            The whole stack is containerized with <strong>Docker</strong> and ready for
            production deployment.
          </p>

          <details className="details">
            <summary>See more technical details</summary>
            <p>
              A secure <strong>FastAPI</strong> backend exposes JWT-protected endpoints that
              forward text to the Hugging Face inference API. The result is normalized into a
              simple JSON structure. A <strong>Next.js</strong> frontend consumes this API to
              provide a smooth, responsive user experience.
            </p>
          </details>

          <div className="hero-actions">
            <Link href="/login" className="btn primary">
              Login
            </Link>
            <Link href="/registre" className="btn secondary">
              Register
            </Link>
          </div>
        </section>

        {/* RIGHT – PROFILE / WHO AM I */}
        <aside className="side">
          <section className="card profile-card">
            <div className="avatar-row">
              <div className="avatar-circle">LA</div>
              <div>
                <h2 className="profile-name">Lahcen Ait Zetta</h2>
                <p className="profile-role">Full-Stack & AI Developer</p>
              </div>
            </div>

            <p className="profile-text">
              I design and build applications that combine <strong>clean backend
              architecture</strong>, <strong>modern frontends</strong>, and
              <strong> machine learning</strong> to solve real-world problems.
            </p>

            <div className="tags">
              <span>FastAPI</span>
              <span>Next.js</span>
              <span>Docker</span>
              <span>Hugging Face</span>
            </div>
          </section>

          <section className="card stack-card">
            <h3 className="card-title">Tech Stack</h3>
            <ul className="stack-list">
              <li>⚙️ FastAPI with JWT authentication</li>
              <li>📦 Dockerized services (backend & frontend)</li>
              <li>🧠 Hugging Face sentiment model (1–5 stars)</li>
              <li>🖥️ Next.js frontend with clean UX</li>
            </ul>
          </section>
        </aside>
      </main>

      <style jsx>{`
        :root {
          color-scheme: light;
        }

        .page {
          min-height: 100vh;
          background: #f5f5f7;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
            "Segoe UI", sans-serif;
          padding: 24px 32px 40px;
          color: #0f172a;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-mark {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: #111827;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .brand-name {
          font-weight: 600;
          letter-spacing: 0.03em;
          font-size: 0.95rem;
          color: #111827;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 0.9rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #4b5563;
        }

        .nav-links a:hover {
          color: #111827;
        }

        .nav-cta {
          padding: 8px 16px;
          border-radius: 999px;
          background: #111827;
          color: white !important;
          font-weight: 500;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.1fr);
          gap: 32px;
          align-items: flex-start;
        }

        .hero {
          background: #ffffff;
          border-radius: 24px;
          padding: 28px 28px 30px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          border: 1px solid #e5e7eb;
        }

        .hero-title {
          font-size: 2.4rem;
          font-weight: 750;
          letter-spacing: -0.04em;
          margin-bottom: 10px;
          color: #0b1120;
        }

        .hero-highlight {
          display: inline;
          color: #2563eb;
        }

        .hero-subtitle {
          font-size: 1rem;
          color: #4b5563;
          margin-bottom: 16px;
        }

        .hero-text {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .details {
          margin-top: 8px;
          font-size: 0.9rem;
          color: #4b5563;
        }

        .details summary {
          cursor: pointer;
          color: #2563eb;
          list-style: none;
        }

        .details summary::-webkit-details-marker {
          display: none;
        }

        .details p {
          margin-top: 6px;
          color: #6b7280;
        }

        .hero-actions {
          margin-top: 24px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 22px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform 0.12s ease, box-shadow 0.12s ease,
            background-color 0.12s ease, color 0.12s ease;
        }

        .btn.primary {
          background: #111827;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.35);
        }

        .btn.primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.45);
        }

        .btn.secondary {
          background: #ffffff;
          color: #111827;
          border-color: #d1d5db;
        }

        .btn.secondary:hover {
          background: #f9fafb;
        }

        .side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card {
          background: #ffffff;
          border-radius: 20px;
          padding: 20px 20px 22px;
          box-shadow: 0 16px 35px rgba(15, 23, 42, 0.06);
          border: 1px solid #e5e7eb;
        }

        .profile-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .avatar-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar-circle {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: #111827;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .profile-name {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
        }

        .profile-role {
          margin: 2px 0 0;
          font-size: 0.85rem;
          color: #6b7280;
        }

        .profile-text {
          font-size: 0.92rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tags span {
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: 999px;
          background: #f3f4f6;
          color: #374151;
        }

        .stack-card {
          font-size: 0.9rem;
          color: #4b5563;
        }

        .card-title {
          margin: 0 0 8px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #111827;
        }

        .stack-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .stack-list li {
          margin-bottom: 6px;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: minmax(0, 1fr);
          }
        }

        @media (max-width: 640px) {
          .page {
            padding: 16px 16px 24px;
          }

          .hero {
            padding: 22px 18px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .navbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
