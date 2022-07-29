import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// import { AppConfig } from "../utils/AppConfig";

type MetaProps = {
    title: string;
    description?: string;
    canonical?: string;
};

const Meta = (props: MetaProps) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
                {/* <link
                    rel="apple-touch-icon"
                    href={`${router.basePath}/apple-touch-icon.png`}
                    key="apple"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={`${router.basePath}/favicon-32x32.png`}
                    key="icon32"
                /> */}
                {/* <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={`${router.basePath}/favicon-16x16.png`}
                    key="icon16"
                /> */}
                <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" />
                {/* <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                /> */}
            </Head>
            <NextSeo
                title={props.title}
                description={props.description}
                canonical={props.canonical}
                // openGraph={{
                //     title: props.title,
                //     description: props.description,
                //     url: props.canonical,
                //     locale: AppConfig.locale,
                //     site_name: AppConfig.site_name,
                //     images: [
                //         {
                //             url: "https://firebasestorage.googleapis.com/v0/b/fg-website-fa97f.appspot.com/o/OG%20Image%2Fbanner2.png?alt=media&token=2812fd31-15c6-46c7-99f4-d8625713fc4a",
                //             width: 1200,
                //             height: 630,
                //             alt: "Flutter Gurus",
                //         },
                //     ],
                // }}
            />
        </>
    );
};

export { Meta };

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    canonical: PropTypes.string,
};

Meta.defaultProps = {
    title: "College Space",
    description: "A social media site for SMVDU students and alumni",
};
