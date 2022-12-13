import React from "react";
import Slider from "react-slick";

const clientsData = [
  {
    id: 1,
    image: "images/clients/cliente1.jpg",
  },
  {
    id: 2,
    image: "images/clients/cliente2.jpg",
  },
  {
    id: 3,
    image: "images/clients/cliente3.jpg",
  },
  {
    id: 4,
    image: "images/clients/cliente4.png",
  },
  {
    id: 5,
    image: "images/clients/cliente5.png",
  },
];

function Clients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="shadow-dark background-blue color-white padding-50">
      <h2 className="d-none">Clients</h2>

      <div className="clients-wrapper">
        <Slider {...settings} className="padding-slider">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <div className="inner">
                <img src={client.image} alt="client-name" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
