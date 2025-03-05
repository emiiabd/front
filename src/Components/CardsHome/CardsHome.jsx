import React, { useEffect, useRef, useState } from "react";
import "./CardsHome.css";
import { INFODATA } from "../../Data/data";
import { Link } from "react-router-dom";

const CardsHome = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRefCards = useRef(null);

  const cardsRender = INFODATA.HOME_CARDS.map((card) => {
    const { title, description, imageURL, styles } = card;
    return (
      <div
        key={title}
        style={{ translate: styles.translate, transition: styles.transition }}
        className="col-lg-4 scroll-animation-cards"
      >
        <div className="card">
          <img src={imageURL} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to="#" className="btn btn-primary">
              Descubre cómo mejorar tu seguridad
            </Link>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            document.querySelectorAll(".scroll-animation-cards").forEach((item) => {
              item.style.translate = "0";
              item.style.opacity = "1";
            });
            setHasAnimated(true);
          }
        });
      },
      { threshold: window.innerWidth < 768 ? 0.2 : 0.5 } 
    );
  
    if (elementRefCards.current) {
      observer.observe(elementRefCards.current);
    }
  
    return () => {
      if (elementRefCards.current) {
        observer.unobserve(elementRefCards.current);
      }
    };
  }, [hasAnimated]);
  


  return (
    <div className="container-fluid my-5 p-0 d-flex justify-content-center secction-two align-items-center ">
      <div className="container secction-two py-5 h-100 w-100 " ref={elementRefCards}>
        <h2 className="text-center">
          🔐 Protegemos lo que más te importa con la mejor tecnología en seguridad.
        </h2>
        <div className="row row-gap-4 mt-5 mt-lg-4">
          {cardsRender}
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
