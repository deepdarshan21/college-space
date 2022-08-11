import React, { useEffect, useState } from "react";
import axios from "axios";

import { WritePost } from "@/components/WritePost";
import { Article } from "@/components/Article";
import { FETCH_POSTS_QUERY } from "@/utils/graphql";
// import { ProfilePageJsonLd } from "next-seo";

export const FeedContainer: React.FC<{}> = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.post("http://localhost:3800/graphql", {
                query: FETCH_POSTS_QUERY,
            });
            const result = res.data;
            if (result.data) {
                setPosts(result.data.getPosts);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="flex flex-col items-center mx-auto w-[100vw] md:w-[75vw] lg:w-[60vw]">
            <WritePost />
            <br />
            {loading ? (
                <h1>Loading posts..</h1>
            ) : (
                posts && posts.map((post, index) => <Article key={index} body={post.body} />)
            )}
        </div>
    );
};
