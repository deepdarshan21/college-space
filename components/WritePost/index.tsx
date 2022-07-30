import { Avatar } from "../Avatar";

const WritePost = () => {
    return (
        <div className="bg-white flex items-center px-4 py-2 w-full">
            <Avatar size={64} />
            <input
                className="ml-4 p-4 border border-[#ADADAD] rounded-3xl w-full"
                placeholder="Start a post"
                // onClick={alert("hey")}
            />
        </div>
    );
};

export default WritePost;
