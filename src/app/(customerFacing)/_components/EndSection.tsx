"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../../../components/CustomButton";

export default function EndSection() {
  const images = ["/chairs1.jpeg", "/chairs2.jpeg", "/chairs3.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
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
        <div className="container mx-auto flex justify-between items-center px-6 py-12 text-white">
          <div className="flex gap-4 items-center">
            <Link className="flex items-center gap-2" href="/">
              <img src="/logo.png" alt="Logo" className="w-14" />
              <img src="/textlogo.svg" alt="Text Logo" className="w-72" />
            </Link>
            <div className="h-14 w-[1px] bg-white"></div>
            <div className="flex gap-4">
              {[
                "mgc_home_6_line",
                "mgc_pen_line",
                "mgc_map_line",
                "mgc_ruler_line",
                "mgc_heart_line",
              ].map((iconClass, index) => (
                <span
                  key={index}
                  className={`icon_white ${iconClass} text-3xl`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-12">
            <CustomButton href="/families">View Plans</CustomButton>
            <CustomButton href="/#">Free Download</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
}
