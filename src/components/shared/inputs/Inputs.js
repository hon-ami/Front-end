import React, { Component } from 'react';


class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.options[0].name };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.getValue(event);
  }

  render() {
    const {name, label, options } = this.props;
    return (
      <div className="Select">
        {label ?
          <label className="Select-label" htmlFor={name}>
            <p className="Select-label">{label}</p>
          </label>
          : null
        }
        <select
          id={name}
          value={this.state.value}
          onChange={(event) => {this.handleChange(event)}}
          className="Select-input"
        >
          {options.map((option) => {
            return (
              <option
                key={option.label}
                id={option.label}
                value={option.name}
              >
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
};


export default FormSelect;
