import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

import { WritePost } from "@/components/WritePost";
import { Article } from "@/components/Article";
import { FETCH_POSTS_QUERY } from "@/utils/graphql";
// import { ProfilePageJsonLd } from "next-seo";

export const FeedContainer: React.FC<{}> = () => {
    const router = useRouter();
    useEffect(() => {
        const userToken = Cookies.get("token");
        if (!userToken) router.push("/");
    }, [router]);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Array<any>>([]);
    const [newPost, setNewPost] = useState<Boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                query: FETCH_POSTS_QUERY(Cookies.get("username")),
            });
            const result = res.data;
            if (result.data) {
                setPosts(result.data.getPosts);
                setLoading(false);
            }
            setNewPost(false);
        };
        fetchData();
    }, [newPost]);
    return (
        <div className="flex flex-col items-center mx-auto w-[100vw] md:w-[75vw] lg:w-[60vw]">
            <WritePost name={Cookies.get("name")} setNewPost={setNewPost} />
            <br />
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
                        setNewPost={setNewPost}
                    />
                ))
            )}
        </div>
    );
};
