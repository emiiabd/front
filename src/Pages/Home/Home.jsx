import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContacForm, Footer, Maps, NavBar, PresentationBanner, CardsHome, WhyUsHome, ValuesHome, OurClients } from "../../Components";
import "./home.css";
import { ParallaxBanner } from 'react-scroll-parallax';

const Home = () => {
  const navigate = useNavigate();

  const handlePlaceSelected = (place) => {
    if (place.geometry) {
      console.log("Dirección seleccionada:", place.formatted_address);
    } else {
      console.log("No se encontraron detalles para:", place.name);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <ParallaxBanner layers={[{ image: "./intro_slide_2-30.jpg", speed: 30 }]} className="presentationBanner">
        <NavBar from={"home"} />
        <PresentationBanner />
      </ParallaxBanner>

      {/* CARDS */}
      <CardsHome />

      {/* WHY US? */}
      <WhyUsHome />

      {/* VALUES */}
      <ValuesHome />

      {/* OUR CLIENTS */}
      <OurClients />

      {/* MAPS - CONTACT */}
      <div className="container-fluid section section-five m-0 py-5" id="contact">
        <div className="container text-center py-5 h-100 w-100">
          <h2 className="pb-5">📍 Encuéntranos Fácilmente</h2>
          <p className="mb-4">Nos encontramos disponibles para asesorarte y brindarte soluciones de seguridad a medida. Visítanos o contáctanos hoy mismo.</p>
          <div className="content d-flex gap-4 align-items-top flex-column flex-lg-row">
            <div className="col-12 col-lg-6">
              <ContacForm handlerPlaceSelected={handlePlaceSelected} title={"Contáctanos"} spanTitle={"Solicita tu cotización gratuita en segundos"} />
            </div>
            <div className="col-12 col-lg-6 maps d-flex flex-column justify-content-between">
              <Maps />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;

