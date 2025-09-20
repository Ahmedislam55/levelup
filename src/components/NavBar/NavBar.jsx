import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../icon/icon.png";
export default function NavBar() {
  return (
    <header className="absolute w-full z-50">
      <nav className="bg-white border-gray-200 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-14" alt="Level Up" />
            <span className="self-center text-main font text-2xl font-bold whitespace-nowrap ">
             Level Up
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-main rounded-lg md:hidden hover:bg-main hover:text-white transition-all duration-500"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-lg font-sans ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 transition-all duration-500 text-main rounded-sm hover:bg-main hover:text-white md:border-0 md:p-2"
                  aria-current="page"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 transition-all duration-500 text-main rounded-sm hover:bg-main hover:text-white md:border-0 md:p-2"
                >
                  عن المدرب
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 transition-all duration-500 text-main rounded-sm hover:bg-main hover:text-white md:border-0 md:p-2"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 transition-all duration-500 text-main rounded-sm hover:bg-main hover:text-white md:border-0 md:p-2"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
