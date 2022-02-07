import React, {Component} from 'react'

export default class Footer extends Component {
  render(){
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
        <footer className="footer">
          <nav className="breadcrumb is-centered has-bullet-separator">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Add Charity</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Donate</a></li>
            </ul>
          </nav>
          <div className="content has-text-centered">
            <p>
              <strong>Project Name</strong> 
              <br />by Meredith Benson, Marcus Dyson, Talha Memon, Stevie Warren, and Lisa Zhang
              <br />
              Copyright 2022 by Project. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
