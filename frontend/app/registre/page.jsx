'use client'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter()
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const Register = (e) => {
        e.preventDefault()
        const response = fetch('http://127.0.0.1:8000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password})
        });
        router.push('/login')
    }
    return (
    <div className="register-container">
        <form onSubmit={Register} className="register-form">
                <h1>Register</h1>
                <label>Username</label>
                <input 
                  id="username"
                  type="text" 
                  placeholder='Enter your username' 
                  value={username} 
                  onChange={(e)=>setUsername(e.target.value)}
                  className="register-input"
                /> 
                
                <label>Password</label>
                <input 
                  id="password"
                  value={password} 
                  onChange={(e)=>setPassword(e.target.value)} 
                  type="password" 
                  placeholder='Enter your password'
                  className="register-input"
                />
                
                <button type='submit' className="register-btn">Submit</button>
                
                <p className="register-link">
                  Already have an account? <Link href="/login">Login here</Link>
                </p>
        </form>

        <style jsx>{`
          .register-container {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
          }

          .register-form {
            width: 100%;
            max-width: 400px;
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          h1 {
            text-align: center;
            color: #2d3748;
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          label {
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 5px;
            display: block;
          }

          .register-input {
            width: 100%;
            padding: 12px 14px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 15px;
            font-family: inherit;
            transition: all 0.3s ease;
            background-color: #f7fafc;
          }

          .register-input:focus {
            border-color: #667eea;
            background-color: white;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            outline: none;
          }

          .register-btn {
            width: 100%;
            padding: 12px;
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
            margin-top: 10px;
          }

          .register-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
          }

          .register-btn:active {
            transform: translateY(0);
          }

          .register-link {
            text-align: center;
            font-size: 14px;
            color: #4a5568;
            margin-top: 15px;
          }

          .register-link a {
            color: #667eea;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .register-link a:hover {
            color: #764ba2;
            text-decoration: underline;
          }

          @media (max-width: 480px) {
            .register-form {
              padding: 30px 20px;
            }

            h1 {
              font-size: 1.5rem;
            }
          }
        `}</style>
    </div>
  )
}

export default page