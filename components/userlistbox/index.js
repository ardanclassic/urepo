import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./userlist.module.scss";

const UserList = ({ data }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
    // console.log(data);
  }, [data]);

  if (users.length > 0) {
    return (
      <div className={styles.userbox}>
        {users.map((user) => {
          return (
            <Link key={user.id} href={`/repository/${user.login}`}>
              <div className={styles.item}>
                <div className={styles.imageUser}>
                  <img src={user.avatar_url} alt="avatar" />
                </div>
                <div className={styles.info}>
                  <div className="name">{user.login}</div>
                  <div className={styles.confirm}>See detail informations!</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  return null;
};

export default UserList;
