import React from "react";

import {WritePost} from "@/components/WritePost";

export const FeedContainer: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center mx-auto w-[100vw] md:w-[75vw] lg:w-[60vw]">
            <WritePost />
        </div>
    );
};
