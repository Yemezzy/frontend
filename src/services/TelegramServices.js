import React from 'react'
import { useState } from 'react';
import SideNav from '../Dashboard/SideNav'

const TelegramServices = () => {
      const [val, setVal] = useState("");
  return (
    <SideNav>
      <div className="MiddleDiv">
        <div className="py-2 md:w-[80vw] md:pt-7 pl-2">
          <h1 className="text-xl md:mt-0 mt-5 md:mb-0 mb-5 ml-2 md:text-2xl md:ml-10 font-bold">
            Telegram Services
          </h1>
          <div className="md:w-[75vw] mb-7 md:mb-0 md:block md:h-[70vh] md:mr-0 mr-5 mx-2 px-5 md:mt-5 rounded-xl bnb md:px-7 py-5">
            <div>
              <h1 className="text-base md:text-xl pb-2 font-bold">
                Assured Investors (Buyers of Tokens)
              </h1>
              <div className="md:grid md:grid-cols-2 md:w-[100%]">
                <section className="mt-2 md:mt-5 md:w-[100%]">
                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Telegram Link
                  </label>
                  <br />
                  <input
                    placeholder="https://"
                    type="text"
                    className="border-gray-500 border-2 mb-3 outline-none rounded-md px-5 text-sm md:text-ml l w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  />
                  <br />

                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Service
                  </label>
                  <br />
                  <select
                    name=""
                    id=""
                    className="border-gray-500 border-2 outline-none mb-3 px-3 rounded-md text-mll w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  >
                    <option value="">Arbitrum Network Tokens</option>
                    <option value="">Avax Network Tokens</option>
                    <option value="">Binance Network Tokens</option>
                    <option value="">Ethereum Network Tokens</option>
                    <option value="">Cronos Tokens</option>
                    <option value="">Polygon Network Tokens</option>
                  </select>
                  <br />

                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Amount of Investors
                  </label>
                  <br />
                  <input
                    onChange={(event) => setVal(event.target.value)}
                    type="text"
                    className="border-gray-500 border-2 outline-none rounded-md px-5 text-base l w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  />
                </section>

                <section className="mt-2 md:mt-5">
                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Price
                  </label>
                  <br />

                  <input
                    // placeholder="All payments made strictly in USD"
                    value={"$" + val * 2.7}
                    name=""
                    id=""
                    className="border-gray-500 border-2 outline-none px-3 rounded-md text-ml 
                    w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                    // readOnly
                  />

                  <br />
                  <br />

                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Average Time
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-gray-500 border-2 outline-none rounded-md px-5 text-base
                     w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  />
                  <br />

                  <button className="bg-[rgb(56,63,104)] mt-2 md:mt-5 text-white px-5 py-2 md:px-7 rounded-md md:py-3 md:text-lg md:mb-0 mb-2">
                    Proceed
                  </button>
                </section>
              </div>
            </div>
            <b className="flex gap-2 items-center md:mt-10 md:text-base text-[13px]">
              <p className="text-yellow-400">Note: </p>
              <p>It takes 2-3 hours to comfirm work completly done</p>
            </b>
          </div>
        </div>

        <div className="py-2 md:w-[80vw] md:pt-7 pl-2">
          <div className=" md:w-[75vw] md:block mr-5 mb-7 md:mb-0 md:h-[70vh] mx-2 px-5 md:mt-5 rounded-xl bnb md:pl-7 py-5">
            <div>
              <h1 className="text-base md:text-xl pb-2 font-bold">
                Telegram Chinese Channel Investors
              </h1>
              <div className="md:grid md:grid-cols-2 md:w-[100%]">
                <section className="mt-2 md:mt-5">
                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Select Chinese Channel
                  </label>
                  <br />

                  <select
                    name=""
                    id=""
                    className="border-gray-500 border-2 outline-none px-3 rounded-md text-ml 
                    w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  >
                    <option value="">Usdt</option>
                    <option value="">Bnb</option>
                    <option value="">Eth</option>
                    <option value="">Solana</option>
                  </select>
                  <br />
                  <br />

                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Telegram Link
                  </label>
                  <br />
                  <input
                    placeholder="https://"
                    type="text"
                    className="border-gray-500 border-2 outline-none rounded-md px-5 text-base
                     w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  />
                  <br />
                  <br />
                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Charge
                  </label>
                  <br />

                  <input
                    type="text"
                    className="border-gray-500 border-2 outline-none rounded-md px-5 text-base
                     w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                  />
                  <br />
                  <br />
                </section>

                <section className="w-full">
                  <label className="font-bold text-sm md:text-base" htmlFor="">
                    Project Description/Tempelate
                  </label>
                  <textarea
                    placeholder="Write a description about your project or what you want us to post on our chinese telegram community to fetch you more chinese investors...
                  "
                    className="border-gray-500 border-2 h-[20rem] py-5 outline-none rounded-md px-5 text-base w-full md:w-[100%] md:h-full"
                  />

                  <button className="bg-[rgb(56,63,104)] mt-2 md:mt-0 text-white px-5 py-2 md:px-7 rounded-md md:py-3 md:text-lg md:mb-0 mb-2">
                    Proceed
                  </button>
                </section>
              </div>
            </div>
            <b className="flex gap-2 items-center mt-2 md:text-base text-[13px]">
              <p className="text-yellow-400">Note: </p>
              <p>It takes 5 minutes to comfirm work completly done</p>
            </b>
          </div>
        </div>

        <div className="md:w-[75vw] md:block md:mr-0 mr-5 mb-5 md:h-[70vh] mx-2 ml-4 px-5 md:my-5 rounded-xl bnb md:px-7 py-5">
          <div>
            <h1 className="text-base md:text-xl pb-2 font-bold">
              Presale Investors (Buyers of Tokens/Coins)
            </h1>
            <div className="md:grid md:grid-cols-2 md:w-[100%]">
              <section className="mt-2 md:mt-5 md:w-[100%]">
                <label className="font-bold text-sm md:text-base" htmlFor="">
                  Pinksale Link
                </label>
                <br />
                <input
                  placeholder="https://"
                  type="text"
                  className="mb-3 border-gray-500 border-2 outline-none rounded-md px-5 text-sm md:text-mll w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                />
                <br />

                <label className="font-bold text-sm md:text-base" htmlFor="">
                  Service
                </label>
                <br />
                <select
                  name=""
                  id=""
                  className="border-gray-500 border-2 outline-none mb-3 px-3 rounded-md  w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                >
                  <option value="">Usdt</option>
                  <option value="">Bnb</option>
                  <option value="">Eth</option>
                  <option value="">Solana</option>
                </select>
                <br />

                <label className="font-bold text-sm md:text-base" htmlFor="">
                  Price's
                </label>
                <br />
                <input
                  placeholder="All payments made strictly in USD"
                  value={"$" + val * 5}
                  readOnly
                  type="text"
                  className="border-gray-500 border-2 outline-none rounded-md px-5 text-base 
                  w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                />
              </section>

              <section className="mt-2 md:mt-5">
                <label className="font-bold text-sm md:text-base" htmlFor="">
                  Payment Made In Crypto
                </label>
                <br />

                <input
                  name=""
                  id=""
                  className="border-gray-500 border-2 outline-none px-3 rounded-md w-[90%] 
                  md:w-[80%] md:h-[3rem] h-[2.5rem]"
                />

                <br />
                <br />

                <label className="font-bold text-sm md:text-base" htmlFor="">
                  Average Time
                </label>
                <br />
                <input
                  type="text"
                  className="border-gray-500 border-2 outline-none rounded-md px-5 text-base 
                   w-[90%] md:w-[80%] md:h-[3rem] h-[2.5rem]"
                />
                <br />

                <button className="bg-[rgb(56,63,104)] mt-2 md:mt-5 text-white px-5 py-2 md:px-7 rounded-md md:py-3 md:text-lg md:mb-0 mb-2">
                  Proceed
                </button>
              </section>
            </div>
          </div>
          <b className="flex gap-2 items-center md:mt-10 md:text-base text-[13px]">
            <p className="text-yellow-400">Note: </p>
            <p>It takes 2-3 hours to comfirm work completly done</p>
          </b>
        </div>
      </div>
    </SideNav>
  );
}

export default TelegramServices