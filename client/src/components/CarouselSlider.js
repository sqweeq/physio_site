import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default function CarouselSider() {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/proxy/a3IobOZiVOscbqWicsdjAioQaYZiglkmlZ45mlQHxP-hkco-jmsqgP67jQBQydOlsikTPgRhGn4gSwFjnspV28HVwSWln9hNOF4xQj83387CgAjFL9P6Vne0JleX-t-4oLdpn0LWUtI"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/proxy/a3IobOZiVOscbqWicsdjAioQaYZiglkmlZ45mlQHxP-hkco-jmsqgP67jQBQydOlsikTPgRhGn4gSwFjnspV28HVwSWln9hNOF4xQj83387CgAjFL9P6Vne0JleX-t-4oLdpn0LWUtI"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/proxy/a3IobOZiVOscbqWicsdjAioQaYZiglkmlZ45mlQHxP-hkco-jmsqgP67jQBQydOlsikTPgRhGn4gSwFjnspV28HVwSWln9hNOF4xQj83387CgAjFL9P6Vne0JleX-t-4oLdpn0LWUtI"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
