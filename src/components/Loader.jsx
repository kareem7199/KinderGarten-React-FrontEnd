import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function Loader() {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full">
            <ClipLoader
                color={"#FFAA38"}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
