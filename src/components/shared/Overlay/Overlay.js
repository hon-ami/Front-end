import React, { Fragment} from 'react';
import './Overlay.scss'

const Overlay = ({ children, handleModal }) => (
  <Fragment>
    <div  onClick={handleModal} className="Overlay" />
    <div className="Overlay-content-container">
      <div className="Overlay-content">
        {children}
      </div>
    </div>
</Fragment>
)

export default Overlay
