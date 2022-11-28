import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

import { Layout } from "@/layouts/Layout";
import { Meta } from "@/layouts/Meta";
import { ProfileContainer } from "@/containers/Profile";
import { FETCH_USER_NAME } from "@/utils/graphql";

const Profile: NextPage = () => {
    const router = useRouter();
    const [name, setName] = useState<String | undefined>("");
    useEffect(() => {
        const userToken = Cookies.get("token");
        try {
            const fetchData = async () => {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`, {
                    query: FETCH_USER_NAME(router.query.username),
                });

                setName(res.data.data.getUserInfo.name);
            };
            fetchData();
        } catch (err) {}
    }, [router.query.username]);

    return (
        <Layout meta={<Meta title={` ${name} | College Space`} />}>
            <ProfileContainer />
        </Layout>
    );
};

export default Profile;
