import React, {Component} from 'react'

export default class Create_Donor_Acc extends Component {
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
        <h2 className="title is-2">Tell Us About Yourself!</h2></div>
    </div>
  </div>
  <div className="columns">
    <div className="column is-half is-offset-one-quarter">
      <div className="field is-horizontal">
      </div>
      <div className="field is-horizontal">
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label">
          <label className="label">Donor Name:</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Name" />
            </p>  
          </div>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label">
          <label className="label">Address:</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Address Number + Street Name" />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label" />
        <div className="field-body">
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="City" />
            </p>  
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="State" />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label" />
        <div className="field-body">
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="Zip Code" />
            </p>  
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Country" />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label">
          <label className="label">Link to Site:</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="URL" />
            </p>  
          </div>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label">
          <label className="label">Public Phone #:</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Phone #" />
            </p>  
          </div>
          <p className="help">Do not include spaces or hyphens</p>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal is-grouped">
        <div className="field-label">
          <label className="label">Email:</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Email" />
            </p>  
          </div>
        </div>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Create account password:</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" type="text" placeholder="Password" />
            </p>  
          </div>
        </div>
      </div>  
      <div className="field is-horizontal">
      </div>
      <div className="column is-half is-offset-one-quarter">
      <div className="field is-horizontal">
      <div className="field is-grouped">
        <p className="control">
          <a className="button">
            Create Account
          </a>
        </p>
        <p className="control">
          <a className="button">
            Reset
          </a>
        </p>
      </div>
      <div className="field is-horizontal"> {/* for spacing */}
      </div>
    </div> 
    </div>
    </div>
  </div>
</div>
);
}
}