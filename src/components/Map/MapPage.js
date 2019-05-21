import React, { Component, Fragment } from 'react';
import Sidebar from '../sidebar/sidebar';
import SidebarContent from '../sidebar/SidebarContent';
import MapContainer from '../Map/MapContainer';
import data from '../../restau1.json';
import Logo from '../shared/Logo/Logo'
import { COUNTY } from '../constants/Global';

class MapPage extends Component {
  state = {
    value: [],
    countyLngLat: [-74.007766, 40.714625],
    county: 'all',
  }

  async componentDidMount() {
    this.setState({ value: data });
  }

  handleFilters = (value, county) => {
    COUNTY.forEach(borough => {
      if (borough.label === county) {
        return this.setState({ countyLngLat: [borough.lng, borough.lat]})
      }
      if (county === "all") {
        this.setState({ countyLngLat: [-74.007766, 40.714625] })
      }
    });
    this.setState({ value, county });
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
          flyTo={this.state.countyLngLat}
        />
      <SidebarContent
        county={this.state.county}
      />
      </Fragment>
    );
  }
};


export default MapPage;
