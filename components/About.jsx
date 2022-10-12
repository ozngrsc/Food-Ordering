import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className=" bg-secondary py-16 mb-16">
      <div className="container mx-auto flex items-center gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[607px] w-[300px] h-[450px] flex justify-center">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="text-white md:w-1/2 ">
          <Title className="text-[40px]">We Are Feane</Title>
          <p className="text-[16px] my-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
