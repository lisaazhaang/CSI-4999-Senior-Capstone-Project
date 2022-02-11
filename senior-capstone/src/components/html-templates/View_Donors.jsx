import React, {Component} from 'react'

export default class View_Donors extends Component {
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
        <h2 className="title is-3">View Matched Donors</h2></div>
      <div className="field is-horizontal" />
      <div className="field is-horizontal" />
      <div className="field is-horizontal" />
      {/* for loop */}
      <form className="box">
        <div className="field">
          <div className="columns">
            <div className="column is-half">
              <div className="field is-horizontal" />
              {/* for loop */}
              <p>Types of Food:</p>
              <div className="field is-horizontal" />
              <p>Amount + Units:</p>
              <div className="field is-horizontal" />
              <button onclick="location.href = '" id>Contact this donor</button>
            </div>
            <div className="column is-half">
              <div className="field is-horizontal" />
              <p>Donor Name:</p>
              <div className="field is-horizontal" />
              <p>Address:</p>
            </div>
          </div> 
        </div>
      </form>
      <div className="field is-horizontal"> {/* for spacing */}</div>
    </div></div></div>
    );
  }
}