import React from "react";

import { Avatar } from "@/components/Avatar";
import { Article } from "@/components/Article";

export const ProfileContainer: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center mx-auto w-[100vw] md:w-[75vw] lg:w-[60vw] space-y-8">
            <div className="flex items-center w-full md:w-max justify-evenly md:space-x-10 mx-6">
                <Avatar size={120} />
                <div>
                    <h2 className="text-[2.250rem] font-bold">Deepdarshan</h2>
                    <p className="text-[1rem]">Software Developer</p>
                </div>
            </div>
            <div className="w-full bg-white px-6 py-4 rounded-xl">
                <h4 className="text-[20px] font-semibold underline mb-6">Details</h4>
                <div>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Role:</h6>
                        <p className="flex-[7] md:flex-[4]">Enrolled Student</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Branch:</h6>
                        <p className="flex-[7] md:flex-[4]">Computer Science and Engineering</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Year:</h6>
                        <p className="flex-[7] md:flex-[4]">First year</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Clubs:</h6>
                        <p className="flex-[7] md:flex-[4]">Code Club</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Interest:</h6>
                        <p className="flex-[7] md:flex-[4]">Gadgets</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">Achivements:</h6>
                        <p className="flex-[7] md:flex-[4]">Gadgets</p>
                    </span>
                    <span className="flex gap-2 md:gap-4">
                        <h6 className="flex-[3] md:flex-[1] font-medium">About:</h6>
                        <p className="flex-[7] md:flex-[4]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industrys standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled{" "}
                        </p>
                    </span>
                </div>
            </div>
            <div>
                {/* <Article /> */}
                {/* <Article /> */}
                {/* <Article /> */}
                {/* <Article /> */}
            </div>
        </div>
    );
};
