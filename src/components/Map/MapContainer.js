import React, { Component } from 'react'
import { connect } from "react-redux";
import ReactMapboxGl, { Layer, Feature, } from "react-mapbox-gl";
import LayerStyle from "./LayerStyle/LayerStyle";
import './Map.scss'

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWV0YWxtYW5pbmZyIiwiYSI6ImNqdjI5bzRsYjBxOXQ0ZXA5dmpsNDNkeGcifQ.luP93CEITntYfy6fZmCLOw"
});

const layerPaint = {
  'heatmap-weight': {
    property: 'priceIndicator',
    type: 'exponential',
    stops: [[0, 0], [5, 2]]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  'heatmap-intensity': {
    stops: [[0, 0], [5, 1.2]]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    'rgba(33,102,172,0)',
    0.25,
    'rgba(103,169,207, .5)',
    0.5,
    'rgba(209,229,240, .5)',
    0.8,
    'rgba(253,219,199, .5)',
    1,
    'rgba(239,138,98, .5)',
    2,
    'rgba(150,60,23, .5)'
  ],
  // Adjust the heatmap radius by zoom level
  'heatmap-radius': {
    stops: [[0, 1], [5, 50]]
  }
};

class MapContainter extends Component {
  state = {
    mapStyle: 'streets-v9',
  }

  handleMapStyle = (mapStyle) => {
    this.setState({ mapStyle });
  }

  render () {
    const { restaurants, countyLngLat, loaded } = this.props;
    console.log(restaurants);
    return (
      <div style={{ position: 'absolute', height: '100vh', width: '100vw' }}>
        <Map
          style={`mapbox://styles/mapbox/${this.state.mapStyle}`}
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          center={countyLngLat}
          onClick={(map, e) => console.log(e.lngLat)}
          onStyleLoad={(map, loadEvent) => loadEvent ? loaded(false) : null}
        >
        <Layer type='heatmap' paint={layerPaint}>
          {restaurants.map((restaurant) => (
            <Feature key={restaurant.longi} coordinates={[ restaurant.longi, restaurant.lat ]} />
          ))}
        </Layer>
        </Map>
        <LayerStyle
          handleMapStyle={this.handleMapStyle}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    county: state.map.county,
    countyLngLat: state.map.countyLngLat,
    isLoading: state.map.isLoading,
  }
};

export default connect(mapStateToProps, null)(MapContainter);
// mapStateToProps // mapDispatchToProps
