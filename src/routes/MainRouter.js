import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "../pages/Top.js";
import TestPage from "../pages/testpage.js";
const CreatePost = () => <div>Create a new post</div>;

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                {/* top画面 */}
                <Route path="/" element={<Top />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
