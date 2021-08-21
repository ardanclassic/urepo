import React, { useEffect, useState } from "react";
import RepoIcon from "../../public/assets/repo.png";
import styles from "./repo.module.scss";
import Image from "next/image";
import moment from "moment";
import axios from "axios";

const RepoCard = ({ id }) => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const base = "https://api.github.com";
    if (id) {
      axios(`${base}/users/${id}/repos`)
        .then((res) => {
          setRepos(res.data);
        })
        .catch((err) => {
          setRepos([]);
        });
    }
  }, [id]);

  if (repos.length > 0) {
    return (
      <div className={styles.repoBox}>
        {repos.map((repo) => {
          return (
            <a
              key={repo.id}
              target="_blank"
              rel="noreferrer"
              href={repo.html_url}
            >
              <div className={styles.repoCard}>
                <Image src={RepoIcon} alt="repository icon" />
                <div className={styles.inforepo}>
                  <div className={styles.name}>{repo.name}</div>
                  <div className={styles.created}>
                    {moment(repo.created_at).format("lll")}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
  return null;
};

export default RepoCard;
