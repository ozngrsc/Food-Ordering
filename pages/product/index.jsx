import Image from "next/image";
import React from "react";
import Header from "../../components/layout/Header";
import Title from "../../components/ui/Title";

const Index = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center h-screen md:gap-20 gap-1 py-20 flex-wrap">
        <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
          <Image
            src="/images/f1.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="md:flex-1 md:text-start text-center pb-14">
          <Title className="text-6xl">Good Pizza</Title>
          <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
            $10
          </span>
          <p className="text-sm my-6 md:pr-24">
            Lorem İpsum dolor sit amet consectetur adipisicing alit. Assumenda
            fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
            molestiae.
          </p>
          <div>
            <h4 className="text-xl font-bold">Choose the size</h4>
            <div className="flex items-center gap-x-16 md:justify-start justify-center">
              <div className="relative w-8 h-8">
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-6 text-xs bg-primary text-white rounded-full px-[5px] ">
                  Small
                </span>
              </div>
              <div className="relative w-12 h-12">
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-8 text-xs bg-primary text-white rounded-full px-[5px] ">
                  Medium
                </span>
              </div>
              <div className="relative w-16 h-16">
                <Image src="/images/size.png" alt="" layout="fill" />
                <span className="absolute top-0 -right-4 text-xs bg-primary text-white rounded-full px-[5px] ">
                  Large
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mt-6">
              Choose additional ingredients
            </h4>
            <div className="flex gap-x-4 my-4 md:justify-start justify-center">
              <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary" />{" "}
                <span className="text-sm font-semibold">Ketchup</span>
              </label>
              <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary" />{" "}
                <span className="text-sm font-semibold">Mayonnaise</span>
              </label>
              <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary" />{" "}
                <span className="text-sm font-semibold">Hot Sauce</span>
              </label>
            </div>
          </div>
          <button className="btn-primary mt-10">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
