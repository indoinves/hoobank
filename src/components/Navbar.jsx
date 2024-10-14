import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { I18n } from "./i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t, _, ready } = useTranslation();
  if (!ready) return "loading translations...";

  const navLinks = t("navLinks", { returnObjects: true });
  const externalLinks = t("externalLinks", { returnObjects: true });

  return (
    <nav className="w-full flex nav-style items-center justify-between navbar">
      <div className="flex">
        <img src={logo} alt="bananafrog" className="w-[40px] h-[40px] logo" />
        <a className="text-white font-poppins ml-5 mt-2 logo-text">
          BananaFrog3D
        </a>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <a href={`/#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {externalLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end z-10">
        {/* Choose Language */}
        <I18n></I18n>

        {/* Menu */}
        <div className="sm:hidden justify-end items-center z-10">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((previous) => !previous)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } sidebar p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white mr-10`}
                >
                  <a href={`/#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className={`mt-2`}></li>
              {externalLinks.map((nav, i) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    i === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white mr-10`}
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
