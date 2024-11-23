import Image from "next/image";
import CustomButton from "../../../components/CustomButton";

export default function HeroSection() {
  return (
    <section>
      <div className="bg-gray-900 mx-auto w-full">
        <div className="flex justify-center gap-12 pt-36">
          <div className="flex flex-col gap-6 w-2/5">
            <h2 className="text-2xl text-white font-light">
              Plugin for Revit®
            </h2>
            <div className="w-16 h-[1px] bg-white"></div>
            <h1 className="text-5xl font-bold text-transparent bg-gradient-violet-pink bg-clip-text">
              Elevate Your Designs with Advanced Revit Families
            </h1>
            <h2 className="text-2xl text-white font-light">
              Access a comprehensive library of BIM-integrated families for
              interior design with the Blocks Plugin
            </h2>
            <div className="flex gap-8 pl-2">
              <CustomButton href="/families">View Plans</CustomButton>
              <CustomButton href="/#">Free Download</CustomButton>
            </div>
          </div>
          <div>
            <Image
              src="/hero.png"
              alt="hero"
              width={360}
              height={525}
              className="pt-26"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-40 py-10 text-lg font-bold text-white bg-black">
        <h4>Native modeling in Revit</h4>
        <h4>Parametric families</h4>
        <h4>Ready-to-render textures</h4>
        <h4>BIM</h4>
      </div>
    </section>
  );
}
