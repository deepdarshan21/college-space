import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillHome, AiFillWechat, AiFillCaretDown } from "react-icons/ai";
import { BsBookFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

import Image from "next/image";
import { Avatar } from "@/components/Avatar";
import { SEARCH_USER } from "@/utils/graphql";

export const Navbar = () => {
    const router = useRouter();
    const [dropdown, setDropdown] = useState(false);
    const [value, setValue] = useState("");
    const [optionsOne, setOptionsOne] = useState<any[]>([]);

    const onChangeOne = async (e: any) => {
        setValue(e.target.value);
        if (value) {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                query: SEARCH_USER(e.target.value),
            });
            setOptionsOne(res.data.data.searchUser);
        }
    };

    return (
        <nav className="bg-white px-6 sm:px-20 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <span className="flex items-center">
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
                    </span>
                </Link>

                <Autocomplete
                    freeSolo
                    filterOptions={(x) => x}
                    onChange={(e: any) => {
                        setValue(e.target.innerText);
                        // console.log(value);
                        
                        router.push(`/user/${value}`);
                    }}
                    loading
                    // loadingText
                    options={optionsOne ? optionsOne.map((obj) => obj.username) : []}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <div className="flex relative" ref={params.InputProps.ref}>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <BiSearchAlt2 />
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input
                                {...params.inputProps}
                                type="text"
                                id="search-navbar"
                                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search..."
                                value={value}
                                onChange={(e) => onChangeOne(e)}
                            />
                        </div>
                    )}
                />

                <div
                    className="hidden justify-between items-center w-full lg:flex md:w-auto"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col px-4  mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link href="/feed" aria-current="page" passHref>
                                <a className="flex flex-col items-center py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0">
                                    <AiFillHome size={28} />
                                    <span>Home</span>
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            >
                                <span className="flex flex-col items-center">
                                    <AiFillWechat size={28} />
                                    <span>Chat</span>
                                </span>
                            </a>
                        </li> */}
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
                                className="block py-2 pr-4 pl-3 cursor-pointer text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
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

const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
        label: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
        label: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
    },
    {
        label: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
        label: "The Lord of the Rings: The Two Towers",
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
        label: "Star Wars: Episode IV - A New Hope",
        year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
        label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
        label: "Star Wars: Episode VI - Return of the Jedi",
        year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
        label: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
];
