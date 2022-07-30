import Image from "next/image";

type AvatarProp = {
    size: number;
    src?: string;
    userName?: string;
};

export const Avatar = (props: AvatarProp) => (
    <span className={`flex w-[${props.size}px] h-[${props.size}px] rounded-full`}>
        <Image
            src={require("@/images/sample-user.jpg")}
            alt={props.userName ? props.userName : "User"}
            // layout="fixed"
            objectFit="contain"
        />
    </span>
);
