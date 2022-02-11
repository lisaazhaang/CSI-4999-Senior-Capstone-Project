import React, {Component} from 'react'

export default class Login extends Component {
  render(){
    return (
      <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
 
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
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
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
    </div>
  </div>
</div>
);
    }
  }