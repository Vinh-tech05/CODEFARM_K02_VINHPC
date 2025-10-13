import React from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 mt-10 shadow-inner">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-xl font-semibold tracking-wide mb-4 md:mb-0">
          MyTodo
        </h2>
        <div className="flex gap-6 text-2xl">
          <a
            href="#"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-pink-200 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-blue-100 mt-4">
        © {new Date().getFullYear()} MyTodo With Vinh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
