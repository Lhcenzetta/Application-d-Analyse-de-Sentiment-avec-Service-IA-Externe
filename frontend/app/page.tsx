"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="page">
      {/* TOP NAV BAR */}
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

      {/* MAIN CONTENT GRID */}
      <main className="layout">
        {/* LEFT – HERO */}
        <section className="hero">
          <h1 className="hero-title">
            Analyze text sentiment with
            <span className="hero-highlight"> clarity & simplicity.</span>
          </h1>

          <p className="hero-subtitle">
            A modern and secure AI-powered platform built with FastAPI, Hugging Face,
            and Next.js to instantly detect emotion in your text.
          </p>

          <p className="hero-text">
            This project uses the multilingual model 
            <strong> nlptown/bert-base-multilingual-uncased-sentiment </strong>
            to return a score from <strong>1 to 5</strong>.  
            Fully secured (JWT), containerized (Docker), and designed with a clean UX philosophy.
          </p>

          <details className="details">
            <summary>More technical info</summary>
            <p>
              FastAPI receives the request, checks authentication (JWT), and sends the
              text payload to Hugging Face inference API. Results are normalized and returned
              instantly. Frontend is lightweight, responsive, and production-ready.
            </p>
          </details>

          <div className="hero-actions">
            <Link href="/login" className="btn primary">Login</Link>
            <Link href="/registre" className="btn secondary">Register</Link>
          </div>
        </section>

        {/* RIGHT – PROFILE */}
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
              I create solutions that mix scalable backend systems, clean frontends,
              and machine learning to solve real-world problems with elegance.
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
              <li>⚙️ FastAPI (JWT authentication)</li>
              <li>📦 Docker containerization</li>
              <li>🧠 Hugging Face Sentiment Model</li>
              <li>🖥️ Next.js modern UI</li>
            </ul>
          </section>
        </aside>
      </main>

      {/* IMAGE SHOWCASE SECTION */}
      <section className="image-section">
        <h2 className="image-title">Project Showcase</h2>
        <p className="image-subtitle">
          Screenshot of the sentiment analysis interface built with Next.js.
        </p>

        <div className="image-wrapper">
          <img
            src="/Users/lait-zet/Desktop/The Briefs/Application-d-Analyse-de-Sentiment-avec-Service-IA-Externe/frontend/public/image.png" 
            alt="Sentiment Analysis App"
            className="project-image"
          />
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sentiment Analysis — All rights reserved.</p>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f5f5f7;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
            "Segoe UI", sans-serif;
          padding: 24px 32px 60px;
          color: #0f172a;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-mark {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #111827;
          color: white;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .brand-name {
          font-weight: 600;
          font-size: 1rem;
          color: #111827;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav-links a {
          text-decoration: none;
          color: #4b5563;
          font-size: 0.9rem;
        }

        .nav-cta {
          padding: 8px 16px;
          border-radius: 999px;
          background: #111827;
          color: white !important;
          font-weight: 500;
        }

        /* LAYOUT GRID */
        .layout {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        /* HERO */
        .hero {
          background: #ffffff;
          padding: 40px;
          border-radius: 28px;
          box-shadow: 0 20px 50px rgba(15,23,42,0.08);
          border: 1px solid #e5e7eb;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 750;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }

        .hero-highlight {
          color: #2563eb;
        }

        .hero-subtitle {
          color: #4b5563;
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .hero-text {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 15px;
          font-size: 1rem;
        }

        .details summary {
          cursor: pointer;
          color: #2563eb;
          font-size: 0.95rem;
        }

        .hero-actions {
          margin-top: 28px;
          display: flex;
          gap: 14px;
        }

        /* BUTTONS */
        .btn {
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
        }

        .primary {
          background: #111827;
          color: white;
        }

        .secondary {
          background: white;
          color: #111827;
          border: 1px solid #d1d5db;
        }

        /* SIDE PROFILE SECTION */
        .side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card {
          background: white;
          padding: 28px;
          border-radius: 22px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 18px 45px rgba(0,0,0,0.05);
        }

        .avatar-circle {
          width: 48px;
          height: 48px;
          background: #111827;
          color: white;
          border-radius: 999px;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* IMAGE SHOWCASE */
        .image-section {
          text-align: center;
          margin-top: 40px;
        }

        .image-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .image-subtitle {
          color: #6b7280;
          margin-bottom: 24px;
          font-size: 0.95rem;
        }

        .image-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .project-image {
          width: 100%;
          border-radius: 20px;
          box-shadow: 
            0 10px 25px rgba(0,0,0,0.08),
            0 4px 15px rgba(0,0,0,0.06);
          border: 1px solid #e5e7eb;
        }

        /* FOOTER */
        .footer {
          text-align: center;
          margin-top: 50px;
          color: #6b7280;
          font-size: 0.85rem;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
