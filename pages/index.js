import Head from "next/head";
import Image from "next/image";
import UserList from "../components/userlistbox";
import GithubIcon from "../public/assets/github.png";
import styles from "../styles/Home.module.scss";

export default function Home({ datausers }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Urepo</title>
        <meta name="description" content="simple git api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.headSection}>
        <Image src={GithubIcon} alt="repository icon" />
        <h1 style={{ color: "red", fontWeight: "600", letterSpacing: 5 }}>
          UREPO
        </h1>
        <h1> - Github API</h1>
      </div>
      <UserList data={datausers} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();
  return {
    props: {
      datausers: data,
    },
  };
}
