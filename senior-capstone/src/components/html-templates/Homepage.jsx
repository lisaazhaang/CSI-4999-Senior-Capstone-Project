import React, {Component} from 'react'

export default class Homepage extends Component {
  render(){
    return (
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
  <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Request Resources</a>
        <a className="navbar-item">Suggested Donors</a>
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
  <section className="hero is-medium is-link">
    <div className="hero-body">
      <div className="columns">
        <div className="column is-half">
          <p className="title">
            *Project Title*
          </p>
          <p className="subtitle">
            Blurb about our project
          </p>
        </div>
        <div className="column is-half">
          <figure className="image is-128x128">
            <img src="/Users/apollosno/CSI-4999-Senior-Capstone-Project/pictures/pngfind.com-brown-paper-bag-png-5539350.png" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  <div className="columns">
    <div className="column is-half">
      <section className="section is-medium">
        <h1 className="title">About Us:</h1>
        <h2 className="subtitle">
          Blah
        </h2>
      </section>
    </div>
    <div className="column is-two-fifths">
      <p className="m-1">
      </p><div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal">
      </div>
      <div className="box">
        <div className="columns">
          <div className="column">
            <h1 className="title is-4">Add Your Charity</h1>
            <h2 className="subtitle is-5">Blurb about charities</h2>
            <button className="button is-link is-outlined">Add your charity here</button>
          </div>
          <div className="column">
            <figure className="image is-96x96">
              <img src="/Users/apollosno/CSI-4999-Senior-Capstone-Project/pictures/pngwing.com.png" />
            </figure>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="columns">
          <div className="column">
            <h1 className="title is-4">Volunteer</h1>
            <h2 className="subtitle is-5">Blurb about volunteering</h2>
            <button className="button is-link is-outlined">Volunteer here</button>
          </div>
          <div className="column">
            <figure className="image is-96x96">
              <img src="/Users/apollosno/CSI-4999-Senior-Capstone-Project/pictures/Asset 1@2x-50.jpeg" />
            </figure>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="columns">
          <div className="column">
            <h1 className="title is-4">Donate</h1>
            <h2 className="subtitle is-5">Blurb about donating</h2>
            <button className="button is-link is-outlined">Donate here</button>
          </div>
          <div className="column">
            <figure className="image is-96x96">
              <img src="/Users/apollosno/CSI-4999-Senior-Capstone-Project/pictures/Daco_4382154.png" />
            </figure>
          </div>
        </div>
      </div>
      <p />
    </div>
  </div>
</div>
);
    }
  }



