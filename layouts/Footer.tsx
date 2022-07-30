import React, { ReactNode } from "react";

import { AiFillHome, AiFillWechat, AiFillCaretDown } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";
import { Avatar } from "@/components/Avatar";

type FooterProps = {
    meta?: ReactNode;
    children?: ReactNode;
};

export const Footer = (props: FooterProps) => (
    <footer className="bg-white fixed bottom-0 text-center w-full lg:hidden">
        <ul className="flex flex-row justify-between px-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
                <a
                    href="#"
                    className="block py-2 pr-4 pl-3 bg-white rounded text-blue-700"
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
            {/* <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                    >
                        <span className="flex flex-col items-center">
                            <Avatar size={28} />
                            <span className="flex items-center">
                                Me <AiFillCaretDown />
                            </span>{" "}
                        </span>
                    </a>
                </li> */}
        </ul>
    </footer>
);
