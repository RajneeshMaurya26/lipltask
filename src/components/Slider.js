import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";
import s1 from './../img/s1.jpg';
import s2 from './../img/s2.jpg';
import s3 from './../img/s3.png';
import s4 from './../img/s4.png';


const Slider = () => {
    return (
        <>
            <section>
                <Carousel controls={false}>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 s1"
                            src={s3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 s2"
                            src={s4}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 s3"
                            src={s2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 s4"
                            src={s1}
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    )
}
export default Slider
