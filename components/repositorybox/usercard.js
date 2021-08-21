import React, { useEffect, useState } from "react";
import styles from "./repo.module.scss";
import axios from "axios";

const UserCard = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const base = "https://api.github.com";
    axios(`${base}/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setUser();
      });
  }, [id]);

  if (user) {
    return (
      <div className={styles.usercard}>
        <div className={styles.avatar}>
          <img src={`${user.avatar_url}`} alt="user profile avatar" />
        </div>
        <div className={styles.description}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.location}>{user.location}</div>
          <div className={styles.visitme}>
            <a
              target="_blank"
              href={`https://github.com/${user.login}`}
              rel="noreferrer"
            >
              Visit Me!
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default UserCard;
