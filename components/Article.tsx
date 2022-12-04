import { useEffect, useState } from "react";
import { AiOutlineLike, AiFillLike, AiOutlineComment, AiFillDelete } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";

import {
    FETCH_USER_INFO_FOR_POST,
    LIKE_POST,
    COMMENT_POST,
    DELETE_POST,
    REPORT_POST,
} from "@/utils/graphql";
import { Avatar } from "@/components/Avatar";
import { Comment } from "@/components/Comment";

type ArticleProps = {
    postId: String;
    body: String;
    likes: Array<string>;
    comments: Array<any>;
    username: String;
    setNewPost: any;
};

export const Article = (props: ArticleProps) => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [liked, setLiked] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState("");
    const [noOfLikes, setNoOfLikes] = useState(props.likes.length);
    const [noOfComments, setNoOfComments] = useState(props.comments.length);

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
            const username = Cookies.get("username")!;
            if (username && props.likes.includes(username)) {
                setLiked(true);
            }
        };
        fetchData();
    }, [props.likes, props.username]);

    const handleLike = async () => {
        setLiked(!liked);
        if (liked) setNoOfLikes(noOfLikes - 1);
        else setNoOfLikes(noOfLikes + 1);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
            query: LIKE_POST({ postId: props.postId, username: Cookies.get("username") }),
        });
    };

    const handleCommentSection = async () => {
        setShowComment(!showComment);
    };

    const postComment = async () => {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
            query: COMMENT_POST({
                postId: props.postId,
                body: comment,
                username: Cookies.get("username"),
            }),
        });
        setComment("");
        setShowComment(false);
        setNoOfComments(noOfComments + 1);
        props.setNewPost(true);
    };

    const handleReportAndDelete = async () => {
        if (props.username == Cookies.get("username")) {
            if (confirm("Are you sure to delete the post")) {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                    query: DELETE_POST(props.postId),
                });
                alert(res.data.data.deletePost);
                props.setNewPost(true);
            }
        } else {
            if (confirm("Are you sure to report the post")) {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                    query: REPORT_POST({ postId: props.postId, username: Cookies.get("username") }),
                });
                alert(res.data.data.reportPost);
                props.setNewPost(true);
            }
        }
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
                    <span>{noOfLikes} likes</span>
                    <span>{noOfComments} comments</span>
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
                    <span
                        className="flex items-center space-x-2 pt-2 select-none"
                        onClick={handleCommentSection}
                    >
                        <span>
                            <AiOutlineComment size={24} />
                        </span>
                        <span>Comment</span>
                    </span>
                    <span
                        className="flex items-center space-x-2 pt-2 select-none"
                        onClick={handleReportAndDelete}
                    >
                        <span>
                            {props.username == Cookies.get("username") ? (
                                <AiFillDelete size={24} />
                            ) : (
                                <MdOutlineReportProblem size={24} />
                            )}
                        </span>
                        <span>
                            {props.username == Cookies.get("username") ? "Delete" : "Report"}
                        </span>
                    </span>
                </div>
            </div>
            {showComment && (
                <div>
                    <div className="bg-white flex justify-between items-center py-2 pb-8 w-full rounded-xl">
                        <Avatar size={40} />
                        <input
                            className="ml-4 p-2 border border-[#ADADAD] rounded-3xl w-10/12"
                            placeholder="Add a comment"
                            value={comment}
                            onChange={(evt: any) => setComment(evt.target.value)}
                        />
                        <button
                            className="px-5 py-1.5 rounded-3xl bg-[#004182] disabled:bg-[#6b9fd4] text-white"
                            disabled={!comment.length}
                            onClick={postComment}
                        >
                            Post
                        </button>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                        {props.comments &&
                            props.comments.map((comment, index) => (
                                <Comment
                                    key={index}
                                    body={comment.body}
                                    username={comment.username}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
};

Article.defaultProps = {
    likes: [],
    comments: [],
};
