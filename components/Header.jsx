"use client";
import React from "react";
import styles from "./Header.module.scss";
import Button from "./Button";

const Header = () => {
  return (
    <header className={styles.header + " fixed"}>
      <div className="content align-center">
        <div className="row space-between">
          <div className="col-3">
            <a href="#hero" className={styles.logo}>
              <img src="/img/logo.svg" alt="ПК ТИСО" />
            </a>
          </div>
          <div className="col-6">
            <div className={styles.contacts}>
              <a href="tel:+74951087592">
                <img src="/icons/phone.svg" class="icon phone"></img>
                <b>МОСКВА:</b> +7 (495) 108-75-92
              </a>
              <a href="tel:+78123369095">
                <img src="/icons/phone.svg" class="icon phone"></img>
                <b>САНКТ-ПЕТЕРБУРГ:</b> +7 (812) 336-90-95
              </a>
            </div>
          </div>
          <div className="col-3 right">
            <Button outline>ПЕРЕЗВОНИТЕ МНЕ</Button>
          </div>
        </div>
      </div>
      <nav className={styles.nav + " screen"}>
        <div className="content">
          <div className="row">
            <a href="#tech" className="col-2">
              ТЕХНИКА
            </a>
            <a href="#advantages" className="col-2">
              ВЫГОДА
            </a>
            <a href="#tugs" className="col-2">
              БУКСИРЫ
            </a>
            <a href="#platforms" className="col-2">
              ТЕЛЕЖКИ
            </a>
            <a href="#kranes" className="col-2">
              КРАНЫ
            </a>
            <a href="#about" className="col-2">
              О КОМПАНИИ
            </a>
            <a href="#contacts" className="col-2">
              КОНТАКТЫ
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; // ⬅️ default-экспорт
