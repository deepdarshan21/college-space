import type { NextPage } from "next";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { ProfileContainer } from "@/containers/Profile";

const Profile: NextPage = () => {
    return (
        <Layout meta={<Meta title="Deepdarshan | College Space" />}>
            <ProfileContainer />
        </Layout>
    );
};

export default Profile;
