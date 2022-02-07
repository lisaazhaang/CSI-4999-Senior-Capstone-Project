import React, {Component} from 'react'

export default class Charity_Search extends Component {
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
        <h2 className="title is-3">Search for Charities by Location</h2></div>
      <div className="field is-horizontal" />
      <div className="field is-horizontal" />
      <div className="field is-horizontal" />
      <form className="box">
        <div className="field">
          <label className="label">Search by Zipcode</label>
          <div className="control">
            <input className="input" type="email" placeholder="5 digit number" />
          </div>
          <div className="field is-horizontal" />
          <button className="button is-link is-outlined">Search</button>
        </div>
      </form>
      <div className="columns">
        <div className="column is-half is-offset-1">
        </div>
      </div>
      <div className="field is-horizontal" />
      <div className="field is-horizontal" />
      <div className="field is-horizontal" />
      {/* for loop */}
      <form className="box">
        <div className="field">
          <label className="label">... Miles Away</label>
          <div className="field is-horizontal" />
          <p>Charity Name:</p>
          <div className="field is-horizontal" />
          <p>Address:</p>
          <div className="field is-horizontal" />
          <p># of Volunteers needed:</p>
          <div className="field is-horizontal" />
          <button onclick="location.href = '" id>Link to site</button>
        </div>
      </form>
    </div></div></div>
    );
}
}