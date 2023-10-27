import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.master}>
      <footer className={styles.footer}>feito com 💖 por murilo</footer>
      <div className={styles.img}>
        <img src="../src/assets/osso.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
