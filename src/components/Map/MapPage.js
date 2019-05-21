import React, { Component, Fragment } from 'react';
import Sidebar from '../sidebar/sidebar';
import MapContainer from '../Map/MapContainer';
import data from '../../restau1.json';
import Logo from '../shared/Logo/Logo'
import { COUNTY } from '../constants/Global';

class MapPage extends Component {
  state = {
    value: [],
    county: [-74.007766, 40.714625],
  }

  async componentDidMount() {
    this.setState({ value: data });
  }

  handleFilters = (value, county) => {
    COUNTY.forEach(borough => {
      if (borough.label === county) {
        return this.setState({ county: [borough.lng, borough.lat]})
      }
      if (county === "all") {
        this.setState({ county: [-74.007766, 40.714625] })
      }
    });
    this.setState({ value });
  }

  render() {
    return (
      <Fragment>
        <Logo />
        <Sidebar
          handleFilters={this.handleFilters}
        />
        <MapContainer
          restaurants={this.state.value}
          flyTo={this.state.county}
        />
      </Fragment>
    );
  }
};


export default MapPage;
