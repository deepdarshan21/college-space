import type { NextPage } from "next";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";

const Home: NextPage = () => {
    return (
        <Layout meta={<Meta title="College Space | SMVDU" />}>
        </Layout>
    );
};

export default Home;
