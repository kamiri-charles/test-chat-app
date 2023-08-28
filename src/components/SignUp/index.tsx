import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_up } from './sign_up';
import { ImpulseSpinner } from "react-spinners-kit";

const SignUp: React.FC = () => {

  let [data, setData] = React.useState({firstname: '', lastname: '', email: '', username: '', password: ''});
  let [loading, setLoading] = useState(false);
  let nav = useNavigate();

  const handle_sign_up = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await sign_up(data);
      nav('/');
    } catch (error) {
      alert("There was an error creating your account.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If the user is logged in, redirect to the home page
    if (localStorage.getItem('tca_data')) nav('/');
  })

  return (
    <div className="sign-up">
      <form>
        <div className="main">
          <div className="title">Sign in to your account</div>

          <div className="input-box">
            <input
              type="text"
              value={data.firstname}
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
              className={data.firstname.length !== 0 ? "active" : ""}
            />
            <label className={data.firstname.length !== 0 ? "active" : ""}>
              First name (optional)
            </label>
          </div>

          <div className="input-box">
            <input
              type="text"
              value={data.lastname}
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
              className={data.lastname.length !== 0 ? "active" : ""}
            />
            <label className={data.lastname.length !== 0 ? "active" : ""}>
              Last name (optional)
            </label>
          </div>

          <div className="input-box">
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className={data.email.length !== 0 ? "active" : ""}
            />
            <label className={data.email.length !== 0 ? "active" : ""}>
              Email (optional)
            </label>
          </div>

          <div className="input-box">
            <input
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              className={data.username.length !== 0 ? "active" : ""}
              required
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
              className={data.password.length !== 0 ? "active" : ""}
              required
            />
            <label className={data.password.length !== 0 ? "active" : ""}>
              Password
            </label>
          </div>

          {loading ? <ImpulseSpinner frontColor="white" backColor="black" size={30} /> : <button onClick={handle_sign_up}>Sign up</button>}

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