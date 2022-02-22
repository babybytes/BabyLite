import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {

  return (
    <div className=" flex w-full h-full">
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
    </div>
  );
}
