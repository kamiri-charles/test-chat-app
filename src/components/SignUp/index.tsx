import React from 'react'
import { sign_up } from './sign_up';

const SignUp: React.FC = () => {

    const  [data, setData] = React.useState({first_name: '', last_name: '', username: '', password: ''});

  return (
    <div className="sign-up">
      <form>
        <div className="main">
          <div className="title">Sign in to your account</div>

          <div className="input-box">
            <input
              type="text"
              value={data.first_name}
              onChange={(e) => setData({ ...data, first_name: e.target.value })}
            />
            <label className={data.first_name.length !== 0 ? "active" : ""}>
              First name (optional)
            </label>
          </div>

          <div className="input-box">
            <input
              type="text"
              value={data.last_name}
              onChange={(e) => setData({ ...data, last_name: e.target.value })}
            />
            <label className={data.last_name.length !== 0 ? "active" : ""}>
              Last name (optional)
            </label>
          </div>

          <div className="input-box">
            <input
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label className={data.username.length !== 0 ? "active" : ""}>
              Select a username
            </label>
          </div>

          <div className="input-box">
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
            <label className={data.password.length !== 0 ? "active" : ""}>
              Password
            </label>
          </div>

          <button type="submit" onClick={() => sign_up(data)}>
            Create Account
          </button>

          <div className="other">
            <div>Already have an account?</div>
            <button>Sign in</button>
          </div>
        </div>

        <div className="info">Note</div>
      </form>
    </div>
  );
}

export default SignUp;