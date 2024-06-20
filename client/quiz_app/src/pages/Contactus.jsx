import React from "react";

function Contactus() {
  return (
    <>
      <div className="z-50 flex items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-[630px] p-8 bg-white rounded-lg shadow-lg">
          <div className="my-8 text-center ">
            <p className="tracking-wider uppercase text-green">Contact Us</p>
            <h1 className="text-5xl font-bold text-green">Get In Touch</h1>
          </div>
          <form className="w-full max-w-[320px] mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-bold uppercase text-blueblack">
                Name
              </label>
              <input
                type="text"
                className="w-80 p-2 mt-2 border border-[#DADADA] rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold uppercase text-blueblack">
                Email
              </label>
              <input
                type="email"
                className="w-80  p-2 mt-2 border border-[#DADADA] rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold uppercase text-blueblack">
                Message
              </label>
              <textarea
                className="w-80  p-2 mt-2 border border-[#DADADA] rounded"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 text-sm font-bold text-white uppercase rounded px-14 bg-green "
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactus;
