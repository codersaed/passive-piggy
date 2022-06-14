import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="pb-12">
          <h2 className="font-bold text-green-400 text-4xl text-center px-5">
            The Team
          </h2>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt=""
                src="images/team3.png"
                className="max-w-full h-auto align-middle border-none mx-auto"
              />
              <div className="pt-6 text-center">
                <h1 className="text-green-400 text-2xl font-serif font-bold mt-0 mb-2">
                  Ryder
                </h1>
                <p className="text-white text-base font-light leading-relaxed mt-0 mb-4">
                  Co-Founder
                </p>
                <div className="flex items-center justify-center">
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaLinkedin className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaInstagram className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaTwitter className="text-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt=""
                src="images/team1.png"
                className=" max-w-full h-auto align-middle border-none mx-auto"
              />
              <div className="pt-6 text-center">
                <h1 className="text-green-400 text-2xl font-serif font-bold mt-0 mb-2">
                  Logan
                </h1>
                <p className="text-white text-base font-light leading-relaxed mt-0 mb-4">
                  Co-Founder
                </p>
                <div className="flex items-center justify-center">
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaLinkedin className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaInstagram className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaTwitter className="text-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt=""
                src="images/team2.png"
                className=" max-w-full h-auto align-middle border-none mx-auto"
              />
              <div className="pt-6 text-center">
                <h1 className="text-green-400 text-2xl font-serif font-bold mt-0 mb-2">
                  Muadin
                </h1>
                <p className="text-white text-base font-light leading-relaxed mt-0 mb-4">
                  Co-Founder
                </p>
                <div className="flex items-center justify-center">
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaLinkedin className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaInstagram className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaTwitter className="text-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt=""
                src="images/team.png"
                className=" max-w-full h-auto align-middle border-none mx-auto"
              />
              <div className="pt-6 text-center">
                <h1 className="text-green-400 text-2xl font-serif font-bold mt-0 mb-2">
                  Eric
                </h1>
                <p className="text-white text-base font-light leading-relaxed mt-0 mb-4">
                  Co-Founder
                </p>
                <div className="flex items-center justify-center">
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaLinkedin className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaInstagram className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="py-1 px-2">
                    <div className="rounded-full bg-green-400 py-1 px-1">
                      <a href="/">
                        <FaTwitter className="text-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
