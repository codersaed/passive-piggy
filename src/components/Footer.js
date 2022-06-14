import React from "react";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto ">
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-3 ">
          <div className="px-5 mb-5 md:mb-0 mx-auto">
            <a className="mr-4 py-2" href="/">
              <img className="h-28" src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="px-5">
            <div className="grid grid-cols-2 justify-items-center">
              <div>
                <a href="/" className="text-white">
                  <h1 className="py-2">About</h1>
                </a>
                <a href="/" className="text-white">
                  <h1 className="py-2">Benefits</h1>
                </a>
                <a href="/" className="text-white">
                  <h1 className="py-2">Roadmap</h1>
                </a>
              </div>
              <div>
                <a href="/" className="text-white">
                  <h1 className="py-2">Team</h1>
                </a>
                <a href="/" className="text-white">
                  <h1 className="py-2">FAQs</h1>
                </a>
                <a href="/" className="text-white">
                  <h1 className="py-2">Shop</h1>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto my-auto py-5">
            <div className="flex">
              <div className="py-3 px-2">
                <div className="rounded-full bg-green-400 py-2 px-2">
                  <a href="/">
                    <FaDiscord className="text-black text-lg" />
                  </a>
                </div>
              </div>
              <div className="py-3 px-2">
                <div className="rounded-full bg-green-400 py-2 px-2">
                  <a href="/">
                    <FaInstagram className="text-black text-lg" />
                  </a>
                </div>
              </div>
              <div className="py-3 px-2">
                <div className="rounded-full bg-green-400 py-2 px-2">
                  <a href="/">
                    <FaTwitter className="text-black text-lg" />
                  </a>
                </div>
              </div>
              <div className="py-3 px-2">
                <div className="rounded-full bg-green-400 py-2 px-2">
                  <a href="/">
                    <GiSailboat className="text-black text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-green-400">
        <p className="font-bold text-black lg:text-lg">
          © 2022 - Passive Piggy Banks - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
