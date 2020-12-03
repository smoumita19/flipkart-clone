import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';   

function Banner() {
    return (

        <Carousel style={{ width: '99%', margin: '6px auto' }}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../../assets/images/bg__img__1.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../../assets/images/bg__img__2.png"
                alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../../assets/images/bg__img__3.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner
