// @uthor Manas

import React, { useState } from "react";
import logo from "../../assets/png/edyosBlack.png";
// Icons Import
import Menu from "@mui/icons-material/Menu";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import InfoIcon from "@mui/icons-material/Info";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Button, IconButton } from "@mui/material";
import { style } from "@mui/system";

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : " shadow-lg bg-white") +
        " flex flex-wrap items-center justify-between px-2 py-1 fixed w-full z-50"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-0.5 whitespace-nowrap uppercase"
            }
            href="https://www.edyos.com"
          >
            <img src={logo} alt="Logo of Edyos" className="w-14 h-14" />
          </a>
          <div className="flex items-center">
            <div className="flex lg:hidden items-center">
              <div className="bg-gradient-to-br from-secondary1 to-secondary2 rounded hover:shadow-xl">
                <Button>
                  <p className="text-base px-2 text-white">LogIn</p>
                </Button>
              </div>
            </div>
            <div className="block lg:hidden ml-2">
              <Button className="" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Menu color="black" style={{ fontSize: "30px" }} />
              </Button>
            </div>
          </div>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mx-3"
                }
                href="www.edysos.com"
              >
                {" "}
                <ListOutlinedIcon
                  style={{ color: "#2BB7BA", fontSize: "20px" }}
                  className="mr-2"
                />
                Features
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mx-3"
                }
                href="www.edysos.com"
              >
                {" "}
                <InfoIcon
                  style={{ color: "#A8D157", fontSize: "20px" }}
                  className="mr-2"
                />
                About
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold mx-3"
                }
                href="www.edysos.com"
              >
                {" "}
                <ConnectWithoutContactIcon
                  style={{ color: "#EF473A", fontSize: "20px" }}
                  className="mr-2"
                />
                CONTACT US
              </a>
            </li>
          </ul>
          <div className="hidden lg:flex items-center">
            <div className="bg-gradient-to-br from-secondary1 to-secondary2 rounded hover:shadow-xl">
              <Button>
                <p className="text-base px-2 text-white">LogIn</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
