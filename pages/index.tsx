import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Increment from "../components/increment";
import Decrement from "../components/decrement";
import { useSelector } from "react-redux/es/exports";

const Home: NextPage = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Increment />
      <Decrement />
      {count}
    </div>
  );
};

export default Home;
