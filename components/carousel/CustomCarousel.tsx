"use client";
import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
import { AspectRatio } from "../ui/AspectRatio";

interface ImageItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageItem[];
}

const images = [
  { src: "/picture-m-1.jpg", alt: "Arise Cover 1" },
  { src: "/picture-m-2.jpg", alt: "Arise Cover 2" },
  { src: "/picture-m-3.jpg", alt: "Arise Cover 3" },
];

const CustomCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold for mobile screens as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Carousel
        autoplay
        dragging
        withoutControls
        swiping
        wrapAround
        disableAnimation
      >
        {images.map((image, index) => (
          <AspectRatio
            key={index}
            ratio={isMobile ? 4 / 3 : 16 / 9}
            className="bg-muted"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
