import React from "react";
import heroImage from "../../assets/png/heroImage.png";
import { Button } from "@mui/material";
// Icons Import
import InfoIcon from "@mui/icons-material/Info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClassIcon from "@mui/icons-material/Class";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="header pt-20 pb-44 items-center flex flex-col-reverse md:flex-row min-h-screen bg-hero-bg bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full lg:w-10/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Edyos - Tagline of the Edyos will be here.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-8 flex flex-wrap">
                <div className="bg-gradient-to-br from-secondary1 to-secondary2 rounded hover:shadow-xl m-2">
                  <Button>
                    <p className="text-xl px-3.5 text-white">Get Started</p>
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-secondary1 to-secondary2 rounded hover:shadow-xl m-2">
                  <div className="bg-white m-0.5">
                    <Button>
                      <p className="text-xl px-4 text-secondary1">Know More</p>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="mt-40 sm:w-10/12 sm:mt-0" src={heroImage} alt="..." />
      </section>

      {/* Section 2*/}
      <section className="mt-48 md:mt-0 pt-10 pb-40 relative bg-gray-300">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-secondary1 w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <svg
                      className="absolute bottom-0 overflow-hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      version="1.1"
                      viewBox="0 0 2560 100"
                      x="0"
                      y="0"
                    >
                      <polygon
                        className="text-secondary1 fill-current"
                        points="2560 0 2560 100 0 100"
                      ></polygon>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Some text will come here.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary1">
                        <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Feature 1 Here
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary2">
                        <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Feature 2 Here
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary3">
                        <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Feature 3 Here
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary4">
                        <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Feature 4 Here
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mt-48 md:mt-0 pb-24 relative bg-white">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-24">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-secondary1">
                <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Some Text Will Come Here
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blueGray-500 bg-gray-300 uppercase last:mr-0 mr-2 mt-2">
                  Lorem
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150 flex items-center"
              >
                View All{" "}
                <ArrowForwardIcon
                  style={{ color: "#000", fontSize: "20px" }}
                  className="ml-1.5"
                />
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img alt="..." src={heroImage} className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mt-48 md:mt-0 pb-24 relative bg-gray-300">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-4">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a href="www.edyos.com">
                    <div className="bg-rose-500 shadow-lg rounded-lg text-center p-8">
                      <ClassIcon
                        className="text-rose-500 shadow-md rounded-full max-w-full mx-auto p-2 bg-white"
                        style={{ fontSize: "50px" }}
                      />

                      <p className="text-lg text-white mt-4 font-semibold">
                        Class Management
                      </p>
                    </div>
                  </a>
                  <a href="www.edyos.com">
                    <div className="bg-primary2 shadow-lg rounded-lg text-center p-8 mt-8">
                      <SchoolIcon
                        className="text-primary2 shadow-md rounded-full max-w-full mx-auto p-2 bg-white"
                        style={{ fontSize: "50px" }}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Student Management
                      </p>
                    </div>
                  </a>
                  <a href="www.edyos.com">
                    <div className="bg-primary4 shadow-lg rounded-lg text-center p-8 mt-8">
                      <AttachMoneyIcon
                        className="text-primary4 shadow-md rounded-full max-w-full mx-auto p-2 bg-white"
                        style={{ fontSize: "50px" }}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Finance Management
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a href="www.edyos.com">
                    <div className="bg-primary3 shadow-lg rounded-lg text-center p-8">
                      <CelebrationIcon
                        className="text-primary3 shadow-md rounded-full max-w-full mx-auto p-2 bg-white"
                        style={{ fontSize: "50px" }}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Activity Management
                      </p>
                    </div>
                  </a>
                  <a href="www.edyos.com">
                    <div className="bg-primary1 shadow-lg rounded-lg text-center p-8 mt-8">
                      <QuizIcon
                        className="text-primary1 shadow-md rounded-full max-w-full mx-auto p-2 bg-white"
                        style={{ fontSize: "50px" }}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Exam Management
                      </p>
                    </div>
                  </a>
                  <a href="www.edyos.com">
                    <div className="bg-orange-600 shadow-lg rounded-lg text-center py-8 px-6 mt-8">
                      <AssignmentIcon
                        className="text-orange-600 shadow-md rounded-full max-w-full mx-auto p-2 bg-white"
                        style={{ fontSize: "50px" }}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Assignment Management
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-secondary1">
                <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Some Heading Here
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor.
              </p>

              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150 flex items-center"
              >
                SignUp{" "}
                <ArrowForwardIcon
                  style={{ color: "#000", fontSize: "20px" }}
                  className="ml-1.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="mt-48 md:mt-0 pb-40 relative bg-white">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 pt-24">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-secondary1">
                  <InfoIcon style={{ color: "#fff", fontSize: "35px" }} />
                </div>
                <h3 className="text-3xl font-semibold">Some Heading Here</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Some List Text will Come Here.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Some List Text will Come Here.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Some List Text will Come Here.
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mt-48 md:mt-0 relative z-50 bg-transparent">
        <div className="container mx-auto w-10/12">
          <div className="justify-center text-center flex flex-wrap rounded-2xl shadow-lg -mt-10 -mb-10 px-5 py-5 bg-cta-bg">
            <div className="bg-white round opacity-80 p-6">
              <div className="w-full md:w-6/12 mx-auto">
                <h2 className="font-semibold text-4xl">
                  Call To Action Text Here
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <div className="mt-8 flex flex-wrap justify-center">
                  <div className="bg-gradient-to-br from-secondary1 to-secondary2 rounded hover:shadow-xl m-2">
                    <Button>
                      <p className="text-xl px-3.5 text-white">Sign Up</p>
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-secondary1 to-secondary2 rounded hover:shadow-xl m-2">
                    <div className="bg-white m-0.5">
                      <Button>
                        <p className="text-xl px-4 text-secondary1">
                          Contact Us
                        </p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
