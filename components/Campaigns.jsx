import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Title from "./ui/Title";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          className="hover:scale-110 transition-all"
          src="/images/o1.jpg"
          alt=""
          layout="fill"
        />
      </div>
      <div className="text-white">
        <Title className="text-2xl">Tasty Thursday</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px] ">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <FaShoppingCart className="ml-[10px]" />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem />
      <CampaignItem />
    </div>
  );
};

export default Campaigns;

{
  /* <div className="col-md-6 flex-[0 0 50%] max-w-[50%] mb-12">
          <div className="box flex items-center mt-11 rounded-[5px] bg-[#222831] p-5 text-white w-full">
            <div className="relative w-[175px] min-w-[175px] h-[175px] mr-4 border-solid border-4 border-[#ffbe33] rounded-full">
              <Image
                className="rounded-full "
                src="/images/o1.jpg"
                alt=""
                layout="fill"
              />
            </div>
            <div className="">
              <h5 className="font-dancing text-[24px] m-[0]">
                Tasty Thursdays
              </h5>
              <h6 className="font-dancing mt-[10px] mb-[10px] mr-0 ml-0 text-base ">
                <span className="text-[2.5rem] font-bold mr-2">20%</span>
                Off
              </h6>
              <a href="">
                <button className="btn-primary flex items-center justify-center">
                  Order Now <FaShoppingCart className="ml-[10px]" />
                </button>
              </a>
            </div>
          </div> */
}
