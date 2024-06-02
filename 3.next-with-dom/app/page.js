"use client";
import React from "react";
import dynamic from "next/dynamic";

const Code = dynamic(() => import("./code"), {
  ssr: false,
});

const Home = () => {
  return <Code />;
};

export default Home;
