import { Button, TextField, Box, CircularProgress } from "@mui/material";
import StartNavbar from '../Frontend/StartNavbar'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { FaRegIdBadge } from "react-icons/fa";
import BottomNav from "../Frontend/BottomNav";

const Signup = () => {
     const navigate = useNavigate();
     const [firstname, setFirstname] = useState("");
     const [lastname, setLastname] = useState("");
     const [email, setEmail] = useState("");
     const [password, setpassword] = useState("");
     const [confirmpassword, setconfirmpassword] = useState("");
     const handleSubmit = async (event) => {
       event.preventDefault();
       try {
         const data = {
           firstname,
           lastname,
           email,
           repeat_password: confirmpassword,
           password,
         };

         const resp = await axios.post(
           "http://localhost:8100/user/create-account",
           data
         );
         console.log(resp);
         if (resp.status === 200) {
           toast.success(resp.data.message, {
             position: "top-right",
             autoClose: 100,
             hideProgressBar: true,
             closeOnClick: false,
             pauseOnHover: false,
             draggable: false,
             progress: undefined,
             theme: "light",
           });
           navigate("/verify");
         }
       } catch (error) {
         console.log(error);
         toast.error(error.response.data.message, {
           position: "top-right",
           autoClose: 100,
           hideProgressBar: true,
           closeOnClick: false,
           pauseOnHover: false,
           draggable: false,
           progress: undefined,
           theme: "light",
         });
       }
     };
  return (
    <div>
      <StartNavbar />
      <div className="p-3">
        <form
          className="md:w-7/12 shadow-xl py-5 md:py-0 p-2 m-auto md:pt-7"
          onSubmit={handleSubmit}
        >
          <Box className=" bg-white p-4">
            <p className="text-[#383f68] font-bold uppercase text-xl md:text-3xl">
              CREATE AN ACCOUNT
            </p>

            <TextField
              id="standard-basic"
              margin="dense"
              label="First Name"
              variant="standard"
              className="block w-full"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />

            <TextField
              id="standard-basic"
              margin="dense"
              label="Last Name"
              variant="standard"
              className="block w-full"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className="block w-full"
              margin="dense"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              className="block w-full"
              margin="dense"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Re-enter Password"
              variant="standard"
              className="block w-full"
              margin="dense"
              value={confirmpassword}
              onChange={(event) => setconfirmpassword(event.target.value)}
            />
            <div className="block md:flex item-center justify-between mt-4">
              <Button
                variant="contained"
                type="submit"
                className="mt-7"
                color="secondary"
                startIcon={<FaRegIdBadge />}
              >
                Register
              </Button>
              <span className="flex mt-5  md:mt-0 gap-2 items-center ">
                <p>Already have an account</p>
                <Link
                  to="/"
                  className="font-bold text-chat underline hover:no-underline"
                >
                  Login
                </Link>
              </span>
            </div>
          </Box>
        </form>
      </div>
      <BottomNav />
      <ToastContainer />
    </div>
  );
}

export default Signup