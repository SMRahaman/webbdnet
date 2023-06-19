import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Dashboard_image/logo.png";
import user from "../../assets/Dashboard_image/user_image.jpg";
import { BsCartFill } from "react-icons/bs";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { AiFillSetting, AiFillBook, AiOutlineLogout } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { GiSelfLove } from "react-icons/gi";
import { LuHelpingHand } from "react-icons/lu";

const DashBoardHeader = () => {
  const menus = [
    {
      id: 1,
      name: "Fourm",
    },
    {
      id: 2,
      name: "Become a instructor",
    },
  ];
  return (
    <header className="bg-[#1A74E2] Z-100  lg:fixed lg: w-full lg: z-10">
      <div className=" flex h-16 max-w-screen-2xl items-center justify-between sm: mx-4 lg:px-16">
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link>
            <img src={logo} alt="" className="w-16" />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Global"
            className="hidden lg:flex lg:gap-4 lg:text-lg lg:tracking-wide "
          >
            <span className="dropdown dropdown-start">
              <div className="flex items-center ">
                <Link href="" className="text-white no-underline mr-1">
                  Pages
                </Link>
                <IoIosArrowDown className="text-white text-sm "></IoIosArrowDown>
              </div>
              <ul className="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-52 mt-4">
                <li>
                  <Link className="text-gray-500 no-underline">Blogs</Link>
                </li>
                <li>
                  <Link className="text-gray-500 no-underline">About</Link>
                </li>
                <li>
                  <Link className="text-gray-500 no-underline">Contact</Link>
                </li>
                <li>
                  <Link className="text-gray-500 no-underline">Support</Link>
                </li>
                <li>
                  <Link className="text-gray-500 no-underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 no-underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 no-underline">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </span>
            {menus.map((menu) => (
              <Link className="text-white no-underline" key={menu.id}>
                {menu.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="flex items-center  ">
              <span className="bg-[#6BD0FF] h-10 w-10 rounded-full me-3  hover:bg-white">
                <Link className="grid h-10 w-10 text-black text-2xl place-content-center border-b-4 border-transparent">
                  <BsCartFill></BsCartFill>
                </Link>
              </span>
              <span className="bg-[#6BD0FF] h-10 w-10 rounded-full me-3  hover:bg-white">
                <Link className="grid h-10 w-10 text-black text-2xl place-content-center border-b-4 border-transparent">
                  <IoIosNotifications></IoIosNotifications>
                </Link>
              </span>
              <span className=" bg-[#6BD0FF] h-10 w-10 rounded-full me-3 hover:bg-white">
                <Link className="grid h-10 w-10 text-black text-2xl place-content-center border-b-4 border-transparent">
                  <FaLanguage></FaLanguage>
                </Link>
              </span>
              <span className="dropdown dropdown-end">
                <Link className="grid text-2xl text-rose-50 place-content-center ">
                  <img src={user} alt="" className="rounded-full h-10 w-10 " />
                </Link>
                <ul className="p-4 shadow menu dropdown-content bg-base-100 rounded-box w-72 mt-2 ">
                  <li className="flex flex-col justify-center items-center">
                    <img
                      src={user}
                      alt=""
                      className="rounded-full h-12 w-12  p-0"
                    />
                    <div className="flex flex-col justify-center items-center ">
                      <h5 className="mb-0">Syed Marufur Rahman</h5>
                      <span>smrahaman1997@gmail.com</span>
                    </div>
                  </li>
                  <hr />
                  <li>
                    <Link className="text-gray-500 no-underline">
                      <AiFillBook className="text-2xl"></AiFillBook> Learning
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 no-underline">
                      <ImHeadphones className="text-2xl"></ImHeadphones>
                      Consultation
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 no-underline">
                      <GiSelfLove className="text-2xl"></GiSelfLove>Wishlist
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="text-gray-500 no-underline">
                      <AiFillSetting className="text-2xl"></AiFillSetting>
                      Profile Settings
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="text-gray-500 no-underline">
                      <LuHelpingHand className="text-2xl"></LuHelpingHand>Help
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 no-underline">
                      <AiOutlineLogout className="text-2xl"></AiOutlineLogout>
                      Logout
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;
