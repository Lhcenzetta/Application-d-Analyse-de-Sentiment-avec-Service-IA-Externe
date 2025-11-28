"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const token = typeof window !== "undefined" && localStorage.getItem("token");
    setLogged(Boolean(token));
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    setLogged(false);
    router.push("/");
  };

  const isActive = (path) => {
    if (!pathname) return false;
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="nav-root">
      <a className="skip-link" href="#content">Skip to content</a>
      <nav className="nav container" role="navigation" aria-label="Main navigation">
        <div className="brand">
          <Link href="/">SentimentAI</Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          aria-expanded={open}
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="primary-navigation" className={`nav-links ${open ? "open" : ""}`} aria-hidden={!open && typeof window !== 'undefined' && window.innerWidth <= 768}>
          <li>
            <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link href="/prediction" className={isActive("/prediction") ? "active" : ""}>Prediction</Link>
          </li>
          {!logged && (
            <>
              <li>
                <Link href="/login" className={isActive("/login") ? "active" : ""}>Login</Link>
              </li>
              <li>
                <Link href="/registre" className={isActive("/registre") ? "active" : ""}>Register</Link>
              </li>
            </>
          )}

          {logged && (
            <>
              <li>
                <button className="link-button" onClick={handleLogout} aria-label="Logout">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <style jsx>{`
        .nav-root {
          position: sticky;
          top: 0;
          width: 100%;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--border-color);
          z-index: 60;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          gap: 12px;
        }

        .brand a {
          font-weight: 800;
          color: var(--foreground);
          font-size: 1.1rem;
          text-decoration: none;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .nav-links li a {
          color: var(--foreground);
          text-decoration: none;
          font-weight: 600;
        }

        .link-button {
          background: transparent;
          border: none;
          color: var(--foreground);
          font-weight: 600;
          cursor: pointer;
          padding: 6px 10px;
        }

        .menu-toggle {
          display: none;
          width: 36px;
          height: 28px;
          border: none;
          background: transparent;
          flex-direction: column;
          justify-content: space-between;
          padding: 4px 6px;
          cursor: pointer;
        }

        .menu-toggle span {
          display: block;
          height: 3px;
          background: var(--foreground);
          border-radius: 2px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .menu-toggle.open span:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav-links {
            position: absolute;
            right: 16px;
            top: 64px;
            background: white;
            border-radius: 10px;
            padding: 12px 16px;
            flex-direction: column;
            gap: 10px;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
            display: none;
            min-width: 160px;
          }

          .nav-links.open {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
