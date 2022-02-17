import Head from "next/head";
import Image from "next/image";
import PizzaList from "../components/PizzzaList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Order | Home </title>
        <meta
          name="description"
          content="The best shop in town for your pizza"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <PizzaList />
    </div>
  );
}
