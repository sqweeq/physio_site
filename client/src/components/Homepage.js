import React from "react";
import BookingForm from "./BookingForm";
import Navigation from "./Navigation";
import Fade from "react-reveal/Fade";
import ScrollToTop from "react-scroll-up";
import "../App.css";

export default function Homepage() {
  return (
    <div>
      <div className="container">
        <div className="Navigation-container">
          <Navigation />
        </div>
        <div className="content clinic">
          <div className="content-words">
            <h1 style={{ overflowX: "hidden", overflowY: "auto" }}>
              Our Dedication
            </h1>
            <p>Aid recovery, boost performance, maximize confidence</p>
          </div>
        </div>
        {/* <Fade>
            <div className="opening-page">hello</div>
          </Fade> */}
        <Fade>
          <div className="content physio">
            <div className="content-words">
              <h1>Physio</h1>
              <p>Aid recovery, boost performance</p>
            </div>
          </div>
        </Fade>
        {/* <div className="content">hello</div> */}
        <Fade>
          <div className="content services">
            <div className="content-words">
              <h1>Services</h1>
              <p>Hands-on, manipulative, correcting biomechanics</p>
            </div>
          </div>
        </Fade>
        {/* <div className="content">hello</div> */}
        <Fade>
          <div className="content team">
            <div className="content-words">
              <h1>Who we are</h1>
              <p>Professional, honest, driven</p>
            </div>
          </div>
        </Fade>
        {/* <div className="content">hello</div> */}

        <footer>
          <Fade>
            <BookingForm />
          </Fade>
          <hr className="mt-4" />
          <Fade>
            <h3 className="text-center w-50 float-left font-weight-light py-5">
              Get in touch today
            </h3>
            <div className="m-5 ml-5 pl-5 w-75 location-container col">
              <div className="d-flex row w-100">
                <i className="fa fa-location-arrow fa-2x col-2" />

                <p className="col-6">
                  2/319 Morrison Street, Mt Wannabe, New Zealand
                </p>
              </div>
              <div className="d-flex row">
                <i className="fa fa-mobile-phone fa-3x col-2 py-4 my-auto"></i>
                <p className="col-6 my-auto">Phone: +649 439 1239</p>
              </div>
              <div className="d-flex row pb-4 mt-3">
                <i className="fa fa-inbox fa-2x col-2"></i>
                <p className="col-6">Email: Physiorevolution@hotmail.com</p>
              </div>
            </div>
          </Fade>
        </footer>
        <ScrollToTop
          showUnder={160}
          duration={1000}
          style={{ bottom: "70px", right: "40px" }}
        >
          <i className="fa fa-arrow-up d-flex flex-column pl-4"></i>
          <h4>GO UP</h4>
        </ScrollToTop>
        <div className="m-5 copyright">&copy; Physio Revolution, 2020</div>
      </div>
    </div>
  );
}
