import Head from "next/head";
import Image from "next/image";
import Section3 from "../components/sections/section3";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useScroll } from "../m/useScroll";
import {
  headerAnimation,
  imageAnimation,
  fromDown,
  secondAnimation,
} from "../m/anim";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/section2";
import Section4 from "../components/sections/section4";
export default function Home() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" Home-content">
        {/* ----Section 1---- */}
        <div>
          <Section1 />
        </div>

        <div>
          <Section2 />
        </div>

        <div>
          <Section3 />
        </div>

        <div>
          <Section4 />
        </div>



      </div>
    </div>
  );
}
