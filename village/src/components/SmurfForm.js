import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  componentDidMount = () => {
    const {id, name} = this.state;
    console.log(id);
    console.log(name);
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    this.props.addSmurf({ name: name, age: age, height: height });

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  updateSmurf = event => {
    event.preventDefault();
    const { id, name, age, height } = this.state;
    this.props.updateSmurf( id, { name: name, age: age, height: height });

    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  handleInputChange = e => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="SmurfForms">
        <form className='smurf-form' onSubmit={this.addSmurf}>
        <h2>Add A Smurf</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>

        <form className='smurf-form' onSubmit={this.updateSmurf}>
        <h2>Update Smurf</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="id"
            value={this.state.id}
            name="id"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
