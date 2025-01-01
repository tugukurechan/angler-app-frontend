import React, { useEffect, useState } from "react";
import MainLayout from '../layouts/MainLayout';

const TestPage = () => {
    const [status, setStatus] = useState("Checking connection...");    
    useEffect(() => {
        fetch("http://localhost:8080/test")
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error("Failed to connect to the backend");
            })
            .then((message) => setStatus(message))
            .catch((error) => setStatus(`接続エラー： ${error.message}`));
    }, []);
    return (
    <MainLayout>
      <h1>ようこそ</h1>
      <p>釣りに関するブログサイトです</p>
    </MainLayout>
  );
};

export default TestPage;
