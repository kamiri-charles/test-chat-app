import React, { useState } from 'react';
import './styles.scss';
import { sign_in } from './sign_in';

const SignIn: React.FC = () => {

    const [data, setData] = useState({username: '', password: ''});

  return (
    <div className='sign-in'>
        <form>
            <div className="input-box">
                <input
                    type="text"
                    value={data.username} 
                    onChange={e => setData({...data, username: e.target.value})} />
                <label>Username</label>
            </div>

            <div className="input-box">
                <input
                    type="password"
                    value={data.password}
                    onChange={e => setData({...data, password: e.target.value})} />
                <label>Password</label>
            </div>

            <button
                type='submit'
                onClick={() => sign_in(data)}>
                    Log in
            </button>
        </form>
    </div>
  )
};

export default SignIn;