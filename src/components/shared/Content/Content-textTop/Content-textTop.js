import React from 'react';
import './Content-textTop.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';


const ContentTextTop = ({textOne, textTwo, textThree, imgOne, imgTwo, imgThree}) => {

    return (
        <Row className="content-top-container" middle="xs" center="xs">
            <Col xs={10} md={10}>
                <ScrollAnimation animateIn="fadeInUp" offset={50} duration={1} animateOnce={true}>
                    <Row middle="md" center="md">
                        <Col md={9}>
                            <p className="content-top__text">{textOne}</p>
                            <p className="content-top__text">{textTwo}</p>
                            <p className="content-top__text">{textThree}</p>
                        </Col>
                    </Row>
                    <div className="content-top-container__imgBottom">
                        <Row middle="xs" center="xs">
                            <Col xs={10} md={3}>
                                <img className="content-top-container__imgBottom-img" src={imgOne} alt="Image"/>
                            </Col>
                            <Col xs={10} md={3} mdOffset={1}>
                                <img className="content-top-container__imgBottom-img" src={imgTwo} alt="Image"/>
                            </Col>
                            <Col xs={10} md={3} mdOffset={1}>
                                <img className="content-top-container__imgBottom-img" src={imgThree} alt="Image"/>
                            </Col>
                        </Row>
                    </div>
                </ScrollAnimation>
            </Col>
        </Row>
    );
};

export default ContentTextTop;
