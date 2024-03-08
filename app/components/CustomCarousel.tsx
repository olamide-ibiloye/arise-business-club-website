"use client";
import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageItem[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel
      autoplay
      dragging
      withoutControls
      swiping
      wrapAround
      disableAnimation
    >
      {images.map((image, index) => (
        <div key={index} className="carousel-item relative w-full">
          <Image src={image.src} alt={image.alt} width={1920} height={1080} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
