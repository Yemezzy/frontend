import React from 'react'
import { FaAngleRight, FaDiscord, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const InnerbottomNav = () => {
  return (
    <div>
      <div className="w-full md:flex text-white bg-[#383f68] px-5 py-10">
        <section className="md:w-[40%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzojXx1cOlHh5jgdUX8Lso1y2OhACXS1jWJQ&usqp=CAU"
            alt=""
          />
          <p className="md:w-[100%] my-5">
            Investors Grain is the Biggest Provider and also Premier Reseller
            Most of the Social Marketing Services on the Web. Our SEO & SMM
            Panel is something You need for your traffic on Community,
            Engagement, Investors, Profile, you will find it with most newest
            update here in getting more Investors.
          </p>

          <p className="font-semibold text-xl">Get Updates</p>
          <div className="w-full flex md:w-[100%] mt-3 h-[3rem] p-1  rounded-full border-2 border-white">
            <input
              placeholder="Enter Your Email Address"
              type="text"
              className="h-full outline-none border-none px-5 w-full bg-transparent"
            />
            <button
              type="submit"
              className="h-full flex justify-center items-center text-[#383f68] rounded-full w-[11%] bg-white"
            >
              <FaAngleRight className="" />
            </button>
          </div>
        </section>

        <section className="md:w-[25%] md:mt-0 mt-5 md:ml-5">
          <p className="font-semibold text-xl">Usefull Links</p>
          <ul>
            <a href="">
              <li className="mt-1 md:mt-3">Orders</li>
            </a>
            <a href="">
              <li className="mt-1 md:mt-3">Add Funds</li>
            </a>
            <a href="">
              <li className="mt-1 md:mt-3">About</li>
            </a>
            <a href="">
              <li className="mt-1 md:mt-3">LogOut</li>
            </a>
          </ul>
        </section>

        <section className="md:w-[25%] mt-5 md:mt-0 md:ml-5">
          <p className="font-semibold text-xl">Live Chat Support</p>
          <ul>
            <a href="">
              <li className="mt-1 md:mt-3 items-center gap-2 flex">
                <FaTelegram /> Telegram
              </li>
            </a>
            <a href="">
              <li className="mt-1 md:mt-3 items-center gap-2 flex">
                <HiOutlineMail /> Email
              </li>
            </a>
            <a href="">
              <li className="mt-1 md:mt-3 items-center gap-2 flex">
                <FaDiscord /> Discord
              </li>
            </a>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default InnerbottomNav