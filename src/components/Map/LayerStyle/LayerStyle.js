import React, { Component } from 'react';
import { STYLES } from '../../constants/Global';
import './LayerStyle.scss'

import layerSvg from '../../../assets/layer-group-solid.svg'

class LayerStyle extends Component {
  state={
    open: false,
  }

  handleModal = () => {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { handleMapStyle } = this.props;
    return (
      <div className="LayerStyle-container">
        <div className="LayerStyle-icon" onClick={this.handleModal}>
          <img src={layerSvg} alt="layers" />
        </div>
        {this.state.open && (
          <div className="LayerStyle-styles-container">
            {STYLES.map((option) => (
              <p
                onClick={() => {
                  handleMapStyle(option.value);
                  this.handleModal();
                }}
                className="LayerStyle-styles-option"
              >
                  {option.label}
                </p>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default LayerStyle;
