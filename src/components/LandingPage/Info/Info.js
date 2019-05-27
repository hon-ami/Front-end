import React, { Component, Fragment } from 'react';
import Overlay from '../../shared/Overlay/Overlay';
import './Info.scss';

class Info extends Component {
  state = {
    open: false,
  }

  handleModal = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Fragment>
        <div onClick={this.handleModal} className="Info-container">
          <div className="Info-marker">
            <p className="Info-text">i</p>
          </div>
        </div>
        {this.state.open && (
          <Overlay handleModal={this.handleModal}>
            <h2>Student Projet at <a href="www.hetic.net">Hetic</a></h2>
            <h3>We have used the data from : <a href="https://github.com/agabardo/nyc_restaurants">Agabardo New York City restaurants</a></h3>
            <p>To see how we made this website go to : <a href="https://github.com/hon-ami">github.com/hon-ami</a></p>
            <p>The map is created with <a href="https://www.mapbox.com">Mapbox</a></p>
          </Overlay>
        )}
      </Fragment>
    )
  }
}

export default Info;
