import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome, AiFillWechat, AiFillCaretDown } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

import Image from "next/image";
import { Avatar } from "@/components/Avatar";

export const Navbar = () => {
    const router = useRouter();
    const [dropdown, setDropdown] = useState(false);

    return (
        <nav className="bg-white px-6 sm:px-20 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <span className="flex mr-3 self-center h-10 w-10 sm:h-9">
                        <Image
                            src={require("@/images/icon.png")}
                            alt="Flowbite Logo"
                            // layout="fill"
                            objectFit="contain"
                        />
                    </span>
                    <span className="self-center text-[22px]  hidden md:block font-bold whitespace-nowrap">
                        College Space
                    </span>
                </a>

                <div className="flex relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BiSearchAlt2 />
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search..."
                    />
                </div>

                <div
                    className="hidden justify-between items-center w-full lg:flex md:w-auto"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col px-4  mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                <span className="flex flex-col items-center">
                                    <AiFillHome size={28} />
                                    <span>Home</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                <span className="flex flex-col items-center">
                                    <AiFillWechat size={28} />
                                    <span>Chat</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                <span className="flex flex-col items-center">
                                    <BsBookFill size={28} />
                                    <span>Exams😨</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <div
                                onClick={() => setDropdown(!dropdown)}
                                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                <div className="flex flex-col items-center">
                                    <Avatar size={28} />
                                    <span className="flex items-center">
                                        Me <AiFillCaretDown />
                                    </span>
                                    {dropdown && (
                                        <span className="absolute top-16 mt-2 py-2 w-32 text-center bg-white rounded-lg shadow-xl">
                                            <button
                                                onClick={() =>
                                                    router.push(`/user/${Cookies.get("username")}`)
                                                }
                                                className="w-full block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                            >
                                                View Profile
                                            </button>
                                            <button
                                                onClick={() => {
                                                    Cookies.remove("name", { path: "" });
                                                    Cookies.remove("username", { path: "" });
                                                    Cookies.remove("token", { path: "" });
                                                    router.reload();
                                                }}
                                                className="w-full block px-4 py-2 text-red-800 hover:bg-red-500 hover:text-white"
                                            >
                                                Logout
                                            </button>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
