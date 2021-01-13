import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Date.now(),
      name: "",
      position: "",
      nickname: "",
      description: "",
      error: ''
      }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    event.persist();
    console.log("event: ", event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    const errors = this.state.errors;

    this.setState({...this.state, [name]: value})
  }

  handleClick(e) {
    e.preventDefault();

if (this.state.name === '') {
    this.setState({
        ...this.state,
        error: 
            `Name required.` 
        
    })
} else if (this.state.position === '') {
    this.setState({
        ...this.state,
        error: 
            `Position required.` 
        
    })
} else if (this.state.nickname === '') {
    this.setState({
        ...this.state,
        error: 
            `Nickname required.` 
        
    })
}
else {
    this.props.addSmurf(this.state);
}

    

    //         axios.post("http://localhost:3333/smurfs", this.state)
    //         .then(res => {
    // console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
  }

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.handleClick}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.name}
            />
            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="position"
              id="position"
              value={this.state.position}
            />
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
              value={this.state.nickname}
            />
            <label htmlFor="description">Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.description}
            />
          </div>
          {this.state.error ?

          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {this.state.error}
          </div>: ''}
          <button>Submit Smurf</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mstps state: ", state);
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { addSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
