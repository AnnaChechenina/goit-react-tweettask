import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets.jsx"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
