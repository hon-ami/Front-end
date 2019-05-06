import React, { Component } from 'react';
import { STYLES } from '../../constants/Global';
import './LayerStyle.scss'

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
        <div className="LayerStyle-icon" onClick={this.handleModal} />
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
