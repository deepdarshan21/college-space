import type { NextPage } from "next";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { Register } from "@/containers/Register";

const Home: NextPage = () => {
    return (
        <Layout
            meta={<Meta title="Register | College Space | SMVDU" />}
            displayNav={false}
            displayFooter={false}
        >
            <Register />
        </Layout>
    );
};

export default Home;
