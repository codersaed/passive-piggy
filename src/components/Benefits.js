import React from "react";

const Benefits = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="pb-5">
          <h2 className="font-bold text-green-400 text-4xl text-center lg:text-start px-5">
            Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 cursor-pointer">
          <div className="mx-auto">
            <div className="flex flex-wrap md:flex-nowrap mx-auto max-w-xl">
              <img
                className="w-44 h-44 align-middle border-none mx-auto my-auto"
                src="/images/benefit2.png"
                alt=""
              />
              <div className="p-10 my-auto">
                <p className="text-lg text-white text-center lg:text-start mt-2">
                  Passive income through monthly preferred returns (6-8%
                  depending on rarity of NFT), as well as a share of all OpenSea
                  royalties (depending on rarity of NFT).
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap mx-auto max-w-xl ">
              <img
                className="w-44 h-44 align-middle border-none mx-auto my-auto"
                src="/images/benefit1.png"
                alt=""
              />
              <div className="p-10 my-auto">
                <p className="text-lg text-white text-center lg:text-start mt-2">
                  Access to exclusive events, PPB branded merchandise, and more
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap mx-auto max-w-xl ">
              <img
                className="w-44 h-44 align-middle border-none lg:mx-0 mx-auto my-auto"
                src="/images/benefit3.png"
                alt=""
              />
              <div className="p-10 my-auto mx-auto lg:mx-0">
                <p className="text-lg text-white text-center lg:text-start mt-2">
                  Free vacation stays at PPB properties
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap md:flex-nowrap mx-auto max-w-xl ">
              <img
                className="w-44 h-44 align-middle border-none lg:mx-0 mx-auto my-auto"
                src="/images/benefit.png"
                alt=""
              />
              <div className="p-10 my-auto mx-auto lg:mx-0">
                <p className="text-lg text-white text-center lg:text-start mt-2">
                  Mint pass for future PPB collections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
