import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preveData) => ({
      ...preveData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = {};
    if (!data.email.trim()) {
      validationError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationError.email = "Please enter a valid email address.";
    }

    if (!data.password.trim()) {
      validationError.password = "Password is required";
    } else if (data.password.length < 6) {
      validationError.password = "password should be at list 6 charactors";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      console.log("form submitted");
    }

    console.log(data);
    navigate("/home");
  };
  return (
    <div className="container-fluid" style={{ width: "1000px" }}>
      <div className="container mt-5 w-50 py-5 rounded-2">
        <header className="bg-primary text-white py-5">
          <div className="container d-flex align-items-center mx-5 justify-content-start">
            <svg
              className="brand-icon"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              width="30"
              height="33"
              viewBox="0 0 30 33"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  className="logo-fill-blue"
                  fill="#7DBCFF"
                  d="M0 4v25l8 4V0zM22 4v25l8 4V0z"
                ></path>
                <path
                  className="logo-fill-white"
                  fill="#FFF"
                  d="M11 4v25l8 4V0z"
                ></path>
              </g>
            </svg>
            <h4 className="mb-0 mx-4">Aana Business</h4>
          </div>
        </header>
        <div className="bg-white p-5">
          <h3 className="mb-5">Sign In</h3>
          <form className="mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control p-2"
                id="email"
                name="email"
                placeholder="Enter email"
                value={data.email}
                onChange={handleChange}
                required
              />
              {error.email && (
                <span className="text-danger">{error.email}</span>
              )}
            </div>

            <div className="form-group mt-4">
              <input
                type="password"
                className="form-control p-2"
                id="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                required
              />
              {error.password && (
                <span className="text-danger">{error.password}</span>
              )}
            </div>

            <div className="form-check mt-4 mb-5">
              <input
                type="checkbox"
                className="form-check-input mw"
                id="rememberMe"
              />
              <label className="form-check-label" for="rememberMe">
                Remember me
              </label>
            </div>

            <button
              // to="home"
              type="submit"
              className="btn btn-primary w-100 p-3 display-5 fw-bold"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
