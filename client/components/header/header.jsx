import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.nav}>
      <img src="src/assets/imagem_2023-10-27_104240154-removebg-preview.png" alt="logo" />     
      <h1>DevPet</h1>
      <p>LOJA</p>
      <p>CONTATO</p>
      <p>ATENDIMENTO</p>
      <p>ADOTAR</p>
      <input  type="text" id="buscar"/>
    </div>
  );
};

export default Header;
