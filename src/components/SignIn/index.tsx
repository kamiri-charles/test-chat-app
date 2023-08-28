import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_in } from './sign_in';
import { ImpulseSpinner } from "react-spinners-kit";

const SignIn: React.FC = () => {

    const [data, setData] = useState({username: '', password: ''});
    const [loading, setLoading] = useState(false);
    let nav = useNavigate();

    const handle_sign_in = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            await sign_in(data);
            nav('/');

        } catch (error) {
            alert("There was an error signing in to your account.");
            console.log(error);
        } finally {
            setLoading(false);
            }
    };

    useEffect(() => {
        // If the user is logged in, redirect to the home page
        if (localStorage.getItem('tca_data')) nav('/');
    }, [nav]);

  return (
    <div className="sign-in">
      <form>
        <div className="main">
          <div className="title">Sign in to your account</div>
          <div className="input-box">
            <input
              type="text"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <label className={data.username.length !== 0 ? "active" : ""}>
              Username
            </label>
          </div>

          <div className="input-box">
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <label className={data.password.length !== 0 ? "active" : ""}>
              Password
            </label>
          </div>

          {loading ? (
            <ImpulseSpinner frontColor="white" backColor="black" size={30} />
          ) : (
            <button onClick={handle_sign_in}>Sign in</button>
          )}

          <div className="other">
            <div>Don't have an account?</div>
            <button>Create Account</button>
          </div>
        </div>

        <div className="info">Note</div>
      </form>
    </div>
  );
};

export default SignIn;