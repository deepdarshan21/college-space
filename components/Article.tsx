import { useEffect, useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import axios from "axios";
import { FETCH_USER_INFO_FOR_POST } from "@/utils/graphql";

import { Avatar } from "@/components/Avatar";

type ArticleProps = {
    body: String;
    likes: Array<any>;
    comments: Array<any>;
    username: String;
};

export const Article = (props: ArticleProps) => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                query: FETCH_USER_INFO_FOR_POST(props.username),
            });
            const result = res.data.data;
            if (result) {
                setBio(result.getUserInfo.bio);
                setName(result.getUserInfo.name + " " + result.getUserInfo.surname);
            }
        };
        fetchData();
    }, [props.username]);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="w-full bg-white p-4 space-y-4 my-2">
            <div className="flex space-x-4">
                <Avatar size={40} />
                <span className="flex flex-col justify-center">
                    <div className="text-[16px] font-semibold">{name}</div>
                    {bio.length > 1 && <div className="text-[14px] text-[#706666]">{bio}</div>}
                </span>
            </div>
            <div className="text-left break-words ">
                <pre className="whitespace-pre-wrap">{props.body}</pre>
            </div>
            <div>
                <div className="flex justify-between text-[#706666] text-sm  border-b-2">
                    <span>{props.likes.length || "0"} likes</span>
                    <span>{props.comments.length || "0"} comments</span>
                </div>
                <div className="flex justify-between">
                    <span
                        className="flex items-center space-x-2 pt-2 select-none"
                        onClick={handleLike}
                    >
                        <span>
                            {liked ? <AiFillLike size={24} /> : <AiOutlineLike size={24} />}
                        </span>
                        <span>Like</span>
                    </span>
                    {/* Comments */}
                </div>
            </div>
        </div>
    );
};

Article.defaultProps = {
    likes: [],
    comments: [],
};
