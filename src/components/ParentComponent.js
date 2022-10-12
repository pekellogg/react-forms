import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

export default class ParentComponent extends React.Component {

  state = {
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    this.setState({
      /* make Form's name attribute the key pointing value from user */
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form formData={this.state} handleChange={this.handleChange} />
        <DisplayData formData={this.state} />
      </div>
    );
  };

};