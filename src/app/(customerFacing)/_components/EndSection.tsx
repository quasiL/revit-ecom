"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

export default function EndSection() {
  const images = ["/chairs1.jpeg", "/chairs2.jpeg", "/chairs3.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <section>
      <div className="relative w-full h-[425px]">
        <Image
          src={images[currentIndex]}
          alt={`chairs${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto flex justify-between items-center p-12 text-white">
          <div className="flex gap-4 items-center">
            <span>Logo</span>
            <p className="text-3xl">Plugin for Revit</p>
            <div className="h-14 w-[1px] bg-white"></div>
            <div className="flex gap-4">
              <span className="icon_white mgc_home_6_line text-3xl"></span>
              <span className="icon_white mgc_pen_line text-3xl"></span>
              <span className="icon_white mgc_map_line text-3xl"></span>
              <span className="icon_white mgc_ruler_line text-3xl"></span>
              <span className="icon_white mgc_heart_line text-3xl"></span>
            </div>
          </div>
          <div className="flex gap-12">
            <Button text="View Plans" />
            <Button text="Free Download" />
          </div>
        </div>
      </div>
    </section>
  );
}
