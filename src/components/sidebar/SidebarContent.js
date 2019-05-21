import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Row, Col } from 'react-flexbox-grid';
import './SidebarContent.scss'

class SidebarContent extends Component {
  state = {
    open: false,
  }

  handleModal = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { county } = this.props;
    const { open } = this.state;
    return (
      <div className={`SidebarContent ${open && ('SidebarContent-open')}`}>
        <div className="SidebarContent-toggle" onClick={this.handleModal} />
        <Grid className="SidebarContent-container">
          <Row>
            {county}
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    county: state.map.county,
  }
};

export default connect(mapStateToProps, null)(SidebarContent);
