import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Navbar />
      {/* <section className="landingmainsection">
        <div style={{ flex: "1", margin: "55px" }}>
          <p
            className={`text-3xl font-extrabold ${
              success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
          <h2 className="mt-5 mb-5 text-4xl text-purple-600">
            Create an account
          </h2>
          <hr />
          <h3 className="mt-5 mb-5 text-base">
            Already have an account?{" "}
            <Link to="/signin" className="text-purple-500">
              Login here
            </Link>
          </h3>

          <form className="w-[100%] flex flex-col gap-2 mx-auto">
            <div className="flex  flex-nowrap gap-4 justify-center items-center sm:flex-col md:flex-row">
              <input
                type="text"
                placeholder="First Name*"
                className="my-4 border-solid border-2 border-[#000000a4] outline-none p-2 w-[calc(20%-18px)] sm:w-[100%]"
                minLength="3"
                maxLength="32"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="my-4 border-solid border-2 border-[#000000a4] outline-none p-2 w-[20%] sm:w-[100%]"
                minLength="3"
                maxLength="32"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              className="my-4 border-solid border-2 border-[#000000a4] outline-none p-2 w-[40%] mx-auto sm:w-[100%]"
              id="email"
              required
              placeholder="Email*"
            />
            <input
              type="password"
              name="password"
              className="my-4 border-solid border-2 border-[#000000a4] outline-none p-2 w-[40%] mx-auto sm:w-[100%]"
              id="password"
              placeholder="Password*"
              minLength="8"
              required
            />
            <input
              type="text"
              name="ssc"
              id="ssc"
              placeholder="SSC Marks"
              className="my-4 border-solid border-2 border-[#000000a4] outline-none p-2 w-[40%] mx-auto sm:w-[100%]"
            />
            <input
              type="text"
              name="hsc"
              id="hsc"
              placeholder="HSC Marks"
              className="my-4 border-solid border-2 border-[#000000a4] outline-none p-2 w-[40%] mx-auto sm:w-[100%]"
            />
            <button
              href="#_"
              className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-[15%] mx-auto"
              type="submit"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-purple-300 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-purple-300 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 border-purple-300  group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 border-purple-300  group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-purple-600 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Signup
              </span>
            </button>
          </form>
        </div>
      </section> */}

      <section className="text-gray-600 body-font flex justify-center items-center w-1/2 mx-auto mt-5 h-[90vh]">
        <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl title-font mb-5">
            Create an account
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-ddg-inputtype="identities.fullName"
              required
            />
          </div>
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
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              SSC Marks
            </label>
            <input
              type="text"
              id="sscmarks"
              name="sscmarks"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-ddg-inputtype="identities.emailAddress"
              data-ddg-autofill="true"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              HSC Marks
            </label>
            <input
              type="text"
              id="hscmarks"
              name="hscmarks"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-ddg-inputtype="identities.emailAddress"
              data-ddg-autofill="true"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Signup
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
