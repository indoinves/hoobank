import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Product = ({ content, name, price, imgs }) => {
  const { t, _, ready } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlide = (direction) => {
    setCurrentSlide((prev) =>
      direction === 'next'
        ? (prev + 1) % imgs.length
        : (prev - 1 + imgs.length) % imgs.length
    );
  };

  return (
    <div className="justify-center flex flex-col px-5 sm:py-6 py-3 rounded-[5px] md:w-[370px] w-[370px] md:mr-5 mr-0 my-5 feedback-card">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {imgs.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={img} alt={name} className="w-[350px] h-[330px] object-contain"/>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <span className="prev" onClick={() => handleSlide('prev')}>&#10094;</span>
          <span className="next" onClick={() => handleSlide('next')}>&#10095;</span>
        </div>
      </div>
      <div className="flex flex-row h-[50px] my-2">
        <h4 className="font-poppins font-semibold text-[20px] text-white">
          {name}
        </h4>
      </div>
      <div className="flex flex-row h-[50px]">
        <p className="font-poppins font-normal text-[18px] md:leading-[32px] text-white md:max-w-[300px]">
          {content}
        </p>
      </div>
      <div className="flex flex-row h-[20px] my-10">
        <p className="font-poppins font-normal text-[18px] md:leading-[32px] text-white md:max-w-[300px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default Product;
