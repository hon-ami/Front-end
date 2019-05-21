import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Logo from '../shared/Logo/Logo';
import Info from './Info/Info';
import './LandingPage.scss'
import SidebarContent from '../sidebar/SidebarContent';

const LandingPage = () => (
  <Grid className="LandingPage">
    <Logo />
    <Row center="xs">
      <Col xs={8} >
        <h1 className="LandingPage-title">Title</h1>
      </Col>
      <Col xs={8}>
        <p className="LandingPage-subtitle">
          This website shows you all the different restaurants in the state of &nbsp;
          <span className="LandingPage-higlighted">New York.</span>
          &nbsp; Lorem ipsum lorem ipsum lorem ipsum.
        </p>
      </Col>
    </Row>
    <div className="LandingPage-start">
      <Link className="LandingPage-start-link" to='/map'>Start the Experience</Link>
      <div className="LandingPage-start-mouse-container">
        <div className="LandingPage-start-mouse"></div>
      </div>
    </div>
    <Info />
    <SidebarContent />
  </Grid>
)


export default LandingPage
