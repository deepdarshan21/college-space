import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { MdDoneAll } from "react-icons/md";
import Cookies from "js-cookie";

import { Avatar } from "@/components/Avatar";
import { Article } from "@/components/Article";
import { FETCH_USER_INFO, UPDATE_USER_INFO, FETCH_POSTS_OF_A_USER } from "@/utils/graphql";
import { ProfilePageJsonLd } from "next-seo";

export const ProfileContainer: React.FC<{}> = () => {
    const router = useRouter();
    const username = router.query.username;
    const [allowEdit, setAllowEdit] = useState<Boolean>(false);
    const [edit, setEdit] = useState<Boolean>(false);
    const [userInfo, setUserInfo] = useState<{
        name: string;
        surname: string;
        createdAt: string;
        updatedAt: string;
        username: string;
        email: string;
        branch: string;
        dateOfBirth: string;
        bio: string;
        about: string;
        role: string;
        year: string;
        interest: string;
        achivement: string;
        clubs: string;
    }>({
        name: "",
        surname: "",
        createdAt: "",
        updatedAt: "",
        username: "",
        email: "",
        branch: "",
        dateOfBirth: "",
        bio: "",
        about: "",
        role: "",
        year: "",
        interest: "",
        achivement: "",
        clubs: "",
    });
    const [posts, setPosts] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState<Boolean>(false);

    useEffect(() => {
        const userLoggedInUserName = Cookies.get("username");
        try {
            const fetchData = async () => {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                    query: FETCH_USER_INFO(username),
                });

                const postRes = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                    query: FETCH_POSTS_OF_A_USER(username),
                });

                setUserInfo(res.data.data.getUserInfo);
                setPosts(postRes.data.data.getPostsOfUser);
                setAllowEdit(userInfo.username == userLoggedInUserName);
                setLoading(false);
            };
            fetchData();
        } catch (err) {}
    }, [userInfo.username, username]);
    const handleInputChange = (evt: any) => {
        setUserInfo({ ...userInfo, [evt.target.name]: evt.target.value });
    };

    const handleClick = async () => {
        if (edit) {
            const config = {
                headers: { Authorization: `Bearer ${Cookies.get("token")}` },
            };
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
                {
                    query: UPDATE_USER_INFO(userInfo),
                },
                config
            );
        }
        setEdit(!edit);
    };

    return (
        <div className="flex flex-col items-center mx-auto w-[100vw] md:w-[75vw] lg:w-[60vw] space-y-8">
            <div className="flex items-center w-full md:w-max justify-evenly md:space-x-10 mx-6">
                <Avatar size={120} />
                <div>
                    <h2 className="text-[2.250rem] font-bold">{`${userInfo.name} ${userInfo.surname}`}</h2>
                    <p className="text-[1rem]">{userInfo.bio}</p>
                </div>
            </div>
            <div className="w-full bg-white px-6 py-4 rounded-xl">
                <div className="flex justify-between">
                    <h4 className="text-[20px] font-semibold underline mb-6">Details</h4>
                    {allowEdit && (
                        <div onClick={handleClick}>
                            {!edit && (
                                <span>
                                    <BiEdit />
                                </span>
                            )}
                            {edit && (
                                <span>
                                    <MdDoneAll />
                                </span>
                            )}
                        </div>
                    )}
                </div>
                <div>
                    {(userInfo.role.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">Role:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.role}</p>}
                            {edit && (
                                <select
                                    name="role"
                                    value={userInfo.role}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                >
                                    <option value="Student">Student</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="College Passout">College Passout</option>
                                    <option value="Staff Member">Staff Member</option>
                                </select>
                            )}
                        </span>
                    )}
                    {(userInfo.branch.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">Branch:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.branch}</p>}
                            {edit && (
                                <input
                                    type="text"
                                    name="branch"
                                    value={userInfo.branch}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                />
                            )}
                        </span>
                    )}
                    {(userInfo.year.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">Year:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.year}</p>}
                            {edit && (
                                <input
                                    type="text"
                                    name="year"
                                    value={userInfo.year}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                />
                            )}
                        </span>
                    )}
                    {(userInfo.clubs.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">Clubs:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.clubs}</p>}
                            {edit && (
                                <input
                                    type="text"
                                    name="clubs"
                                    value={userInfo.clubs}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                />
                            )}
                        </span>
                    )}
                    {(userInfo.interest.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">Interest:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.interest}</p>}
                            {edit && (
                                <input
                                    type="text"
                                    name="interest"
                                    value={userInfo.interest}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                />
                            )}
                        </span>
                    )}
                    {(userInfo.achivement.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">Achivements:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.achivement}</p>}
                            {edit && (
                                <input
                                    type="text"
                                    name="achivement"
                                    value={userInfo.achivement}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                />
                            )}
                        </span>
                    )}
                    {(userInfo.about.length > 0 || edit) && (
                        <span className="flex gap-2 md:gap-4">
                            <h6 className="flex-[3] md:flex-[1] font-medium">About:</h6>
                            {!edit && <p className="flex-[7] md:flex-[4]">{userInfo.about}</p>}
                            {edit && (
                                <input
                                    type="text"
                                    name="about"
                                    value={userInfo.about}
                                    onChange={handleInputChange}
                                    className="flex-[7] md:flex-[4]"
                                />
                            )}
                        </span>
                    )}
                </div>
            </div>
            <div className="w-full">
                <h4 className="text-[20px] font-semibold underline mb-6">Recent Posts</h4>
                {loading ? (
                    <h1>Loading posts..</h1>
                ) : (
                    posts &&
                    posts.map((post, index) => (
                        <Article
                            key={index}
                            postId={post._id}
                            body={post.body}
                            likes={post.likes}
                            comments={post.comments}
                            username={post.username}
                            createdAt={post.createdAt}
                            topics={post.topics}
                            setNewPost={setNewPost}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
