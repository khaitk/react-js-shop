import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cafe from "./components/Cafe";
import Tea from "./components/Tea";

export default function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='cafe' element={<Cafe />} />
                    <Route path='tra' element={<Tea />} />
                </Route>
            </Routes>
        </div>
    );
}
