import React from 'react'
import { Link } from "react-router-dom";
import InnerNavbar from "../Dashboard/InnerNavbar";
import InnerbottomNav from './InnerbottomNav';
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const SideNav = ({ children }) => {
    
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

    
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


  return (
    <div>
      <InnerNavbar />
      <div className="md:flex hidden border-b-2">
        <div className=" md:py-7 h-screen fixed w-[25vw] border-r-2 border-[#383f68]  md:w-[20vw] tuyuu h  bg-[#] shadow-xl text-whit">
          <div className="flex items-center">
            <Link to="#">
              <AccountCircleIcon
                onClick={handleOpen}
                className="fixed left-[17.3%] top-[11%]"
              />
            </Link>
          </div>
          <ul className="md:text-lg px-2 w-[40%] md:w-full text-xs ">
            <Link to="/Dashboard">
              <li className="py-2 px-1 border-b-2 border-[#383f68] md:py-3 md:pl-5 hover:bg-[white]  hover:text-sm transition-all  md:hover:text-xl hover:text-[#383f68]  font-medium">
                Home
              </li>
            </Link>
            <Link to="/TelegramServices">
              <li className="py-2 px-1 md:py-3 border-b-2 border-[#383f68] md:pl-5 hover:bg-[white]  hover:text-sm transition-all  md:hover:text-xl hover:text-[#383f68]  font-medium">
                Telegram Services
              </li>
            </Link>
            <Link to="/DiscordServices">
              <li className="px-1 py-2 border-b-2 border-[#383f68] md:py-3 md:pl-5 hover:bg-[white]  hover:text-base transition-all md:hover:text-xl hover:text-[#383f68]  font-medium">
                Discord Services
              </li>
            </Link>
          </ul>
        </div>
        <div className="ml-[20%]">
          {children}

          <div className="px-5">
            <InnerbottomNav />
          </div>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  PROFILE
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <form>
                    <label htmlFor="">First name</label>
                    <br />
                    <input
                      type="text"
                      className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"
                    />{" "}
                    <label htmlFor="">Last name</label>
                    <br />
                    <input
                      type="text"
                      className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"
                    />{" "}
                    <label htmlFor="">Email</label>
                    <br />
                    <input
                      type="text"
                      className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"
                    />{" "}
                    <label htmlFor="">Password</label>
                    <br />
                    <input
                      type="text"
                      className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"
                    />{" "}
                    <label htmlFor="">New password</label>
                    <br />
                    <input
                      type="text"
                      className="border-gray-500 mb-2 border-2 outline-none rounded-md px-5 text-base w-[90%] md:w-[100%] md:h-[2.5rem] h-[2rem] md:mb-5"
                    />{" "}
                    <button className="bg-[rgb(56,63,104)] mt-2  text-white px-5 py-2 md:px-10 rounded-md md:py-2 md:text-lg md:mb-0 mb-2">
                      Save
                    </button>
                  </form>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <div className="md:hidden  block w-full bg-blue">
        <div>
          {/* <ul className="text-sm  flex justify-between text-white px-7 py-1">
            <Link to="/services">
              <li className="bg-[#383f68] rounded-sm px-3 py-2">
                Telegram Services
              </li>
            </Link>
            <Link to="/Discord">
              <li className="bg-[#383f68] rounded-sm px-3 py-2">
                Discord Services
              </li>
            </Link>
          </ul> */}
        </div>
        {children}
        <InnerbottomNav />
      </div>
    </div>
  );
};

export default SideNav