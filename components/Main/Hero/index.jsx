"use client";
import React from 'react';

export const Hero = () => {
    return (<section className="hero">
        <div className="wrap-content">
          <div className="main">
            <div className="label"></div>
            <p className="subtitle">Кондитерская фабрика SHOKOLAT`E предлагает:</p>
            <h1 className="title">
              Импорт и&nbsp;продажа какао-продуктов на&nbsp;территории&nbsp;РФ,
              производство глазури, изготовление плиточного шоколада, шоколадных
              и&nbsp;мультизлаковых конфет
            </h1>
            <a href="#" className="btn large">Каталог</a>
          </div>
          <div className="row">
            <div className="testimonial">
              <p className="title">Контроль качества на всех этапах производства</p>
              <p className="description">
                Начиная от подбора ингредиентов и заканчивая упаковкой товара.
              </p>
            </div>
            <div className="testimonial">
              <p className="title">Работа под Собственной Торговой Маркой</p>
              <p className="description">
                Мы готовы помочь вам создать уникальные кондитерские изделия под
                вашим брендом
              </p>
            </div>
            <div className="testimonial center">
              <p className="title">Склады в 4 городах России</p>
              <p className="description">
                Логистические склады, расположенные в: г. Краснодар, г. Москва, г.
                Санкт - Петербург, г. Новосибирск
              </p>
            </div>
          </div>
        </div>
      </section>);
};
