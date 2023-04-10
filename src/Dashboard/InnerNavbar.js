import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { RiFileInfoFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsJournalArrowUp } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { useState } from "react";
// import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const InnerNavbar = () => {

    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


        const [state, setState] = useState({
          left: false,
        });
    
        const toggleDrawer = (anchor, open) => (event) => {
          if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
          ) {
            return;
          }

          setState({ ...state, [anchor]: open });
        };

        const list = (anchor) => (
          <Box
            className="bg-[#383f68] h-full text-white"
            sx={{
              width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              <Link className="text-lg ml-2 text-yellow-400">
                <b>Investors Grain</b>
              </Link>

              <Link to="/Dashboard">
                <ListItem disablePadding className="mt-5">
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <HomeIcon />
                    </ListItemIcon>
                    Home
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/TelegramServices">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <TelegramIcon />
                    </ListItemIcon>
                    Telegram Services
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/DiscordServices">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <FaDiscord className="w-5 h-5 ml-1" />
                    </ListItemIcon>
                    Discord Services
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/Orders">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <BsJournalArrowUp className="w-5 h-5 ml-1" />
                    </ListItemIcon>
                    Orders
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/AddFunds">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <BiMoney className="w-5 h-5 ml-1" />
                    </ListItemIcon>
                    Add Funds
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/Services">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <RiFileInfoFill className="w-5 h-5 ml-1" />
                    </ListItemIcon>
                    Services
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link onClick={handleOpen}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountCircleIcon  className="w-5 h-5 ml-1" />
                    </ListItemIcon>
                    Profile
                    <ListItemText />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        );
  return (
    <>
      <nav className="w-full px-2 flex justify-between bg-[#383f68] text-white md:px-10 py-3 align-middle sticky top-0">
        <div className="flex items-center gap-2">
          <div>
            {["left"].map((anchor) => (
              <div key={anchor}>
                <GiHamburgerMenu
                  className="md:hidden w-7 h-7"
                  onClick={toggleDrawer(anchor, true)}
                />

                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>
            ))}
          </div>
          <Link to="/Dashboard" className="text-sm md:block hidden md:text-xl">
            <b>Investors Grain</b>
          </Link>
        </div>

        <Link
          to="/StartPage"
          className="text-lg md:hidden block md:text-xl mr-5"
        >
          <b>Investors Grain</b>
        </Link>

        <div className="  md:flex w-[60%] hidden md:w-[40%] justify-between items-center">
          <ul className=" text-sm  flex w-full justify-evenly items-center ">
            <Link to="/Orders">
              <li className="hover:text-yellow-400">Orders</li>
            </Link>

            <Link to="/AddFunds">
              <li className="hover:text-yellow-400">Add Funds</li>
            </Link>

            <Link to="/Services">
              <li className="hover:text-yellow-400">Services</li>
            </Link>
          </ul>
          <section className=" gap-3 hidden md:flex">
            <button className="bg-[#ff0000] text-white font-bold text-xs md:text-sm p-2 rounded-lg flex align-middle gap-1">
              <p>LogOut</p>
              <FiLogOut className="text-bold" />
            </button>
          </section>

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
      </nav>
    </>
  );
}

export default InnerNavbar