import Image from "next/image";
import React, { useState } from "react";
import Account from "../../components/profile/Account";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_428px)] lg:flex-row flex-col">
      <div className="lg:w-80 w-100 flex-shrink-0">
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
          <li
            className={`w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(0)}
          >
            <i className="fa fa-home"></i>
            <button className="ml-2">Account</button>
          </li>
          <li
            className={`w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(1)}
          >
            <i className="fa fa-key"></i>
            <button className="ml-2">Password</button>
          </li>
          <li
            className={`w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(2)}
          >
            <i className="fa fa-motorcycle"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li
            className={`w-full border p-3 cursor-pointer hover:bg-primary hover:text-white transition-all flex items-center justify-center ${
              tabs === 3 && "bg-primary text-white"
            }`}
            onClick={() => setTabs(3)}
          >
            <i className="fa fa-sign-out"></i>
            <button className="ml-2">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
    </div>
  );
};

export default Profile;
