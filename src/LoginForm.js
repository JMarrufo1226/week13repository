import React from 'react'

export default function () {
    return (
      <div className="LogInForm-container align-content center">
        <form className="LogIn-form">
          <div className="LogIn-form-content">
            <h3 className="LogIn-form-title">Sign In</h3>
            <div className="form-group mt-2">
              <label>Username</label>
              <input
                type="username"
                className="form-control mt-1"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group mt-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }