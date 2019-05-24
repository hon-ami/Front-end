import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMapCounty } from '../../redux/actions/map';
import FormSelect from '../shared/inputs/Inputs';
import { COUNTY, FOODTYPE, GRADE } from '../constants/Global';
import data from '../../restau1.json';
import './sidebar.scss';

class Sidebar extends Component {
  state = {
    restaurants: [],
    county: COUNTY[0].name,
    foodType: FOODTYPE[0].name,
    grade: GRADE[0].name,
  }

  async componentDidMount() {
    this.setState({ restaurants: data });
  }

  filterRestaurantsBySelect = () => {
    const { restaurants, county, foodType, grade } = this.state;
    const filteredCounty = restaurants.filter((restaurant) => {
      return county !== 'all' ? restaurant.borough === county : true;
    }).filter((restaurant) => {
      return foodType !== 'any' ? restaurant.cuisine === foodType : true;
    }).filter((restaurant) => {
      return grade !== 'any' ? restaurant.grades === grade: true
    })
    this.props.handleFilters(filteredCounty, county);
    this.props.getMapCounty(county);
    return filteredCounty
  }

  getValue = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    }, () => this.filterRestaurantsBySelect());
  }

  render() {
    return (
      <div className="Select-container">
        <FormSelect
          name={'county'}
          label={'City / County'}
          options={COUNTY}
          getValue={this.getValue}
        />
        <FormSelect
          name={'foodType'}
          label={'Type of food:'}
          options={FOODTYPE}
          getValue={(e) => this.getValue(e)}
        />
        <FormSelect
          name={'grade'}
          label={'Grade:'}
          options={GRADE}
          getValue={(e) => this.getValue(e)}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMapCounty: county => dispatch(getMapCounty(county))
  }
};

export default connect(null, mapDispatchToProps)(Sidebar);
// mapStateToProps
