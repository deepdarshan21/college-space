import React, { ReactNode } from "react";

import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";

type LayoutProps = {
    meta: ReactNode;
    children: ReactNode;
};

export const Layout = (props: LayoutProps) => (
    <div className="w-full min-h-screen pb-8 antialiased text-gray-700 bg-[#F3F2EF]">
        {props.meta}

        <Navbar />
        <div className="mx-auto">
            <div className="">{props.children}</div>
        </div>
        <Footer />
    </div>
);
