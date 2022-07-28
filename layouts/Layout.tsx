import React, { ReactNode } from "react";

// import { Footer } from "@/layout/Footer/Footer";
// import { Navbar } from "@/layout/Navbar/Navbar";

type LayoutProps = {
    meta: ReactNode;
    children: ReactNode;
};

export const Layout = (props: LayoutProps) => (
    <div className="w-full antialiased text-gray-700">
        {props.meta}

        {/* <Navbar /> */}
        <div className="flex flex-col min-h-screen mx-auto">
            <div className="flex flex-1">{props.children}</div>
        </div>
        {/* <Footer /> */}
    </div>
);
