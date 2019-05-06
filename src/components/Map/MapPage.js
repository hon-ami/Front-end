import React, { Component, Fragment } from 'react';
import Sidebar from '../sidebar/sidebar';
import MapContainer from '../Map/MapContainer';
import data from '../../restau1.json';

class MapPage extends Component {
  state = {
    value: [],
  }

  async componentDidMount() {
    this.setState({ value: data });
  }

  handleFilters = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <Fragment>
        <Sidebar
          handleFilters={this.handleFilters}
        />
      {/*<MapContainer
          restaurants={this.state.value}
        />*/}
      </Fragment>
    );
  }
};


export default MapPage;
