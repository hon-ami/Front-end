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
    const { borough } = this.props;
    const { open } = this.state;
    if (!borough) {return null}
    return (
      <div className={`SidebarContent ${open && ('SidebarContent-open')}`}>
        <div className="SidebarContent-toggle" onClick={this.handleModal} />
        <Grid className="SidebarContent-container">
          <Row center='xs'>
            <Col>
              <h2 style={{ marginBottom: '2rem'}}>
                {borough.borough_title}
              </h2>
            </Col>
            <Col>
              <p>
                {borough.borough_content}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    borough: state.api.filteredBorough,
  }
};

export default connect(mapStateToProps, null)(SidebarContent);
