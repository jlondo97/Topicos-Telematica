import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

const handleOnLogin = async () => {
  const res = await axios.post("/api/cliente/sign-in");
  console.log(res.data);
};

const Login = () => (
  <div>
    <div className="card ">
      <nav className="light-blue darken-4">
        <div className="container">
          <a className="brand-logo" href="/">
            Twittercito
          </a>
        </div>
      </nav>
      <div className="card-content">
        <form className="col s112">
          <div className="input-field col s6">
            <input
              type="text"
              placeholder="Email Addres"
              className="validate"
            />
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                placeholder="Password"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="input-field col s6">
            <button
              className="waves-effect waves-light btn"
              onClick={handleOnLogin}
            >
              Sing in
            </button>
          </div>
          <div className="input-field col s6">
            <Link to="/sing_up/">
              <button className="waves-effect waves-light btn">Sing up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
