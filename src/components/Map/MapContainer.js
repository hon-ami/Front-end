import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Source, GeoJSONLayer, Marker } from "react-mapbox-gl";
import EatStreet from 'eatstreet';

import pin from '../../assets/map-marker-alt-solid.svg';

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWV0YWxtYW5pbmZyIiwiYSI6ImNqdjI5bzRsYjBxOXQ0ZXA5dmpsNDNkeGcifQ.luP93CEITntYfy6fZmCLOw"
});

const ES = new EatStreet("bcaacb4012b3e000");

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
      {this.state.restaurants.map((restaurant) => {
        return(
        <Marker key={restaurant.longitude} coordinates={[ restaurant.longitude, restaurant.latitude ]}>
          <img src={pin} alt="map pin" style={{ height: '5rem', width: '5rem' }} />
        </Marker>
      )})}
      <GeoJSONLayer
        data={this.state.restaurants}
      />
      </Map>
    )
  }
}

export default MapContainter;
