import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your E-mail Address",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
    },
    {
      id: 5,
      name: "fullName",
      type: "datetime-local",
      placeholder: "Your Full Name",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title className="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">Book Now</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162746.0685813484!2d-74.18901718373128!3d40.717059330753706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Binas%C4%B1!5e0!3m2!1str!2str!4v1665644305545!5m2!1str!2str"
            width="100%"
            height="384"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
