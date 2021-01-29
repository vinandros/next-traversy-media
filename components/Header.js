import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      {/* <h1 className="title"> */}
      <h1 className={styles.title}>
        <span>WebDev</span> Newz
      </h1>
      <p className={styles.description}>
        Keep up to date with the lastest news
      </p>
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
