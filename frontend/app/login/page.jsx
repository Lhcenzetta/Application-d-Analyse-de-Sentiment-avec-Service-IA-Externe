"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const get_info = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      router.push("/prediction");
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Welcome Back</h1>
        <p className="subtitle">Log in to access your dashboard</p>

        <form onSubmit={get_info} className="form">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          {error && <p className="error">{error}</p>}
        </form>

        <p className="bottom-text">
          Don&apos;t have an account?
          <Link href="/registre"> Register here</Link>
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
        }

        label {
          font-size: 0.9rem;
          font-weight: 500;
          color: #374151;
        }

        input {
          width: 100%;
          padding: 12px;
          font-size: 15px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          transition: 0.2s;
          background: #f9fafb;
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
          margin-top: 10px;
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
          margin-top: 10px;
          color: #374151;
          font-size: 0.9rem;
        }

        .bottom-text a {
          color: #2563eb;
          margin-left: 5px;
          font-weight: 600;
        }

        @media (max-width: 480px) {
          .card {
            padding: 28px;
          }
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
      `}</style>
    </div>
  );
};

export default Login;
