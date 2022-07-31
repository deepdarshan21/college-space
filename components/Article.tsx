import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

import { Avatar } from "@/components/Avatar";

type ArticleProps = {};

export const Article = (props: ArticleProps) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="w-full bg-white p-4 space-y-4 my-2">
            <div className="flex space-x-4">
                <Avatar size={40} />
                <span className="flex flex-col justify-center">
                    <div className="text-[16px] font-semibold">{"Deepdarshan"}</div>
                    <div className="text-[14px] text-[#706666]">
                        {"Self motivated software developer"}
                    </div>
                </span>
            </div>
            <div className="text-left text-black">
                {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum et libero sed consectetur. Vestibulum at diam sem. Quisque dapibus, justo sit amet consectetur tincidunt, mi nisi maximus mi, sed rhoncus leo erat at mi. Pellentesque molestie vitae metus eu tempus. Etiam nec turpis at odio maximus bibendum. Sed pretium orci vitae volutpat ornare. Duis euismod metus id eros accumsan bibendum. Curabitur lectus justo, porttitor condimentum aliquet suscipit, convallis vitae nisl."
                }
            </div>
            <div>
                <div className="flex justify-between text-[#706666] text-sm  border-b-2">
                    <span>{"10"} likes</span>
                    <span>{"10"} comments</span>
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
