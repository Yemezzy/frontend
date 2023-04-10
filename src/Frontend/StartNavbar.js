import React from 'react'
import { Link } from "react-router-dom";
import { FaTelegram, FaDiscord } from "react-icons/fa";

const StartNavbar = () => {
  return (
    <div>
      <div className="text-base md:text-lg px-5 flex font-bold p-1 justify-between w-full bg-[#383f68] items-center">
        <a href="/StartPage " className="text-white">
          Investors Grain
        </a>
        <ul className="flex gap-5 items-center mr-3 md:mr-7 ">
          <p className="hidden md:flex text-yellow-300">Contact us:</p>
          <li>
            <Link to="">
              <FaDiscord className="md:w-7 md:h-7 w-5 h-5 text-white" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaTelegram className="md:w-7 md:h-7 w-5 h-5 text-white" />
            </Link>
          </li>
        </ul>
      </div>

      <div className="">
        {/* <FiMenu className="md:hidden m-1  md:justify-end" /> */}

        <ul className="flex justify-center md:justify-end text-sm gap-10 p-1 font-bold md:pr-52">
          <Link to="/">
            <li>Sign in</li>
          </Link>
          <Link to="">
            <li>Services</li>
          </Link>
          <Link to="/Signup">
            <li>Sign up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default StartNavbar