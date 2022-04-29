import React from "react";
import banner1 from "../../images/banner/banner-1.jpg";
import banner2 from "../../images/banner/banner-2.jpg";
import banner3 from "../../images/banner/banner-3.jpg";
import banner4 from "../../images/banner/banner-4.jpg";
import banner5 from "../../images/banner/banner-5.jpg";
import banner6 from "../../images/banner/banner-6.jpg";

const Carouseel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carouseel;
