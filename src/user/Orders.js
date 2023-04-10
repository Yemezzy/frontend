import React from 'react'
import SideNav from '../Dashboard/SideNav'
import { Link } from 'react-router-dom';
import { FcCancel } from "react-icons/fc";

const Orders = () => {
  return (
    <div>
      <SideNav>
        <div className="p-5 md:p-10">
          <p className="md:text-2xl md:mb-7 mb-3 uppercase font-semibold md:ml-">
            Orders
          </p>
          <div className="border-b-2 border-black pb-5">
            <ul className="md:flex md:w-[80%] justify-between ">
              <section className="flex md:justify-between md:w-[55%] md:gap-0 gap-2 md:mb-0 mb-2">
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center px-2 py-1 md:py-2 rounded-full border-2 border-black ">
                    All
                  </li>
                </Link>
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center px-2 py-1 md:py-2 rounded-full border-2 border-black ">
                    Pending
                  </li>
                </Link>
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center px-2 py-1 md:py-2 rounded-full border-2 border-black ">
                    In Progess
                  </li>
                </Link>
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center px-2 py-1 md:py-2 rounded-full border-2 border-black ">
                    Completed
                  </li>
                </Link>
              </section>

              <section className="flex md:justify-between md:gap-0 gap-2 md:w-[42%] md:ml-0 ml-5">
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center py-1 px-2 md:py-2 rounded-full border-2 border-black ">
                    Partial
                  </li>
                </Link>
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center px-2 py-1 md:py-2 rounded-full border-2 border-black ">
                    Processing
                  </li>
                </Link>
                <Link to="">
                  <li className="md:px-4 flex justify-center items-center px-2 py-1 md:py-2 rounded-full border-2 border-black ">
                    Canceled
                  </li>
                </Link>
              </section>
            </ul>
          </div>

          <div className="m-7 grid items-center justify-center">
            <FcCancel className="ml-14 md:ml-24 h-28 w-28 md:w-36 md:h-36" />
            <h2 className="text-xl md:text-3xl text-center font-bold">
              You have no active orders
            </h2>
          </div>
        </div>
      </SideNav>
    </div>
  );
}

export default Orders