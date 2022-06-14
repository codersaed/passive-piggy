import React from "react";

const Faq = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-32">
        <div className="pb-12">
          <h2 className="font-bold text-green-400 text-4xl text-center px-5">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="accordion flex flex-col items-center justify-center">
          <div class="w-2/3">
            <input type="checkbox" name="panel" id="panel-1" class="hidden" />
            <label
              for="panel-1"
              class="relative block text-green-400 p-4 text-2xl"
            >
              1. When can I mint a PPB?
            </label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
              <p class="accordion__body p-4 text-white" id="panel1">
                You can mint your PPB on our website any time after April X,
                2022. If you’re on the whitelist, you can mint your PPB 24 hours
                in advance of the public sale.
              </p>
            </div>
          </div>

          <div class="w-2/3">
            <input type="checkbox" name="panel" id="panel-2" class="hidden" />
            <label for="panel-2" class="relative block text-white p-4 text-2xl">
              2. Are all PPBs the same?
            </label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
              <p class="accordion__body p-4 text-white" id="panel2">
                You can mint your PPB on our website any time after April X,
                2022. If you’re on the whitelist, you can mint your PPB 24 hours
                in advance of the public sale.
              </p>
            </div>
          </div>

          <div class="w-2/3">
            <input type="checkbox" name="panel" id="panel-3" class="hidden" />
            <label for="panel-3" class="relative block text-white p-4 text-2xl">
              3. How much does it cost to mint a PPB?
            </label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
              <p class="accordion__body p-4 text-white" id="panel3">
                You can mint your PPB on our website any time after April X,
                2022. If you’re on the whitelist, you can mint your PPB 24 hours
                in advance of the public sale.
              </p>
            </div>
          </div>

          <div class="w-2/3">
            <input type="checkbox" name="panel" id="panel-4" class="hidden" />
            <label for="panel-4" class="relative block text-white p-4 text-2xl">
              4. How many PPBs are there?
            </label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
              <p class="accordion__body p-4 text-white" id="panel4">
                You can mint your PPB on our website any time after April X,
                2022. If you’re on the whitelist, you can mint your PPB 24 hours
                in advance of the public sale.
              </p>
            </div>
          </div>

          <div class="w-2/3">
            <input type="checkbox" name="panel" id="panel-5" class="hidden" />
            <label for="panel-5" class="relative block text-white p-4 text-2xl">
              5. What if I have a question not covered in these FAQs?
            </label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
              <p class="accordion__body p-4 text-white" id="panel5">
                You can mint your PPB on our website any time after April X,
                2022. If you’re on the whitelist, you can mint your PPB 24 hours
                in advance of the public sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
