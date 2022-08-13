import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { Avatar } from "@/components/Avatar";
import { Article } from "@/components/Article";
import { FETCH_USER_INFO, FETCH_POSTS_OF_A_USER } from "@/utils/graphql";

export const ProfileContainer: React.FC<{}> = () => {
    const router = useRouter();
    const username = router.query.username;
    const [userInfo, setUserInfo] = useState<{
        name: String;
        surname: String;
        createdAt: String;
        updatedAt: String;
        username: String;
        email: String;
        branch: String;
        dateOfBirth: String;
        bio: String;
        about: String;
        role: String;
        year: String;
        interest: String;
        achivement: String;
        clubs: String;
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

    useEffect(() => {
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
                setLoading(false);
            };
            fetchData();
        } catch (err) {}
    }, [username]);

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
                <h4 className="text-[20px] font-semibold underline mb-6">Details</h4>
                <div>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Role:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.role}</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Branch:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.branch}</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Year:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.year}</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Clubs:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.clubs}</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Interest:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.interest}</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Achivements:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.achivement}</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">About:</h6>
                        <p className="flex-[7] md:flex-[4]">{userInfo.about}</p>
                    </span>
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
                            body={post.body}
                            likes={post.likes}
                            comments={post.comments}
                            username={post.username}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
