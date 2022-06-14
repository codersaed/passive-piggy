import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)), url("/images/banner.png")`,
      }}
      className="bg-center bg-cover  h-auto lg:h-screen"
    >
      <Nav />

      <div className="grid justify-items-center pt-10">
        <h2 className="lg:text-6xl md:text-5xl text-xl text-center text-green-400 font-bold">
          An exclusive collection of 1,000 <br /> unique non-fungible ERC-721
          <br /> tokens (NFTs)
        </h2>
        <p className="pt-5 pb-10 w-3/6 text-center lg:text-lg md:text-lg text-sm text-white">
          Passive Piggy Banks (PPB) is an exclusive collection of 1,000 unique
          non-fungible ERC-721 tokens (NFTs) on the Ethereum blockchain that
          provide holders with passive income through real estate investments,
          royalties, and more.
        </p>
        <img
          className="absolute top-96 left-56 h-20"
          src="/images/b1.png"
          alt=""
        />
        <img
          className="absolute top-3/4 right-72 h-36"
          src="/images/b2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
