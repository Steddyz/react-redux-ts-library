import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav>
      <div className="elft">
        <img className="logo" src="" alt="logo" />
        <div>Поиск</div>
      </div>
      <div className="right">
        <ul>
          <li>Отложенные</li>
          <li>Корзина</li>
          <li>Войти</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
