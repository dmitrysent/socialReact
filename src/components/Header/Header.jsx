import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://img2.freepng.ru/20180327/seq/kisspng-logo-clip-art-new-5aba593592d951.0261094115221619736015.jpg"
        alt="логотип сайта"
      />
    </header>
  );
};

export default Header;
