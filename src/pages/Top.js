import React, { useEffect, useState } from "react";

const Top = () => {
    const [status, setStatus] = useState("Checking connection...");

    useEffect(() => {
        fetch("/top")
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error("Failed to connect to the backend");
            })
            .then((message) => setStatus(message))
            .catch((error) => setStatus(error.message));
    }, []);

    return (
        <h1>aaa</h1>
    );
};

export default Top;
