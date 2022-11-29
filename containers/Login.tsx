import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import { AuthInput } from "@/components/AuthInput";
import { LOGIN_USER } from "@/utils/graphql";

export const Login: React.FC<{}> = () => {
    const router = useRouter();
    useEffect(() => {
        const userToken = Cookies.get("token");
        if (userToken) router.push("/feed");
    }, [router]);

    const [loginInput, setLoginInput] = useState<{
        email: string;
        username: string;
        password: string;
    }>({
        email: "",
        username: "",
        password: "",
    });

    const [loginWith, setLoginWith] = useState("Email");

    const handleLoginWith = () => {
        loginWith === "Email" ? setLoginWith("Username") : setLoginWith("Email");
    };

    const handleInputChange = (evt: any) => {
        setLoginInput({ ...loginInput, [evt.target.name]: evt.target.value });
    };

    const handleLogin = async (evt: any) => {
        evt.preventDefault();

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                query: LOGIN_USER(loginInput),
            });
            const userData = res?.data?.data?.login;
            Cookies.set("username", userData.username, { expires: 7 });
            Cookies.set("name", userData.name, { expires: 7 });
            Cookies.set("token", userData.token, { expires: 7 });
            alert("Successfully logged in");
            router.push(`/feed`);
        } catch (err: any) {
            const result = err.response.data;

            if (result.errors) {
                alert(result.errors[0].message);
                return;
            }
        }
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
                                    Welcome back :)
                                </h1>

                                <h4 className="mt-4 text-base md:text-base">
                                    To keep connected with your peers, please login with your
                                    personal infomation by email/username and password🔔
                                </h4>
                            </header>

                            <div className="flex w-full mx-auto mt-8">
                                <form className="w-full" onSubmit={handleLogin}>
                                    <div
                                        className="rounded-md shadow-sm w-full grid grid-cols-2 mb-4 bg-white text-black"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            onClick={handleLoginWith}
                                            className={`py-2 px-4 text-sm font-medium ${
                                                loginWith === "Email"
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-900"
                                            }  bg-transparent rounded-l-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
                                        >
                                            With Email
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleLoginWith}
                                            className={`py-2 px-4 text-sm font-medium ${
                                                loginWith === "Username"
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-900"
                                            }  bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white`}
                                        >
                                            With Username
                                        </button>
                                    </div>
                                    {loginWith === "Email" && (
                                        <AuthInput
                                            icon={<AiOutlineMail size={24} />}
                                            label="Email address"
                                            type="email"
                                            name="email"
                                            isRequired
                                            value={loginInput.email}
                                            onChange={handleInputChange}
                                        />
                                    )}
                                    {loginWith === "Username" && (
                                        <AuthInput
                                            icon={<AiOutlineUser size={24} />}
                                            label="Username"
                                            type="text"
                                            name="username"
                                            isRequired
                                            value={loginInput.username}
                                            onChange={handleInputChange}
                                        />
                                    )}
                                    <AuthInput
                                        icon={<AiOutlineLock size={24} />}
                                        label="Password"
                                        type="password"
                                        name="password"
                                        isRequired
                                        value={loginInput.password}
                                        onChange={handleInputChange}
                                    />
                                    <div className="flex flex-wrap gap-8">
                                        <button
                                            type="submit"
                                            className="grid px-4 py-3 font-semibold text-white rounded-md bg-blue-600 place-items-center text-palette-main"
                                        >
                                            Login Now
                                        </button>
                                        <Link href="/auth/register" passHref>
                                            <a className="grid px-4 py-3 font-semibold text-black rounded-md bg-white place-items-center text-palette-main">
                                                Create Account
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
