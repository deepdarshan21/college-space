import Image from "next/image";
import { useEffect, useState } from "react";

type AvatarProp = {
    size: number;
    src?: string;
    userName?: string;
};

export const Avatar = (props: AvatarProp) => {
    const [size, setSize] = useState("28px");

    useEffect(() => {
        setSize(`${props.size}px`);
    }, [props.size]);

    return (
        <span className={`flex overflow-hidden rounded-full`} style={{ height: size, width: size }}>
            <Image
                src={require("@/images/sample-user.jpg")}
                alt={props.userName ? props.userName : "User"}
                // layout="fixed"
                objectFit="contain"
            />
        </span>
    );
};
