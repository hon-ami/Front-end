import React from 'react';
import './Header.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {NavLink, Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import locked from '../../../assets/locked.png';
import checked from '../../../assets/checked.png';


const Header = ({isHidden, isLocked, endProduction, endDistribution, endDiffusion}) => {

    return (
        <Grid fluid className="header--fixed">
            <Row>
                <Col xs={12} md={10} mdOffset={1} className="header-container">
                    <div>
                        <Link to="/menu" className="header-container__title">CINEMA<br/>DISRUPTION</Link>
                    </div>
                    <div className={`header-container-nav ${isHidden ? 'isHidden' : ''}`}>
                        <span className="header-container-nav__text">CHAPITRE</span>
                        <div className="header-container-nav-item">
                            <NavLink to='/production'
                                     className="header-container-nav__number"
                                     activeClassName="activeRoute">01</NavLink>
                            {endProduction === 1 && (
                                <img src={checked} alt="checked icon" className="header-container__checked"/>
                            )}
                        </div>
                        <div className="header-container-nav-item">
                            <NavLink to='/distribution'
                                     className="header-container-nav__number"
                                     activeClassName="activeRoute">02</NavLink>
                            {endDistribution === 1 && (
                                <img src={checked} alt="checked icon" className="header-container__checked"/>
                            )}
                        </div>
                        <div className="header-container-nav-item">
                            <NavLink to='/diffusion'
                                     className="header-container-nav__number"
                                     activeClassName="activeRoute">03</NavLink>
                            {endDiffusion === 1 && (
                                <img src={checked} alt="checked icon" className="header-container__checked"/>
                            )}
                        </div>
                        {(endProduction === 1 && endDistribution === 1 && endDiffusion === 1) ?
                            <NavLink to='/conclusion'
                                     className="header-container-nav__number"
                                     activeClassName="activeRoute">{ isLocked ? null : <span className="header-container-nav__number--conclusion">04</span> }</NavLink> :
                            <React.Fragment>
                                <div
                                    data-tip='Lire en intégralité les 3 chapitres vous permettra de débloquer la conclusion'
                                    className="header-container-nav__number">
                                    <img className="header-container-nav__icon" src={locked} alt="locked icon"/>
                                </div>
                                <ReactTooltip place="bottom" type="light" effect="float"/>
                            </React.Fragment>
                        }
                    </div>
                </Col>
            </Row>
        </Grid>
    );
};

Header.defaultProps = {
    isHidden: false,
};

export default Header;
