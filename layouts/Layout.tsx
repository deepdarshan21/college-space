import React, { ReactNode } from "react";
import PropTypes from "prop-types";

import { Footer } from "@/layouts/Footer";
import { Navbar } from "@/layouts/Navbar";

type LayoutProps = {
    meta: ReactNode;
    children: ReactNode;
    displayNav?: boolean;
    displayFooter?: boolean;
};

export const Layout = (props: LayoutProps) => (
    <div className="w-full min-h-screen pb-8 antialiased text-gray-700 bg-[#F3F2EF]">
        {props.meta}

        {props.displayNav && <Navbar />}
        <div className="mt-[4rem] pt-8">
            <div className="">{props.children}</div>
        </div>
        {props.displayFooter && <Footer />}
    </div>
);

Layout.propTypes = {
    displayNav: PropTypes.string.isRequired,
    displayFooter: PropTypes.string.isRequired,
};

Layout.defaultProps = {
    displayNav: true,
    displayFooter: true,
};