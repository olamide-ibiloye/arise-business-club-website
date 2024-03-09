"use client";
import React, { useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageItem[];
}

const images = [
  { src: "/picture-1.jpg", alt: "Arise Cover 1" },
  { src: "/picture-2.jpg", alt: "Arise Cover 2" },
  { src: "/picture-3.jpg", alt: "Arise Cover 3" },
];

const mobileImages = [
  { src: "/picture-m-1.jpg", alt: "Arise Cover 1" },
  { src: "/picture-m-2.jpg", alt: "Arise Cover 2" },
  { src: "/picture-m-3.jpg", alt: "Arise Cover 3" },
];

const CustomCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [carouselImages, setCarouselImages] = useState(images);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      setCarouselImages(mobileImages);
    } else {
      setCarouselImages(images);
    }
  }, [windowWidth]);

  return (
    <div className="mb-6 lg:mb-20">
      <Carousel
        autoplay
        dragging
        withoutControls
        swiping
        wrapAround
        disableAnimation
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="carousel-item w-full">
            <Image src={image.src} alt={image.alt} width={1920} height={1080} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
