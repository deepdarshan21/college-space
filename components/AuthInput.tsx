import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type AuthInputProps = {
    icon?: JSX.Element;
    showPassword?: boolean;
    label: String;
    type?: String | any;
    name: String | any;
    isRequired?: Boolean | any;
    value?: String | any;
    onChange: any;
    otherProps?: any;
};

export const AuthInput = (props: AuthInputProps) => {
    const handleChange = (event: any, ...args: any) => {
        props.onChange(event, ...args);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState(props.type);

    const handleShowPassword = (evt: any, ...args: any) => {
        setShowPassword(!showPassword);
        if (showPassword) {
            setType("password");
        } else {
            setType("text");
        }
    };

    return (
        <div className="relative z-0 mb-5 w-full bg-white rounded-xl">
            {props.icon && (
                <div className="flex absolute inset-y-0 left-0 text-gray-500 items-center pl-3 pointer-events-none">
                    {props.icon}
                </div>
            )}
            {props.showPassword && (
                <div
                    className="flex absolute inset-y-0 right-0 text-gray-500 items-center pl-3 pointer-events-auto"
                    onClick={handleShowPassword}
                >
                    {showPassword ? <AiFillEyeInvisible size={18} /> : <AiFillEye size={18} />}
                </div>
            )}
            <input
                type={type}
                name={props.name}
                id={props.name}
                className="bg-transparent text-gray-900 text-sm rounded-lg  block w-full pl-12 py-2.5 pt-5 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required={props.isRequired}
                value={props.value}
                onChange={handleChange}
                {...props.otherProps}
            />
            <label
                htmlFor={props.name}
                className=" ml-12 py-2.5 pt-3 peer-focus:font-normal absolute text-ml text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {props.label}
            </label>
        </div>
    );
};

AuthInput.defaultProps = {
    type: "text",
    isRequired: false,
    value: "",
};
