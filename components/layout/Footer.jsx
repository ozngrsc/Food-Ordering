import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-10">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-10">
          <div className="md:flex-1">
            <Title className="text-3xl">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div className=" hover:text-primary cursor-pointer">
                <i class="fa-solid fa-location-dot"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
              <div className=" hover:text-primary cursor-pointer">
                <i class="fa-solid fa-phone"></i>
                <span className="inline-block ml-2">Call +01 1234567890</span>
              </div>
              <div className=" hover:text-primary cursor-pointer">
                <i class="fa-solid fa-envelope"></i>
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title className="text-3xl">Feane</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex justify-center gap-x-2 mt-5">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa-brands fa-facebook-f  hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa-brands fa-twitter  hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa-brands fa-linkedin-in  hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa-brands fa-instagram  hover:text-primary"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa-brands fa-pinterest-p  hover:text-primary"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title className="text-3xl">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
