"use client";
import React from "react";
import styles from "./style.module.css"; // Импортируем CSS-модуль

export const FG = () => {
  return (
    <section className={styles.fg}>
      <div className={`${styles.content} ${styles.row} ${styles.spread}`}>
        <div className={styles.row}>
          <a
            className={styles.button}
            href="https://www.behance.net/freakin_genious"
          >
            Работы на Behance
          </a>
          <a
            className={styles.button}
            href="https://chelyabinsk.hh.ru/resume/ab0330eaff0377fce00039ed1f747566503133"
          >
            Резюме на HeadHunter
          </a>
        </div>
        <div className={styles.row}>
          <a href="https://t.me/FreakinGenious" className={styles.social}>
            Telegram
          </a>
          <a href="mailto:isaev2893@yandex.ru" className={styles.social}>
            Email
          </a>
          <a className={styles.phone} href="tel:+79822796947">
            +7-982-279-69-47
          </a>
        </div>
      </div>
      <div className={styles.disclaimer}>
        <p>
          Данная страница не является полноценным многостраничным сайтом, а лишь демонстрацией
          навыков работы с React, HTML, CSS/SCSS и JS
        </p>
      </div>
    </section>
  );
};
