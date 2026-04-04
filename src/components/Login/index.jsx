import React, { useState } from 'react';
import './index.css';

// Simple Login Component for Beginners
function Login({ onLogin }) {
  // State for form inputs and mode
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Get all users from localStorage
  const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  };

  // Save users to localStorage
  const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  // Handle user registration
  const handleRegister = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password || !confirmPassword) {
      setMessage('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // Get existing users
    const users = getUsers();
    
    // Check if username exists
    if (users[username]) {
      setMessage('Username already exists');
      return;
    }

    // Save new user
    users[username] = password;
    saveUsers(users);
    
    setMessage('Registration successful! Please login.');
    
    // Clear form
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setIsRegister(false);
  };

  // Handle user login
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!username || !password) {
      setMessage('Please enter username and password');
      return;
    }

    // Get existing users
    const users = getUsers();
    
    // Check if user exists and password matches
    if (users[username] && users[username] === password) {
      setMessage('Login successful!');
      
      // Save current user and redirect
      localStorage.setItem('currentUser', username);
      
      setTimeout(() => {
        onLogin(username);
      }, 1000);
    } else {
      setMessage('Invalid username or password');
    }
  };

  // Toggle between login and register
  const toggleMode = () => {
    setIsRegister(!isRegister);
    setMessage('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <h1>AMRUTAM</h1>
          <p>{isRegister ? 'Create Account' : 'Welcome Back'}</p>
        </div>

        {/* Form */}
        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {/* Username Input */}
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Confirm Password (only for registration) */}
          {isRegister && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
              />
            </div>
          )}

          {/* Message Display */}
          {message && (
            <div className={message.includes('successful') ? 'success-message' : 'error-message'}>
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="login-footer">
          <p>
            {isRegister ? 'Already have account?' : "Don't have account?"}
            <button type="button" onClick={toggleMode}>
              {isRegister ? 'Login' : 'Register'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
