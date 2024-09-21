"use client";
import React from 'react';

export const Slider = () => {
    return (
        <section className="promotions">
            <div className="wrap-content">
                <div className="carousel cycled" style={{ width: "100%" }}>
                    <div className="row">
                        {/* Карточка 1 */}
                        <div className="card" style={{ background: "url(img/slide.jpg)" }}>
                            <div className="text">
                                <p className="label">сезонные предложения</p>
                                <p className="title">весенняя коллекция</p>
                                <p className="subtitle">
                                    Ежегодно мы предоставляем обновленную новогоднюю коллекцию
                                    сладких подарков.
                                </p>
                                <a href="#" className="btn large">Перейти в коллекцию</a>
                            </div>
                        </div>
                        {/* Повтор карточек */}
                        <div className="card" style={{ background: "url(img/slide.jpg)" }}>
                            <div className="text">
                                <p className="label">сезонные предложения</p>
                                <p className="title">весенняя коллекция</p>
                                <p className="subtitle">
                                    Ежегодно мы предоставляем обновленную новогоднюю коллекцию
                                    сладких подарков.
                                </p>
                                <a href="#" className="btn large">Перейти в коллекцию</a>
                            </div>
                        </div>
                        {/* Дополнительные карточки (с повторяющимся кодом) */}
                        {/* Можно сократить с помощью map или другой оптимизации */}
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
