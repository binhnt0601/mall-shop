"use client";

import React, { useState } from "react";

export const dynamic = "force-dynamic";

export default function loginPage() {
  const [email, setEmail] = useState('');
  const [password, setPasswordl] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Email and Password can not be empty');
      return;
    }
    if (email === 'user@example.com' && password === 'password123') {
      setError('');
      alert('Login successful!');

    } else {
      setError('Invalid email or password.');
    }
  };

  return (

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          {error && <div className="error-message">{error}</div>}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button style={{ border: "1" }} type="submit">
          Login
        </button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}