import type { NextPage } from "next";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { FeedContainer } from "@/containers/Feed";

const Feed: NextPage = () => {
    return (
        <Layout meta={<Meta title="Feed | College Space" />}>
            <FeedContainer />
        </Layout>
    );
};

export default Feed;
