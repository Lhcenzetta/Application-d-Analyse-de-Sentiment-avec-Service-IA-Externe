"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError("Unable to register. Try a different username.");
        return;
      }

      router.push("/login");
    } catch (err) {
      console.error("Register request failed", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Create Account</h1>
        <p className="subtitle">Join our AI platform in a few seconds</p>

        <form onSubmit={Register} className="form">

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>

          {error && <p className="error">{error}</p>}
        </form>

        <p className="bottom-text">
          Already have an account?
          <Link href="/login"> Login</Link>
        </p>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f5f5f7;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          animation: fadeIn 0.6s ease;
        }

        .card {
          width: 100%;
          max-width: 420px;
          background: white;
          padding: 40px;
          border-radius: 22px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          gap: 18px;
          animation: slideUp 0.6s ease;
        }

        .title {
          font-size: 2rem;
          font-weight: 750;
          text-align: center;
          color: #111827;
        }

        .subtitle {
          text-align: center;
          margin-top: -8px;
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 10px;
        }

        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
          margin-top: 4px;
        }

        input {
          width: 100%;
          padding: 12px;
          font-size: 15px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #f9fafb;
          transition: 0.2s;
        }

        input:focus {
          border-color: #2563eb;
          background: white;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          margin-top: 8px;
          background: #111827;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s ease;
          box-shadow: 0 10px 24px rgba(17, 24, 39, 0.2);
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 28px rgba(17, 24, 39, 0.3);
        }

        .error {
          background: #fde2e4;
          color: #b91c1c;
          font-weight: 600;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          border: 1px solid #fecaca;
          margin-top: 10px;
        }

        .bottom-text {
          text-align: center;
          color: #374151;
          font-size: 0.9rem;
          margin-top: 10px;
        }

        .bottom-text a {
          color: #2563eb;
          margin-left: 5px;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(18px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .card {
            padding: 28px;
          }

          .title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </div>
  );
}
