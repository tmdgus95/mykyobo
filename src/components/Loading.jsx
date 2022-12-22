import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

export const Loading = () => {
    return (
        <>
            <MoonLoader color="#36d7b7" size={300} speedMultiplier={1} />
        </>
    );
};

export default Loading;
