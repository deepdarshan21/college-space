import { useState } from "react";
import { ImCross } from "react-icons/im";
import Cookies from "js-cookie";
import axios from "axios";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { useRouter } from "next/router";

import { Avatar } from "@/components/Avatar";
import { Popup } from "@/components/Popup";
import { ADD_POST, GET_TOPICS } from "@/utils/graphql";

type WritePostProps = {
    name: string | undefined;
    setNewPost: any;
};

export const WritePost = (props: WritePostProps) => {
    const [popupState, setPopupState] = useState(false);
    const [writePost, setWritePost] = useState("");
    const [topics, setTopics] = useState([]);
    const [value, setvalue] = useState<any>([]);
    const router = useRouter();

    const handleWritePost = (evt: any) => {
        setWritePost(evt.target.value);
    };

    const handleOpenPopup = async () => {
        setPopupState(true);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
            query: GET_TOPICS(),
        });
        setTopics(res.data.data.getTopics);
    };
    const handleClosePopup = () => {
        setPopupState(false);
    };
    const handlePost = async () => {
        if (writePost.length === 0) {
            alert("Please write something before posting");
            return;
        }
        const config = {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        };

        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
            {
                query: ADD_POST({ body: writePost, topics: value.map((v: any) => `"${v}"`) }),
            },
            config
        );
        setWritePost("");
        props.setNewPost(true);
        // router.reload();
        handleClosePopup();
    };

    return (
        <div className="bg-white flex items-center px-4 py-2 w-full rounded-xl">
            <Avatar size={64} />
            <span
                className="ml-4 p-4 border border-[#ADADAD] text-[#ADADAD] rounded-3xl w-full"
                onClick={handleOpenPopup}
            >
                Start a post
            </span>
            <Popup open={popupState} close={handleClosePopup}>
                <div className="border-b-4 w-[100vw] md:w-[75vw] lg:w-[60vw] flex justify-between items-center px-4 py-2 text-2xl  ">
                    <span>Create a post</span>
                    <span className="p-1" onClick={handleClosePopup}>
                        <ImCross />{" "}
                    </span>
                </div>
                <div className="py-6 px-4 space-y-4">
                    <div className="flex space-x-8 items-center">
                        <Avatar size={44} />
                        <span className="text-[20px] font-semibold">{`${props.name}`}</span>
                    </div>
                    <textarea
                        className="w-full resize-none border-none shadow-none outline-none overflow-auto"
                        rows={8}
                        name="write-post"
                        placeholder="What do you want to talk about?"
                        value={writePost}
                        onChange={handleWritePost}
                        autoFocus
                    />
                </div>
                <div className="px-4 py-2 flex justify-between">
                    <span className="w-full pr-6">
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            options={topics.map((option) => option)}
                            onChange={(e, val) => {
                                e.preventDefault();
                                console.log(val);
                                setvalue(val);
                                console.log(value);

                                //one step behind
                            }}
                            freeSolo
                            renderTags={(value: readonly string[], getTagProps) =>
                                value.map((option: string, index: number) => {
                                    return (
                                        <Chip
                                            key={index}
                                            variant="outlined"
                                            label={option}
                                            {...getTagProps}
                                        />
                                    );
                                })
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="filled"
                                    label="Topics"
                                    fullWidth
                                    placeholder="Add topics to post for better reach..."
                                />
                            )}
                        />
                    </span>
                    {/* For tages */}
                    <button
                        className="px-6 py-2 rounded-3xl bg-[#004182] disabled:bg-[#6b9fd4] text-white"
                        disabled={!writePost.length}
                        onClick={handlePost}
                    >
                        Post
                    </button>
                </div>
            </Popup>
        </div>
    );
};
