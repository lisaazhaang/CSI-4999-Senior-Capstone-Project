import React, {Component} from 'react'

export default class Login extends Component {
  render(){
    return (
      <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
  <section className="hero is-link">
    <div className="hero-body">
      <p className="title">
        *Project Title
      </p>
      <p className="subtitle">
        Project Catchphrase
      </p>
    </div>
  </section>
  <div className="columns">
    <div className="column is-half is-offset-1">
      <div className="field is-horizontal">
      </div>
      <div className="field is-horizontal">
      </div>
      <div className="center">
        <h2 className="title is-2">Login</h2></div>
      <div className="field is-horizontal">
      </div>
      <div className="field is-horizontal">
      </div>
      <div className="field is-horizontal">
      </div>
      <form className="box">
        <div className="field">
          <label className="label">Email/Username</label>
          <div className="control">
            <input className="input" type="email" placeholder="Username" />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="Password" />
          </div>
        </div>
        <div className="field is-horizontal">
        </div>
        <button className="button is-link is-outlined">Sign in</button>
        <button className="button is-link is-outlined">Forgot password</button>
        <button className="button is-link is-outlined">Create new account</button>
      </form>
    </div>
  </div>
</div>
);
    }
  }