import React from 'react'
import { BiMoney } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsJournalArrowUp } from "react-icons/bs";
import { TiInfo } from "react-icons/ti";
import SideNav from './SideNav';
import { useState, useEffect } from "react";

const Dashboard = () => {
      const List = [
        "Choose a category",
        "Chinese Promotions",
        "Project Listing and Trending",
        "Telegram Calls Channel Promotions",
        "Telegram Bots",
        "Telegram Upvotes",
        "Twitter Promotions",
        "Youtube Crypto Promoions",
        "Youtube NFT Promoions",
      ];
      const items = {
        "Chinese Promotions": [
          "Weibo",
          "Wechat",
          "BTOK",
          "KakaoTalk",
          "Douyu",
          "Xueqiu",
          "Youku",
        ],
        "Telegram Calls Channel Promotions": ["gfg", "hccccc", "yddddddd"],
        "Project Listing and Trending": [
          "Dextool",
          "CoinMarketCap",
          "PinkSale",
          "CoinGeko",
          "Top100Tokens",
        ],
        "Telegram Bots": ["Up Votes Bots", "Shilling Bots", "PinkSale Bots"],
        "Telegram Upvotes": [
          "Coin Scope",
          "Coin Snipper",
          "Coin mooner",
          "Coin Hunters",
          "Coin Vote",
          "Gem Finder",
          "Coin Discovery",
          "Watch.Guru",
        ],
        "Twitter Promotions": ["nnnn"],
        "Youtube Crypto Promoions": [
          "The Modern Investors - https://youtube.com/@TheModernInvestor  - 228K Youtube subscribers",
          "Ivan On Tech - https://youtube.com/@IvanOnTech  - 490K Youtube subscribers",
          "JRNY Crypto - https://youtube.com/@JRNYCrypto  - 643K Youtube subscribers",
          "BitBoy Crypto - https://youtube.com/@BitBoyCryptoChannel - 1.4M Youtube subscribers",
          "Coin Bureau - https://youtube.com/@CoinBureau - 2.1M Youtube subscribers",
        ],
        "Youtube NFT Promoions": ["gkgkgk"],
      };
      const [selected, setSelected] = useState("");
      console.log(selected);
    return (
      <div>
        <SideNav>
          <div className="bg-gray-100">
            {/* <Navbar /> */}
            <div className="md:w-[80vw] px-5 md:px-20">
              <p className="pt-4 uppercase gap-2 text-lg">
                WELCOME <b className="text-sm">{}</b>
              </p>
              <div className="block md:flex justify-between pt-5 py-2">
                <section className="w-full md:w-[30%] shadow-xl rounded-sm text-white bg-[#383f68] flex  items-center h-20 md:h-[25vh] pl-5 font-bold">
                  <p>
                    <BiMoney className="md:w-14 md:h-14 w-7 h-7" />
                  </p>
                  <div className="md:mt-0 mt-5 md:ml-2">
                    <p className="md:text-xl text-[15px] md:ml-0 ml-2 flex items-center gap-2">
                      USD <a>0</a>
                    </p>
                    <p className="text-sm text-gray-500">ACCOUNT BALANCE</p>
                  </div>
                </section>

                <section className="w-full md:w-[30%] shadow-xl rounded-sm text-white bg-[#383f68]  flex items-center h-20 md:h-[25vh] pl-5 mt-2 md:mt-0 font-bold">
                  <p>
                    <BsJournalArrowUp className="md:w-14 md:h-14 w-7 h-7 " />
                  </p>
                  <div className="md:mt-0 mt-5 md:ml-2">
                    <p className="md:text-xl text-[15px] md:ml-0 ml-2">0</p>
                    <p className="text-sm text-gray-500">TOTAL ORDERS</p>
                  </div>
                </section>

                <section className="w-full md:w-[30%] shadow-xl rounded-sm text-white bg-[#383f68] flex  items-center h-20 md:h-[25vh] pl-5  mt-2 md:mt-0 font-bold">
                  <p>
                    <FaRegUserCircle className="md:w-14 md:h-14 w-7 h-7" />
                  </p>
                  <div className="md:mt-0 mt-5 md:ml-2">
                    <p className="md:text-xl text-[15px] md:ml-0 ml-2">
                      JUNIOR
                    </p>
                    <p className="text-sm text-gray-500">ACCOUNT STATUS</p>
                  </div>
                </section>
              </div>

              <div className=" mt-5">
                <section className="flex justify-between items-center">
                  <p className="font-bold md:text-4xl text-2xl">New Order</p>
                  <button className="bg-[#383f68] md:text-base text-sm px-3 py-2 md:px-5 md:py-2 text-white rounded-md">
                    New Order
                  </button>
                </section>
              </div>
              <div className="pb-3">
                <form className="bg-white text-gray-500 px-3 py-5 mt-3 rounded-sm">
                  <label htmlFor="" className="font-bold text-sm md:text-base ">
                    Category
                  </label>
                  <br />
                  <select
                    onChange={(event) => {
                      setSelected(event.target.value);
                    }}
                    name=""
                    id=""
                    className="border-gray-500 border-2  mb-3 w-full h-[3rem] rounded-md outline-none px-3"
                  >
                    {List.map((Lists) => {
                      return <option>{Lists}</option>;
                    })}
                  </select>
                  <br />

                  <label
                    htmlFor=""
                    className="font-bold text-sm md:text-base mb-2"
                  >
                    Service
                  </label>
                  <br />
                  {selected && (
                    <select
                      name=""
                      id=""
                      className="border-gray-500 border-2  mb-3 w-full h-[3rem] rounded-md outline-none px-3"
                    >
                      {items[selected].map((item) => {
                        return <option value="">{item}</option>;
                      })}
                    </select>
                  )}
                  <br />

                  <label
                    htmlFor=""
                    className="font-bold text-sm md:text-base mb-2"
                  >
                    Description
                  </label>
                  <br />
                  <input
                    readOnly
                    type=""
                    className="border-gray-500 border-2  mb-3 w-full h-[10rem] rounded-md outline-none px-3"
                  />
                  <br />

                  <label
                    htmlFor=""
                    className="font-bold text-sm md:text-base mb-2"
                  >
                    Project Description/Tempelate
                  </label>
                  <br />
                  <textarea
                    type=""
                    className="border-gray-500 border-2  mb-3 w-full h-[15rem] rounded-md outline-none p-3"
                  />
                  <br />

                  <div className="md:flex gap-2">
                    <section className="md:w-[50%]">
                      <label
                        htmlFor=""
                        className="font-bold text-sm md:text-base mb-2"
                      >
                        Project Link
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border-gray-500 border-2  mb-3 w-full h-[3rem] rounded-md outline-none px-3"
                      />
                    </section>

                    <section className="md:w-[50%]">
                      <label
                        htmlFor=""
                        className="font-bold text-sm md:text-base mb-2"
                      >
                        Quantity
                      </label>
                      <br />
                      <input
                        type="text"
                        className="border-gray-500 border-2  mb-1 w-full h-[3rem] rounded-md outline-none px-3"
                      />
                      <p className="text-[11px]  mb-3">Min: 1- Max: 500</p>
                    </section>
                  </div>

                  <div className="md:flex gap-2">
                    <section className="md:w-[50%]">
                      <label
                        htmlFor=""
                        className="flex font-bold text-sm md:text-base items-center gap-2"
                      >
                        Average time <TiInfo />
                      </label>

                      <input
                        readOnly
                        type="text"
                        className="border-gray-500 border-2  mb-3 w-full h-[3rem] rounded-md outline-none px-3"
                      />
                    </section>

                    <section className="md:w-[50%]">
                      <label
                        htmlFor=""
                        className="font-bold text-sm md:text-base"
                      >
                        Charge
                      </label>
                      <br />
                      <input
                        readOnly
                        type="text"
                        className="border-gray-500 border-2  mb-3 w-full h-[3rem] rounded-md outline-none px-3"
                      />
                    </section>
                  </div>

                  <button className="bg-[#383f68] text-white w-[7rem] md:w-[10rem] h-[3rem] rounded-lg">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </SideNav>
      </div>
    );
}

export default Dashboard