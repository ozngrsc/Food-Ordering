import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto my-20">
      <Title className="text-[40px] text-center ">
        What Says Our Customers
      </Title>
      <div className="flex gap-x-10">
        <CustomerItem imgSrc="/images/client-1.jpg" />
        <CustomerItem imgSrc="/images/client-2.jpg" />
      </div>
    </div>
  );
};

export default Customers;
