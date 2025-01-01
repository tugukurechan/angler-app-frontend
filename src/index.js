import React from "react";
import ReactDOM from "react-dom/client"; // 修正ポイント: 'react-dom/client' をインポート
import MainRouter from "./routes/MainRouter";

// MainRouterを通すことを宣言
const root = ReactDOM.createRoot(document.getElementById("root")); // 修正ポイント: createRoot を使用
root.render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>
);
