"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Predict() {
  const router = useRouter();

  const [hasToken, setHasToken] = useState(() => {
    if (typeof window === "undefined") return null;
    return Boolean(localStorage.getItem("token"));
  });
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("history") || "[]");
    } catch {
      return [];
    }
  });
  const [showIdeas, setShowIdeas] = useState(false);

  useEffect(() => {
    if (hasToken === null) return;
    if (!hasToken) router.push("/login");
  }, [hasToken, router]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    setHasToken(false);
    router.push("/login");
  };


  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  const handle_text = async (e) => {
    e.preventDefault();
    setLoading(true);
    setData(null);

    const token_access = localStorage.getItem("token");

    const response = await fetch("http://127.0.0.1:8000/auth/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token_access}`,
      },
      body: JSON.stringify({ text }),
    });

    const result = await response.json();
    setData(result);
    setLoading(false);

    const entry = {
      input: text,
      prediction: result.prediction,
      sentiment: result.sentiment,
      date: new Date().toLocaleString(),
    };

    setHistory((prevHistory) => {
      const updatedHistory = [entry, ...prevHistory];
      localStorage.setItem("history", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };


  const getColor = (sentiment) => {
    if (!sentiment) return "#333";
    if (sentiment.toLowerCase().includes("positive")) return "#22c55e";
    if (sentiment.toLowerCase().includes("negative")) return "#ef4444";
    return "#3b82f6";
  };


  const exampleIdeas = [
    "I really love this product!",
    "This is the worst service I've ever seen.",
    "I'm not sure how I feel about this.",
    "I feel happy today.",
    "The experience was okay, but could be better.",
  ];

  
  if (hasToken === null) {
    return (
      <div className="page">
        <h1 style={{ marginTop: "80px" }}>Checking authentication...</h1>
      </div>
    );
  }

  if (!hasToken) {
    return (
      <div className="page">
        <h1 style={{ marginTop: "80px" }}>Redirecting to login...</h1>
      </div>
    );
  }

  return (
    <div className="page">
      {/* FLOATING BUTTONS */}
      <div className="floating-buttons">
        <button className="btn-floating logout" onClick={handleLogout}>
          🚪 Logout
        </button>

        <button className="btn-floating ideas" onClick={() => setShowIdeas(!showIdeas)}>
          💡 Ideas
        </button>

        <button className="btn-floating clear" onClick={clearHistory}>
          🗑 Clear History
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="content">

        {/* LEFT CARD */}
        <div className="card">
          <h1 className="title">Sentiment Analyzer</h1>
          <p className="subtitle">Analyze emotions behind text instantly</p>

          {/* IDEAS PANEL */}
          {showIdeas && (
            <div className="idea-box">
              {exampleIdeas.map((item, i) => (
                <p key={i} className="idea-item" onClick={() => setText(item)}>
                  {item}
                </p>
              ))}
            </div>
          )}

          <form onSubmit={handle_text} className="form">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="5"
              className="textarea"
              placeholder="Type a sentence..."
            ></textarea>

            <button type="submit" className="btn">Analyze</button>
          </form>

          {/* LOADING */}
          {loading && (
            <div className="loading-box">
              <div className="spinner"></div>
              <p>Analyzing sentiment...</p>
            </div>
          )}

          {/* RESULT */}
          {data && !loading && (
            <div className="result-box">
              <h2>Prediction Result</h2>
              <p><strong>Score:</strong> {data.prediction}</p>
              <p style={{ color: getColor(data.sentiment), fontWeight: "700" }}>
                <strong>Sentiment:</strong> {data.sentiment}
              </p>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="sidebar">
          <h2>History</h2>

          <div className="history-list">
            {history.length === 0 && <p>No predictions yet.</p>}

            {history.map((entry, index) => (
              <div key={index} className="history-item">
                <p>“{entry.input.substring(0, 40)}...”</p>
                <p>
                  <strong style={{ color: getColor(entry.sentiment) }}>
                    {entry.sentiment}
                  </strong>
                  {" "}– Score: {entry.prediction}
                </p>
                <span className="date">{entry.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f5f5f7;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* FLOATING BUTTONS */
        .floating-buttons {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 999;
        }

        .btn-floating {
          padding: 12px 20px;
          border: none;
          border-radius: 50px;
          color: white;
          font-weight: 700;
          backdrop-filter: blur(10px);
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          transition: transform 0.25s ease;
        }

        .btn-floating:hover {
          transform: scale(1.05);
        }

        .logout {
          background: linear-gradient(135deg, #ef4444, #b91c1c);
        }
        .ideas {
          background: linear-gradient(135deg, #2563eb, #1e40af);
        }
        .clear {
          background: linear-gradient(135deg, #7c3aed, #581c87);
        }

        /* LAYOUT */
        .content {
          display: flex;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
        }

        .card {
          flex: 1;
          background: white;
          padding: 40px;
          border-radius: 22px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .title {
          text-align: center;
          font-size: 2rem;
          font-weight: 750;
        }

        /* IDEAS */
        .idea-box {
          background: #eef2ff;
          padding: 15px;
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .idea-item {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin-bottom: 8px;
          cursor: pointer;
        }

        .idea-item:hover {
          background: #dbeafe;
        }

        textarea {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: 1px solid #ddd;
          background: #fafafa;
          margin-top: 10px;
        }

        .btn {
          margin-top: 15px;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: #111827;
          color: white;
          font-weight: 600;
        }

        .spinner {
          width: 30px;
          height: 30px;
          border: 4px solid #ddd;
          border-top-color: #111827;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          margin: auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* SIDEBAR */
        .sidebar {
          width: 300px;
          background: white;
          padding: 30px;
          border-radius: 22px;
          height: 550px;
          overflow-y: auto;
        }

        .history-item {
          background: #fafafa;
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 10px;
        }

      `}</style>
    </div>
  );
}
