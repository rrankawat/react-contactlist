import React, { Fragment } from 'react';

const Login = () => {
  return (
    <Fragment>
      <h1 className="my-5 text-center">
        Login <span className="text-purple">Account</span>
      </h1>

      <form className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Password</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <button className="btn btn-purple btn-block mt-4">Login</button>
      </form>
    </Fragment>
  );
};

export default Login;
