import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Sidebar from '../sidebar/sidebar';
import SidebarContent from '../sidebar/SidebarContent';
import MapContainer from '../Map/MapContainer';
import Logo from '../shared/Logo/Logo'
import { COUNTY } from '../constants/Global';
import { getRestaurants } from '../../redux/actions/api';
import { isMapLoading } from '../../redux/actions/map';
import Loader from '../shared/Loader/Loader';

class MapPage extends Component {
  componentWillMount() {
    this.props.getRestaurants();
    this.props.isMapLoading(true);
  }

  handleFilters = (county) => {
    COUNTY.forEach(borough => {
      if (borough.label === county) {
        return this.setState({ countyLngLat: [borough.lng, borough.lat]})
      }
      if (county === "all") {
        this.setState({ countyLngLat: [-74.007766, 40.714625] })
      }
    });
    this.setState({ county });
  }

  render() {
    const { countyLngLat, isLoading } = this.props;
    return (
      <Fragment>
        <Logo />
        {!isLoading && (
        <Sidebar
          handleFilters={this.handleFilters}
        />
        )}
        {isLoading && (
          <Loader />
        )}
        <MapContainer
          restaurants={this.props.restaurants}
          flyTo={countyLngLat}
          loaded={bool => this.props.isMapLoading(bool)}
        />
        <SidebarContent />
      </Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    county: state.map.county,
    restaurants: state.api.restaurants,
    isLoading: state.map.isMapLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
    isMapLoading: bool => dispatch(isMapLoading(bool)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
