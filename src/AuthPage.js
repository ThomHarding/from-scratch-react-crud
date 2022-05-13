import { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils.js';

export default function AuthPage({ setEmail, setToken }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(signInEmail, signInPassword);

    const { 
      access_token, 
      user: { 
        email,
      } 
    } = getUser();

    setEmail(email);
    setToken(access_token);
  }
    
  async function handleSignUp(e) {
    e.preventDefault();
    await signUp(signUpEmail, signUpPassword);

    const { 
      access_token, 
      user: { 
        email,
      } 
    } = getUser();

    setEmail(email);
    setToken(access_token);
  }

  return (
    <div className='auth' style={{ backgroundImage: `url("/bg.png")` }}>
      <h1><em>Authorization</em></h1>
      <form onSubmit={handleSignUp}>
        <label>
            Email
          <input onChange={e => setSignUpEmail(e.target.value)} required type="email" name="email" />
        </label>
        <label>
            Password
          <input onChange={e => setSignUpPassword(e.target.value)}required type="password" name="password" />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
            Email
          <input onChange={e => setSignInEmail(e.target.value)}required type="email" name="email" />
        </label>
        <label>
            Password
          <input onChange={e => setSignInPassword(e.target.value)} required type="password" name="password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
