import { useEffect, useState } from "react";
import axios from "axios";
import TimeAgo from "react-timeago";

import { FETCH_USER_INFO_FOR_POST } from "@/utils/graphql";
import { Avatar } from "@/components/Avatar";

type CommentProps = {
    body: String;
    username: String;
    createdAt: sring;
};

export const Comment = (props: CommentProps) => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

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

    return (
        <div className="px-2 py-4 flex space-x-4">
            <span className="pt-3">
                <Avatar size={36} />
            </span>
            <div className="bg-[#e7e4e4] px-4 py-2 w-full rounded-xl">
                <span className="flex justify-between ">
                    <span className="flex flex-col justify-center pb-3 ">
                        <div className="text-[16px] font-bold">{name}</div>
                        {bio.length > 1 && <div className="text-[14px] text-[#706666]">{bio}</div>}
                    </span>
                    <TimeAgo date={new Date(Number(props.createdAt))} />
                </span>
                <div className="text-left break-words ">
                    <pre className="whitespace-pre-wrap">{props.body}</pre>
                </div>
            </div>
        </div>
    );
};
