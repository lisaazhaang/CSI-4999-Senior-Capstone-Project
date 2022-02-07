import React, {Component} from 'react'

export default class Header extends Component {
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
</div>

  );
    }
  }