"use client"

import { useState } from "react";

export default function Predict() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);

  const handle_text = async (e) => {
    e.preventDefault();
    const token_access = localStorage.getItem('token');

    const response = await fetch('http://127.0.0.1:8000/auth/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token_access}`
      },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <div className="predict-container">
      <form onSubmit={handle_text} className="predict-form">
        <h1>Enter your message :</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="5"
          cols="50"
          className="predict-textarea"
          placeholder="Type your message here to analyze its sentiment..."
        ></textarea>

        <br />

        <button type="submit" className="predict-btn">Send</button>
      </form>

      {/* ------- DISPLAY RESULT HERE ------- */}
      {data && (
        <div className="result-box">
          <h2>Prediction Result</h2>
          <p><strong>Prediction score:</strong> {data.prediction}</p>
          <p><strong>Sentiment:</strong> {data.sentiment}</p>
        </div>
      )}

      <style jsx>{`
        .predict-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .predict-form {
          width: 100%;
          max-width: 600px;
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        h1 {
          text-align: center;
          color: #2d3748;
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .predict-textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 15px;
          font-family: inherit;
          resize: vertical;
          transition: all 0.3s ease;
          line-height: 1.5;
        }

        .predict-textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          outline: none;
        }

        .predict-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .predict-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .predict-btn:active {
          transform: translateY(0);
        }

        .result-box {
          margin-top: 30px;
          background: #f7fafc;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          text-align: center;
          width: 100%;
          max-width: 600px;
        }

        .result-box h2 {
          margin-bottom: 10px;
          color: #2d3748;
        }

        .result-box p {
          font-size: 16px;
          color: #4a5568;
        }

        @media (max-width: 768px) {
          .predict-form {
            padding: 30px 20px;
          }

          h1 {
            font-size: 1.5rem;
          }

          .predict-textarea {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
