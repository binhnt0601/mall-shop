import React from "react";

export const dynamic = "force-dynamic";

// const loginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPasswordl] = useState('');
//   const [error, setError] = useState('');
// }

// const handleSubmit = (event) => {
//   event.preventDefault();
//   if (!email || !password) {
//     setError('Email and Password can not be empty');
//     return;
//   }
//   if (email === 'user@example.com' && password === 'password123') {
//     setError('');
//     alert('Login successful!');

//   } else {
//     setError('Invalid email or password.');
//   }
// };

const loginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            
            
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


        <button style={{border:"1"}} type="submit">Login</button>
        <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
      </form>
    </div>
  );
}

export default loginPage;

