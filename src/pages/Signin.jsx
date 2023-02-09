import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Signin = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font flex justify-center items-center w-1/2 mx-auto mt-5 h-[90vh]">
        <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl title-font mb-5">
            Sign in to your account
          </h2>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-ddg-inputtype="identities.emailAddress"
              data-ddg-autofill="true"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-ddg-inputtype="identities.emailAddress"
              data-ddg-autofill="true"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Signin
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signin;
