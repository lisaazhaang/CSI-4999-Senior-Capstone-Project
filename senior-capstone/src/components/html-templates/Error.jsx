import React, {Component} from 'react'

export default class Error extends Component {
  render(){
    return (
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
      <section className="section is-small">
  <h2 class=" subtitle">
        There has been an error. Please go back to the previous page.</h2>
        <div className="field is-horizontal" />
        <button className="button is-link is-outlined">Back</button>
      </section></div>
  </div>
</div>
);
    }
  }
