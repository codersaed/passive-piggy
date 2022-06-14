import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 py-8">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/#home"
            >
              <img className="h-12" src="/images/logo.png" alt="logo" />
            </a>
            <div className="flex gap-x-2 items-center">
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <CgMenuLeft className="text-white" />
              </button>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <a className="navitem" href="/about">
                About
              </a>

              <a className="navitem" href="#benefits">
                Benefits
              </a>
              <a className="navitem" href="#roadmap">
                Roadmap
              </a>
              <a className="navitem" href="#team">
                Team
              </a>
              <a className="navitem" href="#fqa">
                FQA
              </a>
              <a className="navitem mr-16" href="#shop">
                Shop
              </a>
              <div className="flex">
                <div className="py-3 px-2">
                  <div className="rounded-full bg-black py-1 px-1">
                    <a href="/">
                      <FaDiscord className="text-green-500 " />
                    </a>
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="rounded-full bg-black py-1 px-1">
                    <a href="/">
                      <FaInstagram className="text-green-500 " />
                    </a>
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="rounded-full bg-black py-1 px-1">
                    <a href="/">
                      <FaTwitter className="text-green-500 " />
                    </a>
                  </div>
                </div>
                <div className="py-3 px-2">
                  <div className="rounded-full bg-black py-1 px-1">
                    <a href="/">
                      <GiSailboat className="text-green-500 " />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <button className="px-5 py-2 rounded-3xl font-bold text-black bg-green-500 lg:ml-8">
                  Mint now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
