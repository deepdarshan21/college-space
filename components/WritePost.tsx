import { useState } from "react";
import { ImCross } from "react-icons/im";

import { Avatar } from "@/components/Avatar";
import { Popup } from "@/components/Popup";

export const WritePost = () => {
    const [popupState, setPopupState] = useState(false);
    const [writePost, setWritePost] = useState("");

    const handleWritePost = (evt: any) => {
        setWritePost(evt.target.value);
    };

    const handleOpenPopup = () => {
        setPopupState(true);
    };
    const handleClosePopup = () => {
        setPopupState(false);
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
                        <span className="text-[20px] font-semibold">{"Deepdarshan"}</span>
                    </div>
                    <textarea
                        className="w-full resize-none border-none shadow-none outline-none overflow-auto"
                        rows={8}
                        name="write-post"
                        placeholder="What do you want to talk about?"
                        value={writePost}
                        onChange={handleWritePost}
                    />
                </div>
                <div className="px-4 py-2 flex justify-between">
                    <span></span>{/* For tages */}
                    <button className="px-6 py-2 rounded-3xl bg-[#004182] text-white">Post</button>
                </div>
            </Popup>
        </div>
    );
};
