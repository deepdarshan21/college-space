import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { AuthInput } from "@/components/AuthInput";

export const Register: React.FC<{}> = () => {
    const [loginInput, setLoginInput] = useState<{
        name: String;
        surname: String;
        email: string;
        username: string;
        password: string;
        confirmPassword: String;
    }>({
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (evt: any) => {
        setLoginInput({ ...loginInput, [evt.target.name]: evt.target.value });
    };

    return (
        <div className="w-full h-max absolute top-0 bg-[#F3F2EF]">
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
                    <a href="/" className="flex items-center">
                        <h2 className="self-center text-[24px] md:text-[32px] font-bold whitespace-nowrap">
                            College Space
                        </h2>
                    </a>
                </div>
            </nav>

            <section className="mx-10 mt-[50px] relative w-fit mb-8 overflow-hidden bg-palette-main ">
                <div className="container grid !px-0 md:grid-cols-5">
                    <div className="md:col-span-3">
                        {/* <div className="absolute inset-0 md:left-[40%] bg-common-gray" /> */}
                        <span className="hidden md:inline-block relative h-[calc(100vh-200px)] w-full">
                            <Image
                                src={require("@/images/login.png")}
                                alt="Students"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="10% 10%"
                            />
                        </span>
                        <span className="inline-block md:hidden relative max-h-[calc(100vh-200px)] w-full">
                            <Image src={require("@/images/login.png")} alt="Students" />
                        </span>
                    </div>

                    <div className="relative z-50 grid items-center w-full h-full md:px-8 pb-4 md:col-span-2 text-common-dark">
                        <div className="max-w-md">
                            <header>
                                <h1
                                    id="main"
                                    className="mt-4 text-2xl font-semibold leading-tight cursor-default md:text-3xl lg:text-5xl"
                                >
                                    Create new account
                                </h1>

                                <h4 className="mt-4 text-base md:text-base">
                                    To get connected with your peers, please signup into your
                                    account 🤩
                                </h4>
                            </header>

                            <div className="flex w-full mx-auto mt-8">
                                <form className="w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                        <AuthInput
                                            icon={<AiOutlineUser size={24} />}
                                            label="Name"
                                            type="text"
                                            name="name"
                                            isRequired
                                            value={loginInput.name}
                                            onChange={handleInputChange}
                                        />
                                        <AuthInput
                                            icon={<AiOutlineUser size={24} />}
                                            label="Surname"
                                            type="text"
                                            name="surname"
                                            value={loginInput.surname}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <AuthInput
                                        icon={<AiOutlineMail size={24} />}
                                        label="Email address"
                                        type="email"
                                        name="email"
                                        isRequired
                                        value={loginInput.email}
                                        onChange={handleInputChange}
                                    />
                                    <AuthInput
                                        icon={<AiOutlineUser size={24} />}
                                        label="Username"
                                        type="text"
                                        name="username"
                                        isRequired
                                        value={loginInput.username}
                                        onChange={handleInputChange}
                                    />
                                    <AuthInput
                                        icon={<AiOutlineLock size={24} />}
                                        label="Password"
                                        type="password"
                                        name="password"
                                        isRequired
                                        value={loginInput.password}
                                        onChange={handleInputChange}
                                    />
                                    <AuthInput
                                        icon={<AiOutlineLock size={24} />}
                                        label="Confirm Password"
                                        type="password"
                                        name="confirmPassword"
                                        isRequired
                                        value={loginInput.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                    <div className="flex flex-wrap gap-8">
                                        <button className="grid px-4 py-3 font-semibold text-white rounded-md bg-blue-600 place-items-center text-palette-main">
                                            Register Now
                                        </button>
                                        <Link href="/contact-us" passHref>
                                            <a className="grid px-4 py-3 font-semibold text-black rounded-md bg-white place-items-center text-palette-main">
                                                Already have a account
                                            </a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};