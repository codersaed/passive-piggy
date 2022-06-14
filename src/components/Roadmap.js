import React from "react";

const Roadmap = () => {
  return (
    <div className="bg-black">
      <div className="py-20 max-w-7xl mx-auto ">
        <div className="pb-5">
          <h2 className="font-bold text-green-400 text-5xl text-center lg:text-start pl-24">
            Roadmap
          </h2>
        </div>
        <div className="grid grid-cols-2">
          <div class="timeline ml-48">
            <div class="events">
              <div class="event pb-14">
                <div class="dot"></div>
                <h2 className="absolute -left-20  text-6xl text-green-400">
                  0%
                </h2>
                <div class="pl-8">
                  <p className="text-xl text-white">
                    Minting goes live. Presale will go live 24 hours prior to
                    the main sale.
                  </p>
                </div>
              </div>

              <div class="event pb-14">
                <div class="dot"></div>
                <h2 className="absolute -left-28  text-6xl text-green-400">
                  20%
                </h2>
                <div class="pl-8">
                  <p className="text-xl text-white">
                    The PPB team will use funds raised to purchase real estate
                    investments in our target market
                  </p>
                </div>
              </div>

              <div class="event pb-14">
                <div class="dot"></div>
                <h2 className="absolute -left-28  text-6xl text-green-400">
                  40%
                </h2>
                <div class="pl-8">
                  <p className="text-xl text-white">
                    PPB holders will begin receiving their PPB Coins that can be
                    used to redeem Ethereum and other rewards on our website.
                    Rare and Legendary holders will receive monthly royalties
                    paid in PPB Coin from marketplace activity.
                  </p>
                </div>
              </div>

              <div class="event pb-14">
                <div class="dot"></div>
                <h2 className="absolute -left-28  text-6xl text-green-400">
                  60%
                </h2>
                <div class="pl-8">
                  <p className="text-xl text-white">
                    PPB holders will begin receiving free vacation stays at PPB
                    properties. These stays will be randomly selected amongst
                    all holders, with guaranteed stays for rare and legendary
                    holders.
                  </p>
                </div>
              </div>

              <div class="event pb-14">
                <div class="dot"></div>
                <h2 className="absolute -left-28  text-6xl text-green-400">
                  80%
                </h2>
                <div class="pl-8">
                  <p className="text-xl text-white">
                    PPB holders will receive free access to events to meet the
                    team and get insights on operations.
                  </p>
                </div>
              </div>

              <div class="event pb-14">
                <div class="dot"></div>
                <h2 className="absolute -left-36  text-6xl text-green-400">
                  100%
                </h2>
                <div class="pl-8">
                  <p className="text-xl text-white">
                    Each PPB NFT will act as a mint pass for early access to all
                    future PPB related projects or collections in different
                    locations.
                  </p>
                </div>
              </div>

              <hr class="line"></hr>
            </div>
          </div>
          <div className="md:invisible lg:visible">
            <img className="w-4/5 mx-auto my-20" src="/images/r.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
