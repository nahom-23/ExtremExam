import React from "react";
import Modal from "react-modal";
const Signup = ({ isOpen, onRequestClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="signup Modal"
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-25 backdrop-blur-sm">
          <div className="max-w-2xl ">
            <h1 className="text-green">Create New Account</h1>
            <p> register with Email Address</p>
            <form>
              <div className="flex ">
                <div>
                  <label className="block text-sm font-bold uppercase">
                    full name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-2 border border-[#DADADA] rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase">
                    username
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-2 border border-[#DADADA] rounded"
                  />
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-bold uppercase">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full p-2 mt-2 border border-[#DADADA] rounded"
                />
              </div>
              <div className="">
                <label className="block text-sm font-bold uppercase">
                  {" "}
                  Enter password
                </label>
                <input
                  type="password"
                  className="w-full p-2 mt-2 border border-[#DADADA] rounded"
                />
                <button type="submit">sign up</button>
                <button onClick={onRequestClose}>close</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Signup;
