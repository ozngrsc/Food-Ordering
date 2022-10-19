import Image from "next/image";
import React from "react";
import { HiHome } from "react-icons/hi";

const Profile = () => {
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_428px)]">
      <div className="w-80">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/client-2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full "
          />
          <b className="text-2xl mt-1">John Wick</b>
        </div>
        <ul className="font-semibold">
          <li className="w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center">
            <i className="fa fa-home"></i>
            <button className="ml-2">Account</button>
          </li>
          <li className="w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center">
            <i className="fa fa-key"></i>
            <button className="ml-2">Password</button>
          </li>
          <li className="w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center">
            <i className="fa fa-motorcycle"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li className="w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center">
            <i className="fa fa-sign-out"></i>
            <button className="ml-2">Exit</button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
