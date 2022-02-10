import React, {Component} from 'react'


export default class Navbar extends Component {
  render(){
    return (
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
          <style dangerouslySetInnerHTML={{__html: "\n  .homepage {\n    margin: 10px;\n    padding: 20px;\n  }\n\n  .center {\n    text-align: center;\n  }\n" }} />
          <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a href="/" className="navbar-item">Home</a>
                <a href="/charity_request" className="navbar-item">Request Resources</a>
                <a href="/view_donors" className="navbar-item">Suggested Donors</a>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="button">
                    <strong>Profile</strong>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }