"use client";
import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { urlFor } from "@/utils/sanity/client";

interface CustomCarouselProps {
  images: { image: any; altText: string }[];
}

const CustomCarousel = ({ images }: CustomCarouselProps) => {
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
    <section>
      <Carousel
        autoplay
        dragging
        withoutControls
        swiping
        wrapAround
        disableAnimation
      >
        {images.map((image, index) => {
          const { image: asset } = image;

          return (
            <AspectRatio
              key={index}
              ratio={isMobile ? 4 / 3 : 16 / 9}
              className="bg-muted"
            >
              <Image
                key={index}
                src={urlFor(asset).url()}
                alt={image.altText}
                className="object-cover"
                fill
                priority
                placeholder="blur"
                blurDataURL="/picture-m-1.jpg"
              />
            </AspectRatio>
          );
        })}
      </Carousel>
    </section>
  );
};

export default CustomCarousel;
