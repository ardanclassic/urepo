import React from "react";
import RepoCard from "../../components/repositorybox/repocard";
import UserCard from "../../components/repositorybox/usercard";
import styles from "./repo.module.scss";

const Repository = ({ id }) => {
  return (
    <div className={styles.repoContainer}>
      <UserCard id={id} />
      <RepoCard id={id} />
    </div>
  );
};

export default Repository;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  return {
    props: { id },
  };
};
