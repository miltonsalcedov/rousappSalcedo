import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./Carrusel.css"
import imagen1 from '../../assets/sombras.jpg'
import imagen2 from '../../assets/miselaneo.jpg'
import imagen3 from '../../assets/bases.png'

const Carrusel = () => {
    return (
      <div class="row justify-content-center">
      <div class="col-sm-8">
        <Carousel className='campo' >
        <Carousel.Item>
          <img className="carrusel"
            
            src={imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carrusel"
            
            src={imagen2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carrusel"
            
            src={imagen3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
  </div>
    )
}

export default Carrusel
