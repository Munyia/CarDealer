import React from "react";
import Header from "../components/Header";

const Request = () => {
  return (
    <div>
      <Header/>
        <div className="w-full min-h-screen flex items-center justify-center bg-body py-3">
      <div className="relative w-1/3 shadow-2xl shadow-slate-900 bg-pry px-4 py-3 bg--600 mx-8 md:mx-0 rounded-3xl sm:p-10 sm:max-w-1/2">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-but mb-6 text-center">
            Request Form
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-but">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-but">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-but">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-but">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message here..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="py-2 px-4 bg-but hover:text-black hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Request;
