import React from 'react'
import SideNav from '../Dashboard/SideNav'

const AddFunds = () => {
  return (
    <div>
      <SideNav>
        <div className="p-5 md:p-10">
          <p className="md:text-2xl md:mb-7 mb-3 uppercase font-semibold md:ml-">
            Add Funds
          </p>

          <div className="md:flex gap-2">
            <section className="border-gra-500 border-2 md:w-[60%] p-3 shadow-md">
              <p className="md:text-xl uppercase mb-1 md:mb-3 font-semibold ">
                {" "}
                Payment Made in Crypto
              </p>
              <label htmlFor="">Payment Method</label> <br />
              <select className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"></select>
              <br />
              <label htmlFor="">Payment Address</label> <br />
              <input
                type="text"
                className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"
              />{" "}
              <br />
              <label htmlFor="">Amount</label> <br />
              <input
                type="text"
                className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem]"
              />
              <button className="bg-[rgb(56,63,104)] mt-2 md:mt-5 text-white px-5 py-2 md:px-10 rounded-md md:py-2 md:text-lg md:mb-0 mb-2">
                Pay
              </button>
            </section>

            <section className="border-2 mt-5 md:mt-0 text-sm md:w-[40%] p-3 shadow-md">
              <p className="mt-2">
                <span className="text-red-700 text-base font-bold">
                  IMPORTANT NOTE :{" "}
                </span>
                Pay exactly the amount you have imputed to pay, do not pay
                lesser or higher than the amount you have placed and please copy
                the exactly Blockchain wallet address.
              </p>

              <p className="mt-5">
                Payments are updated instantly but in some cases where it is
                taking too much time to update, kindly wait for 30minutes -
                1hours, it will be updated, if after 2hours and it has not been
                completed, kindly send a message to any of our Live Chat
                Supports.
              </p>
            </section>
          </div>
        </div>
      </SideNav>
    </div>
  );
}

export default AddFunds