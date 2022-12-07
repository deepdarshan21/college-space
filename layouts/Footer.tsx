import React, { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

import { AiFillHome, AiFillWechat, AiFillCaretDown } from "react-icons/ai";
import { GiOfficeChair } from "react-icons/gi";
import { BsBookFill } from "react-icons/bs";
import { Avatar } from "@/components/Avatar";

type FooterProps = {
    meta?: ReactNode;
    children?: ReactNode;
};

export const Footer = (props: FooterProps) => {
    const router = useRouter();
    const [dropdown, setDropdown] = useState(false);

    return (
        <footer className="bg-white fixed bottom-0 text-center w-full lg:hidden">
            <ul className="flex flex-row justify-evenly px-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                    <Link href="/feed" passHref>
                        <a className="flex flex-col items-center py-2 pr-4 pl-3 bg-white rounded text-blue-700">
                            <AiFillHome size={28} />
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <a
                        href="https://kalexamhai.github.io/"
                        target="_blank"
                        rel="noreferrer"
                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >
                        <span className="flex flex-col items-center">
                            <BsBookFill size={28} />
                            <span>Exams😨</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.levels.fyi/still-hiring/"
                        target="_blank"
                        rel="noreferrer"
                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >
                        <span className="flex flex-col items-center">
                            <GiOfficeChair size={28} />
                            <span>Jobs🤑</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setDropdown(!dropdown)}
                        className="z-1 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >
                        <span className="flex flex-col items-center">
                            <Avatar size={28} />
                            <span className="flex items-center">
                                Me <AiFillCaretDown />
                            </span>
                            {dropdown && (
                                <span className="z-100 absolute bottom-16 right-2 mt-2 py-2 w-32 text-center bg-white rounded-lg shadow-xl">
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
                        </span>
                    </a>
                </li>
            </ul>
        </footer>
    );
};
