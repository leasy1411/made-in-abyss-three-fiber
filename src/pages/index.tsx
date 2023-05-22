import Overlay from '@/components/overlay';
import Scene from '@components/scene';
import { useRef } from 'react';
import logo from "@public/logo.svg";
import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  // const overlay = useRef();
  // const scroll = useRef(0);
  return (
    <>
      <Head>
        <title>Made in Abyss</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Scene />
      {/* <Overlay ref={overlay} scroll={scroll} /> */}
      <div className="absolute top-0 left-0 overflow-y-auto w-full h-full m-0 p-0 select-none overflow-hidden svg-shadow">
        <Image style={{ height: "50vh", maxWidth: "80vw", marginTop: "25vh", marginLeft: "10vw" }} src={logo} alt="" />
      </div>
    </>
  )
}
