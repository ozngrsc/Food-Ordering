import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav>
          <ul className="flex gap-x-6">
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">HOME</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">MENU</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">ABOUT</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">BOOK TABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
