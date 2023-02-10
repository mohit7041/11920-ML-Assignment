import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font h-[10vh]">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link to="/">
            <span class="ml-3 text-xl">Career Guider</span>
          </Link>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900 cursor-pointer">
            <Link to="/">Home</Link>
          </a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">
            <Link to="/about">About</Link>
          </a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">
            <Link to="/signup">Assessment</Link>
          </a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 mx-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <Link to="/signin">Signin</Link>
        </button>

        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
