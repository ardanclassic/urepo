import React from "react";
import Head from "next/head";
import Link from "next/link";
import RepoCard from "../../components/repositorybox/repocard";
import UserCard from "../../components/repositorybox/usercard";
import styles from "./repo.module.scss";

const Repository = ({ id }) => {
  return (
    <>
      <Head>
        <title>Urepo - Repository</title>
        <meta name="description" content={`${id} detail & repository`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.titleSection}>
        <h2 className={styles.pageTitle}>User Repository</h2>
        <Link href={`/`}>&#x3c; back to homepage</Link>
      </div>
      <div className={styles.repoContainer}>
        <UserCard id={id} />
        <RepoCard id={id} />
      </div>
    </>
  );
};

export default Repository;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  return {
    props: { id },
  };
};
