import React from 'react';
import '../Content-carouselRight/Content-carouselRight.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import Whirligig from 'react-whirligig';
import arrow from '../../../../assets/arrow.png';


const ContentCarouselLeft = ({textOne, textTwo, imgOne, imgTwo, imgThree, imgFour, imgFive, Two, Three, Four, Five}) => {

    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    return (
        <Row className="content-container" middle="md" center="md">
            <Col md={4}>
                <ScrollAnimation animateIn="fadeInUp" offset={100} duration={2} animateOnce={true}>
                    <div className="content-carousel">
                        <button className="content-carousel__prev" onClick={prev}><img
                            className="content-carousel__leftArrow" src={arrow}/></button>
                        {Two === 1 &&
                        <Whirligig
                            className="content-carousel-slider"
                            preventScroll={false}
                            preventSwipe={false}
                            snapToSlide={false}
                            visibleSlides={1}
                            ref={(_whirligigInstance) => {
                                whirligig = _whirligigInstance;
                            }}
                        >
                            <img className="content-carousel__img" src={imgOne}/>
                            <img className="content-carousel__img" src={imgTwo}/>
                        </Whirligig>
                        }
                        {Three === 1 &&
                        <Whirligig
                            className="content-carousel-slider"
                            preventScroll={false}
                            preventSwipe={false}
                            snapToSlide={false}
                            visibleSlides={1}
                            ref={(_whirligigInstance) => {
                                whirligig = _whirligigInstance;
                            }}
                        >
                            <img className="content-carousel__img" src={imgOne}/>
                            <img className="content-carousel__img" src={imgTwo}/>
                            <img className="content-carousel__img" src={imgThree}/>
                        </Whirligig>
                        }
                        {Four === 1 &&
                        <Whirligig
                            className="content-carousel-slider"
                            visibleSlides={1}
                            preventScroll={false}
                            preventSwipe={false}
                            snapToSlide={false}
                            ref={(_whirligigInstance) => {
                                whirligig = _whirligigInstance;
                            }}
                        >
                            <img className="content-carousel__img" src={imgOne}/>
                            <img className="content-carousel__img" src={imgTwo}/>
                            <img className="content-carousel__img" src={imgThree}/>
                            <img className="content-carousel__img" src={imgFour}/>
                        </Whirligig>
                        }
                        {Five === 1 &&
                        <Whirligig
                            className="content-carousel-slider"
                            visibleSlides={1}
                            preventScroll={false}
                            preventSwipe={false}
                            snapToSlide={false}
                            ref={(_whirligigInstance) => {
                                whirligig = _whirligigInstance;
                            }}
                        >
                            <img className="content-carousel__img" src={imgOne}/>
                            <img className="content-carousel__img" src={imgTwo}/>
                            <img className="content-carousel__img" src={imgThree}/>
                            <img className="content-carousel__img" src={imgFour}/>
                            <img className="content-carousel__img" src={imgFive}/>
                        </Whirligig>
                        }
                        <button className="content-carousel__next" onClick={next}><img
                            className="content-carousel__rightArrow" src={arrow}/></button>
                    </div>
                </ScrollAnimation>
            </Col>
            <Col className="content-container__textRight" mdOffset={1} md={4}>
                <ScrollAnimation animateIn="fadeInUp" offset={100} duration={2} animateOnce={true}>
                    <p className="content__text">{textOne}</p>
                    <p className="content__text">{textTwo}</p>
                </ScrollAnimation>
            </Col>
        </Row>
    );
};

export default ContentCarouselLeft;