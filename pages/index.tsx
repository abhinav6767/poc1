import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "./Store";
import Navbar from "./navbar";
import Info from "./info";
import Homepage from "./homepage";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Head>
        <title>POC1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Homepage />
      <Info />
    </div>
  );
};

export default Home;
