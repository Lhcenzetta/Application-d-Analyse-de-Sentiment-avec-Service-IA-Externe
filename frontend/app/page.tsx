"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="page">
      {/* NAVBAR */}
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

      {/* MAIN LAYOUT */}
      <main className="layout">
        {/* HERO SECTION */}
        <section className="hero">
          <h1 className="hero-title">
            Understand emotions behind text,
            <span className="hero-highlight"> instantly & intelligently.</span>
          </h1>

          <p className="hero-subtitle">
            A clean, modern, AI-powered sentiment analysis platform built with FastAPI,
            Hugging Face, and Next.js.
          </p>

          <p className="hero-text">
            This project is part of the <strong>Simplon Network AI & Full-Stack Journey</strong>,
            created to demonstrate mastery of backend security (JWT), external AI integration,
            and professional frontend design.
          </p>

          <details className="details">
            <summary>Technical details</summary>
            <p>
              Data flows through a secure <strong>FastAPI + JWT</strong> backend, where the message
              is sent to the Hugging Face model
              <strong> nlptown/bert-base-multilingual-uncased-sentiment</strong>.
              The result is normalized and returned to the Next.js frontend.
              Everything is Dockerized for production-ready deployment.
            </p>
          </details>

          <div className="hero-actions">
            <Link href="/login" className="btn primary">Login</Link>
            <Link href="/registre" className="btn secondary">Register</Link>
          </div>
        </section>

        {/* PROFILE CARD */}
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
              Passionate about building powerful, secure backend systems and elegant frontends,
              while integrating real-world machine learning solutions.
            </p>

            <div className="tags">
              <span>FastAPI</span>
              <span>Next.js</span>
              <span>Docker</span>
              <span>Hugging Face</span>
            </div>

            <div className="socials">
              <a href="https://github.com/Lhcenzetta" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/feed/" target="_blank">LinkedIn</a>
            </div>
          </section>

          {/* STACK CARD */}
          <section className="card stack-card">
            <h3 className="card-title">Tech Stack</h3>
            <ul className="stack-list">
              <li>⚙️ FastAPI (JWT-authenticated API)</li>
              <li>📦 Dockerized backend & frontend</li>
              <li>🧠 Hugging Face sentiment model</li>
              <li>🖥️ Next.js professional UI</li>
            </ul>
          </section>
        </aside>
      </main>

      {/* HOW IT WORKS SECTION */}
      <section className="steps-section">
        <h2 className="steps-title">How It Works</h2>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Enter your text</h3>
            <p>You write any sentence, review, message, or content you want to analyze.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>FastAPI processes it securely</h3>
            <p>The request is authenticated with JWT to ensure only authorized users access it.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>AI model evaluates sentiment</h3>
            <p>The Hugging Face model returns a score from 1 (very negative) to 5 (very positive).</p>
          </div>
        </div>
      </section>

      {/* PROJECT IMAGE SHOWCASE */}
      <section className="image-section">
        <h2 className="image-title">Project Showcase</h2>
        <p className="image-subtitle">
          A preview of the clean and modern Next.js interface.
        </p>

        <div className="image-wrapper">
          <Image
            src="/image.png"
            alt="Sentiment Analysis UI"
            className="project-image"
            width={1478}
            height={818}
            priority
          />
        </div>
      </section>

      {/* SIMPLON DEDICATION SECTION */}
      <section className="simplon-section">
        <p>
          Built proudly as part of the  
          <strong> Simplon Network AI & Full-Stack Training Journey</strong>.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sentiment Analysis — Built by Lahcen Ait Zetta.</p>
      </footer>

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f5f5f7;
          padding: 24px 32px 60px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            "SF Pro Text", "Segoe UI", sans-serif;
          color: #0f172a;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
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
          background: #111827;
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .brand-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-links a {
          color: #4b5563;
          text-decoration: none;
        }

        .nav-cta {
          padding: 8px 16px;
          background: #111827;
          color: white !important;
          border-radius: 999px;
          font-weight: 500;
        }

        /* MAIN GRID */
        .layout {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 40px;
          margin-bottom: 64px;
        }

        /* HERO */
        .hero {
          background: white;
          padding: 48px;
          border-radius: 28px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 20px 50px rgba(0,0,0,0.07);
          animation: fadeIn 0.7s ease forwards;
        }

        .hero-title {
          font-size: 2.9rem;
          font-weight: 750;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .hero-highlight {
          color: #2563eb;
        }

        .hero-subtitle {
          color: #4b5563;
          margin-bottom: 18px;
          font-size: 1.1rem;
          line-height: 1.4;
        }

        .hero-text {
          color: #4b5563;
          margin-bottom: 16px;
          line-height: 1.7;
        }

        .details summary {
          cursor: pointer;
          color: #2563eb;
          font-size: 0.95rem;
        }

        .hero-actions {
          margin-top: 30px;
          display: flex;
          gap: 16px;
        }

        /* BUTTONS */
        .btn {
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
        }

        .primary {
          background: #111827;
          color: #ffffff;
        }

        .secondary {
          background: white;
          border: 1px solid #d1d5db;
        }

        /* PROFILE SIDE */
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
          box-shadow: 0 18px 35px rgba(0,0,0,0.05);
        }

        .avatar-circle {
          width: 48px;
          height: 48px;
          background: #111827;
          color: white;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .profile-text {
          margin-top: 12px;
          color: #4b5563;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .tags span {
          padding: 4px 12px;
          background: #f3f4f6;
          border-radius: 999px;
          font-size: 0.85rem;
          color: #374151;
        }

        .socials {
          margin-top: 14px;
          display: flex;
          gap: 14px;
        }

        .socials a {
          font-size: 0.9rem;
          text-decoration: none;
          color: #2563eb;
        }

        /* HOW IT WORKS */
        .steps-section {
          margin-top: 60px;
          margin-bottom: 40px;
          text-align: center;
        }

        .steps-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 28px;
        }

        .steps-grid {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .step-card {
          background: white;
          padding: 28px;
          border-radius: 22px;
          border: 1px solid #e5e7eb;
          width: 260px;
          box-shadow: 0 14px 30px rgba(0,0,0,0.05);
          text-align: left;
          animation: fadeInUp 0.8s ease;
        }

        .step-number {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          background: #111827;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 10px;
        }

        /* IMAGE SECTION */
        .image-section {
          margin-top: 80px;
          text-align: center;
        }

        .image-title {
          font-size: 2rem;
          font-weight: 700;
        }

        .image-subtitle {
          color: #6b7280;
          margin-bottom: 20px;
        }

        .image-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }

        .project-image {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 18px 45px rgba(0,0,0,0.1);
          border: 1px solid #e5e7eb;
        }

        /* SIMPLON SECTION */
        .simplon-section {
          text-align: center;
          margin-top: 50px;
          font-size: 1rem;
          color: #374151;
        }

        /* FOOTER */
        .footer {
          text-align: center;
          margin-top: 40px;
          color: #6b7280;
          font-size: 0.85rem;
        }

        /* ANIMATIONS */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
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
