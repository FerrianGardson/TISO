"use client";
import React from "react";

export const News = () => {
  return (
    <section className="news-carousel">
      <div className="content">
        <div className="carousel" style={{ width: "100%" }}>
          <h2 className="title">Новинки</h2>
          <div className="position numbers">
            <button className="carousel-button left" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.766114 8.99996L8.84627 17.0801L10.0034 15.923L3.08028 8.99996L10.0034 2.07688L8.84627 0.919799L0.766114 8.99996Z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <div className="counter">
              <span className="current">1</span>
              <span>/</span>
              <span className="total">6</span>
            </div>
            <button className="carousel-button right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0034 8.99996L1.92326 17.0801L0.766174 15.923L7.68925 8.99996L0.766174 2.07688L1.92326 0.919799L10.0034 8.99996Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
          <div className="row">
            <div className="card">
              <img src="img/konfeta-1.png" alt="" />
              <div className="text">
                <p className="title">«Лержен»</p>
                <p className="subtitle">
                  Мультизлаковые конфеты со вкусом лесных ягод
                </p>
              </div>
              <a href="#" className="btn large">
                Подробнее
              </a>
            </div>
            <div className="card">
              <img src="img/konfeta-2.png" alt="" />
              <div className="text">
                <p className="title">«SWITINKI»</p>
                <p className="subtitle">
                  Мультизлаковые конфеты в тёмной глазури
                </p>
              </div>
              <a href="#" className="btn large">
                Подробнее
              </a>
            </div>
            <div className="card">
              <img src="img/konfeta-1.png" alt="" />
              <div className="text">
                <p className="title">«Лержен»</p>
                <p className="subtitle">
                  Мультизлаковые конфеты со вкусом лесных ягод
                </p>
              </div>
              <a href="#" className="btn large">
                Подробнее
              </a>
            </div>
            <div className="card">
              <img src="img/konfeta-2.png" alt="" />
              <div className="text">
                <p className="title">«SWITINKI»</p>
                <p className="subtitle">
                  Мультизлаковые конфеты в тёмной глазури
                </p>
              </div>
              <a href="#" className="btn large">
                Подробнее
              </a>
            </div>
            <div className="card">
              <img src="img/konfeta-1.png" alt="" />
              <div className="text">
                <p className="title">«Лержен»</p>
                <p className="subtitle">
                  Мультизлаковые конфеты со вкусом лесных ягод
                </p>
              </div>
              <a href="#" className="btn large">
                Подробнее
              </a>
            </div>
            <div className="card">
              <img src="img/konfeta-2.png" alt="" />
              <div className="text">
                <p className="title">«SWITINKI»</p>
                <p className="subtitle">
                  Мультизлаковые конфеты в тёмной глазури
                </p>
              </div>
              <a href="#" className="btn large">
                Подробнее
              </a>
            </div>
          </div>
          <div className="position bullets">
            <div className="bullet active"></div>
            <div className="bullet"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
