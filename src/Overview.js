import React from 'react';
import './Overview.css';
import Carousel from 'react-bootstrap/Carousel';


const Overview = () => {
  return (
    <>
     <div className='overview'> 
            
              <Carousel>
                  <Carousel.Item className='caroitem'>
                      <img
                          className="d-block"
                          src="./Image/rev1.webp"
                          alt="First slide"
                      />
                      <Carousel.Caption className='sale'>
                          <h3>Michel John </h3>
                          <p><span>"</span>Nulla vitae elit libero,Lorem ipsum dolor sit amet a pharetra augue mollis interdum.<span>"</span></p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='caroitem'>
                      <img
                          className="d-block"
                          src="./Image/rev2.jpeg"
                          alt="Second slide"
                      />

                      <Carousel.Caption className='sale'>
                          <h3>Ronnie Alice</h3>
                          <p><span>"</span>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet adipiscing elit.<span>"</span></p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='caroitem'>
                      <img
                          className="d-block"
                          src="./Image/rev3.jpeg"
                          alt="Third slide"
                      />

                      <Carousel.Caption className='sale'>
                          <h3>Thata Agis</h3>
                          <p>
                              <span>"</span>Praesent commodo cursus magna,Lorem ipsum dolor sit amet vel scelerisque nisl consectetur.<span>"</span>
                          </p>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
        </div>
      
    </>
  )
}

export default Overview;