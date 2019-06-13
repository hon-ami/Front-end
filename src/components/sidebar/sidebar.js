import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMapCounty } from '../../redux/actions/map';
import { filterRestaurants, getBorough, filterBorough } from '../../redux/actions/api';
import FormSelect from '../shared/inputs/Inputs';
import { COUNTY, FOODTYPE, GRADE } from '../constants/Global';
import './sidebar.scss';

class Sidebar extends Component {
  state = {
    county: COUNTY[0].name,
    foodType: FOODTYPE[0].name,
    grade: GRADE[0].name,
  }

  componentDidMount() {
    this.props.getBorough().then(() => {
      this.props.filterBorough(this.props.borough.filter(boroughs => boroughs.borough_title === 'New York')[0]);
    });
  }

  filterRestaurantsBySelect = () => {
    const { county, foodType, grade } = this.state;
    const { apiRestaurants } = this.props;
    const filteredCounty = apiRestaurants.filter((restaurant) => {
      return county !== 'all' ? restaurant.borough === county : true;
    }).filter((restaurant) => {
      return foodType !== 'any' ? restaurant.cuisine === foodType : true;
    }).filter((restaurant) => {
      return grade !== 'any' ? restaurant.grades === grade: true
    })
    this.props.handleFilters(county);
    this.props.filterRestaurants(filteredCounty)
    this.props.getMapCounty(county);
    const County = county === 'all' ? 'New York' : county;
    this.props.filterBorough(this.props.borough.filter(boroughs => boroughs.borough_title === County)[0]);
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
          label={'Sanitation grade:'}
          options={GRADE}
          getValue={(e) => this.getValue(e)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiRestaurants: state.api.apiRestaurants,
    borough: state.api.borough,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMapCounty: county => dispatch(getMapCounty(county)),
    filterRestaurants: data => dispatch(filterRestaurants(data)),
    getBorough: () => dispatch(getBorough()),
    filterBorough: data => dispatch(filterBorough(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
// mapStateToProps
