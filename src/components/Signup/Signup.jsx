import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4  text-center">
          <form className="rounded bg-white shadow p-5">
            <h3 className="text-dark fw-bolder fs-4 mb-2">Register</h3>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Name"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
              />
              <label for="floatingPassword">Confirm Password</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 my-4 text-uppercase"
            >
              Register
            </button>
            <div className="fw-normal text-muted">
              Already Have an Account?{" "}
              <Link
                to="/"
                className="text-primary fw-bold text-decoration-none"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
