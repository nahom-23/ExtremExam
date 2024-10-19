import React from "react";

function Contactus() {
  return (
    <>
      <section>
        <div className="z-50 flex flex-col items-center justify-center m-6 bg-gray-100 h-[550px] bg-[url('/src/assets/contactus.png')] bg-16 bg-no-repeat bg-center relative">
          <article className="w-full max-w-[560px] pb-28 bg-white rounded-sm shadow-3xl absolute top-24">
            <header className="my-8 text-center">
              <p className="tracking-wider uppercase text-green">Contact Us</p>
              <h1
                id="contact-heading"
                className="text-5xl font-bold text-green"
              >
                Get In Touch
              </h1>
            </header>
            <form
              className="w-full max-w-[320px] mx-auto"
              action="#"
              method="post"
            >
              <fieldset>
                <legend className="sr-only">Contact form</legend>

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-bold uppercase text-blueblack"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-80 p-2 mt-2 border border-[#DADADA] rounded focus:outline-none"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-bold uppercase text-blueblack"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-80 p-2 mt-2 border border-[#DADADA] rounded focus:outline-none"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-bold uppercase text-blueblack"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-80 p-2 mt-2 border border-[#DADADA] rounded resize-none  focus:outline-none"
                    placeholder="Your Message"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="py-3 text-sm font-bold text-white uppercase rounded px-14 bg-green"
                  >
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </article>
        </div>

        <aside className="w-full bg-green h-[305px] bg-[url('/src/assets/background.png')] bg-16 bg-no-repeat bg-center"></aside>
      </section>
    </>
  );
}

export default Contactus;
