import type { NextPage } from "next";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { Landing } from "@/containers/Landing";

const Home: NextPage = () => {
    return (
        <Layout meta={<Meta title="College Space | SMVDU" />}>
            <Landing />
        </Layout>
    );
};

export default Home;
