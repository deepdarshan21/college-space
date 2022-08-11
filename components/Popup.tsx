import React, { ReactNode } from "react";

type PopupProps = {
    open: boolean;
    close: Function;
    children: ReactNode;
};

export const Popup = (props: PopupProps) => {
    const handleClose = (evt: any) => {
        if (evt.target.id === "outer-container") props.close();
    };

    if (!props.open) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
            id="outer-container"
            onClick={handleClose}
        >
            <div className="bg-white p-2 rounded">{props.children}</div>
        </div>
    );
};
