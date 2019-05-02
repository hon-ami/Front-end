import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Source, GeoJSONLayer, Marker } from "react-mapbox-gl";
import EatStreet from 'eatstreet';

import pin from '../../assets/map-marker-alt-solid.svg';

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWV0YWxtYW5pbmZyIiwiYSI6ImNqdjI5bzRsYjBxOXQ0ZXA5dmpsNDNkeGcifQ.luP93CEITntYfy6fZmCLOw"
});

const ES = new EatStreet("bcaacb4012b3e000");


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
    restaurants: [],
  }

  async componentDidMount() {
    var params = {
      address: "NY", // Street Address to Search
    }


    ES.SearchRestaurants(params, (err, res) => {
      if(err){
        return err;
      }
      console.log(res);
      const restaurants = res['restaurants'];
      console.log(restaurants);
      this.setState({
        restaurants,
      });
    });
  }
  render () {
    console.log(this.state.restaurants);
    return (
      <Map
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
      >
      <Layer type='heatmap' paint={layerPaint}>
        {this.state.restaurants.map((restaurant) => {
          return(
          <Feature key={restaurant.longitude} coordinates={[ restaurant.longitude, restaurant.latitude ]} />
        )})}
      </Layer>
      </Map>
    )
  }
}

export default MapContainter;
