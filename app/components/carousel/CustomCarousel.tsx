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
  const [windowWidth, setWindowWidth] = useState(0);
  const [carouselImages, setCarouselImages] = useState(images);

  useEffect(() => {
    // Ensure code runs only in the browser
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      // Ensure code runs only in the browser
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    // Add event listener only in the browser environment
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Remove event listener only in the browser environment
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
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
