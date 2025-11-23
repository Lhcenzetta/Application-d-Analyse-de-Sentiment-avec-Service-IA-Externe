"use client"

import React from 'react'
import Link from 'next/link'

const page = () => {
  
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Sentiment Analysis</h1>
        <p className="home-subtitle">Analyze the sentiment of your text with AI-powered insights</p>
        
        <div className="button-group">
          <Link href="/login" className="btn-primary">Login</Link>
          <Link href="/registre" className="btn-secondary">Register</Link>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .home-content {
          text-align: center;
          color: white;
          max-width: 600px;
        }

        .home-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 15px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .home-subtitle {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
          line-height: 1.6;
        }

        .button-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        :global(.btn-primary),
        :global(.btn-secondary) {
          padding: 15px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        :global(.btn-primary) {
          background-color: white;
          color: #667eea;
        }

        :global(.btn-primary:hover) {
          transform: translateY(-3px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }

        :global(.btn-secondary) {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        :global(.btn-secondary:hover) {
          background-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 2.5rem;
          }

          .home-subtitle {
            font-size: 1.1rem;
          }

          .button-group {
            flex-direction: column;
          }

          :global(.btn-primary),
          :global(.btn-secondary) {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default page
