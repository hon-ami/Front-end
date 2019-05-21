import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './SidebarContent.scss'

class SidebarContent extends Component {
  state = {
    open: true,
  }

  handleModal = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    // const { county } = this.props;
    const { open } = this.state;
    return (
      <div className={`SidebarContent ${open && ('SidebarContent-open')}`}>
        <div className="SidebarContent-toggle" onClick={this.handleModal} />
        <Grid className="SidebarContent-container">
          <Row>
            looool
          </Row>
        </Grid>
      </div>
    )
  }
}

export default SidebarContent;
