"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

const Login = () => {
    const router = useRouter()
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [error, setError] = useState("")

    const get_info = async (e) => {
        e.preventDefault()
        setError("") // reset error

        const response = await fetch('http://127.0.0.1:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password})
        });

        const data = await response.json()

        if (data.access_token){
            localStorage.setItem('token', data.access_token)
            router.push('/prediction')
        }
        else {
            setError("❌ Incorrect username or password");
        }
    }

    return (
        <div className="container">
            <form className="card" onSubmit={get_info}>
                <h1>Login</h1>

                <label>Username</label>
                <input 
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <label>Password</label>
                <input 
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type='submit'>Validate</button>

                {/* 🔥 Error message */}
                {error && <p className="error">{error}</p>}

                <p className="bottom-text">
                    Don't have an account? 
                    <Link href="/registre"> Register here</Link>
                </p>
            </form>
            <style jsx>{`
                .container {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #f5f7fa;
                    padding: 20px;
                }

                .card {
                    width: 100%;
                    max-width: 400px;
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                h1 {
                    text-align: center;
                    color: #333;
                }

                label {
                    font-weight: 500;
                    margin-top: 5px;
                    color: #444;
                }

                input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    font-size: 15px;
                    transition: 0.2s;
                }

                input:focus {
                    border-color: #4a90e2;
                    box-shadow: 0 0 5px rgba(74,144,226,0.3);
                    outline: none;
                }

                button {
                    width: 100%;
                    padding: 12px;
                    background: #4a90e2;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: 0.3s;
                    margin-top: 10px;
                }

                button:hover {
                    background: #3779c6;
                }

                .error {
                    margin-top: 10px;
                    color: #e63946;
                    background: #ffe5e8;
                    padding: 10px;
                    border-radius: 8px;
                    text-align: center;
                    font-weight: 600;
                    border: 1px solid #e63946;
                }

                .bottom-text {
                    text-align: center;
                    font-size: 14px;
                    margin-top: 10px;
                }

                a {
                    color: #4a90e2;
                    font-weight: 600;
                    margin-left: 5px;
                }

                @media (max-width: 480px) {
                    .card {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Login;
