import React, { useState } from 'react';
import { sign_in } from './sign_in';

const SignIn: React.FC = () => {

    const [data, setData] = useState({username: '', password: ''});

  return (
    <div className='sign-in'>
        <form>
            <div className="main">
                <div className="title">Sign in to your account</div>
                <div className="input-box">
                    <input
                        type="text"
                        value={data.username} 
                        onChange={e => setData({...data, username: e.target.value})} />
                    <label className={data.username.length !== 0 ? 'active' : ''}>Username</label>
                </div>

                <div className="input-box">
                    <input
                        type="password"
                        value={data.password}
                        onChange={e => setData({...data, password: e.target.value})} />
                    <label className={data.password.length !== 0 ? 'active' : ''}>Password</label>
                </div>

                <button
                    type='submit'
                    onClick={() => sign_in(data)}>
                        Log in
                </button>

                <div className="other">
                    <div>Don't have an account?</div>
                    <button>Create Account</button>
                </div>
            </div>

            <div className="info">Note</div>
        </form>
    </div>
  )
};

export default SignIn;