"use client";
import React from "react";
import { Hero } from "./Hero";
import { News } from "./News";
import { Slider } from "./Slider";
import AdvantageBox from "./AdvantageBox";
import Card from "./Card";

export const Main = () => {
  return (
    <div>
      <div class="screen tech">
        <div class="content">
          <h2>Техника под&nbsp;задачи вашего&nbsp;бизнеса</h2>
          <div className="row advantages">
            <AdvantageBox
              image="/img/tiso/tech_tugs.png"
              title="Электрические буксиры"
              text="Буксиры для перемещения грузов до&nbsp;15&nbsp;тонн."
            />
            <AdvantageBox
              image="/img/tiso/tech_platforms.png"
              title="Платформенные электротележки"
              text="Электротележки для перевозки грузов до&nbsp;1&nbsp;тонны."
            />
            <AdvantageBox
              image="/img/tiso/tech_ride_on_trolleys.png"
              title="Электротележки с&nbsp;местом для&nbsp;водителя"
              text="Электротележки для транспортировки персонала и&nbsp;грузов."
              klass="fix"
            />
            <AdvantageBox
              image="/img/tiso/tech_lifting_equipment.png"
              title="Погрузочное оборудование"
              text="Оборудование для подъема груза в&nbsp;различных условиях."
            />
          </div>
            
        </div>
      </div>
      <div class="screen tech">
        <div class="content">
          <h2>Техника под&nbsp;задачи вашего&nbsp;бизнеса</h2>
          <div className="row advantages">
            <AdvantageBox
              image="/img/tiso/tech_tugs.png"
              title="Электрические буксиры"
              text="Буксиры для перемещения грузов до&nbsp;15&nbsp;тонн."
            />
            <AdvantageBox
              image="/img/tiso/tech_platforms.png"
              title="Платформенные электротележки"
              text="Электротележки для перевозки грузов до&nbsp;1&nbsp;тонны."
            />
            <AdvantageBox
              image="/img/tiso/tech_ride_on_trolleys.png"
              title="Электротележки с&nbsp;местом для&nbsp;водителя"
              text="Электротележки для транспортировки персонала и&nbsp;грузов."
              klass="fix"
            />
            <AdvantageBox
              image="/img/tiso/tech_lifting_equipment.png"
              title="Погрузочное оборудование"
              text="Оборудование для подъема груза в&nbsp;различных условиях."
            />
          </div>
            
        </div>
      </div>
      <div class="screen advantages">
        <div class="content">
          <h2>Выгода от&nbsp;работы именно с&nbsp;нами</h2>
          <div className="row advantages">
            <AdvantageBox
              image="/img/tiso/pref01.png"
              title="Постгарантийный сервис и&nbsp;поставка комплектующих"
            />
            <AdvantageBox
              image="/img/tiso/pref02.png"
              title="Представительства по&nbsp;всей стране"
            />
            <AdvantageBox
              image="/img/tiso/pref03.png"
              title="20&nbsp;лет опыта производства"
            />
            <AdvantageBox
              image="/img/tiso/pref04.png"
              title="Разработка индивидуальных проектов"
            />

          </div>
        </div>
      </div>
      <div class="screen about">
        <div class="content">
          <h2>О компании</h2>
          <p>
            Производственная компания &laquo;ТИСО&raquo;&nbsp;&mdash; российский
            разработчик и&nbsp;производитель складского
            и&nbsp;интралогистического оборудования с&nbsp;20-летним опытом
            работы на&nbsp;рынке. Наш собственный производственный комплекс
            площадью 7&nbsp;000&nbsp;м&sup2; включает конструкторский отдел,
            цеха полного цикла и&nbsp;линии литья полиуретана, что позволяет
            проходить путь от&nbsp;идеи до&nbsp;серийного выпуска изделий внутри
            одной площадки.
          </p>
          <div className="row advantages">
            <AdvantageBox
              image="/img/tiso/about_quality.png"
              title="Международный стандарт качества"
              text="Производство сертифицировано по&nbsp;ISO 9001:2015; каждый этап контролируется внутренней службой ОТК."
            />
            <AdvantageBox
              image="/img/tiso/about_engineering.png"
              title="Инженерная экспертиза"
              text="Конструкторский отдел ТИСО разрабатывает изделия по&nbsp;ТЗ заказчика с&nbsp;авторским контролем и&nbsp;возможностью выезда инженеров на&nbsp;предприятие заказчика."
            />
            <AdvantageBox
              image="/img/tiso/about_speed.png"
              title="Скорость и надёжность"
              text="За&nbsp;более чем 20&nbsp;лет компания ТИСО создала широкую сеть представительств по&nbsp;всей стране, что позволяет оперативно выполнять заказы по&nbsp;России и&nbsp;СНГ."
            />
            <AdvantageBox
              image="/img/tiso/about_clients.png"
              title="Доверие лидеров отраслей"
              text="Среди заказчиков&nbsp;&mdash; автопром, авиа- и&nbsp;вагонстроение, торговые, горнодобывающие и&nbsp;перерабатывающие предприятия."
            />
          </div>
        </div>
      </div>
      <div class="screen solutions">
        <div class="content">
          <h2>Дополнительные решения</h2>
          <div className="row advantages">
        </div>
            <div class="row">
                <Card
                cl="col-3"
                image="/img/tiso/solutions_01.png"
                title="Колеса для&nbsp;спецтехники"
                text="Изготовление колес для&nbsp;всех типов погрузчиков, ричтраков, штабелеров и&nbsp;другой спецтехники."
                link="https://pk-tiso.ru/prom-kolesa/kolesa-dlya-pogruzchikov/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_02.png"
                title="Конвейерные ролики и&nbsp;рольганги"
                text="Гравитационные и&nbsp;приводные ролики и&nbsp;рольганги под различные типы ремней и&nbsp;звездочек."
                link="https://pk-tiso.ru/konveier/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_03.png"
                title="Литье изделий из полиуретана"
                text="Современное оборудование и технологии позволяют изготавливать изделия любой сложности в кратчайшие сроки."
                link="https://pk-tiso.ru/litie-poly/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_04.png"
                title="Восстановление колес полиуретаном"
                text="Наши технологии позволяют продлить срок службы колес и&nbsp;улучшить их&nbsp;эксплуатационные характеристики."
                link="https://pk-tiso.ru/prom-kolesa/vosstanovlenie/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_05.png"
                title="Колеса и колесные опоры"
                text="Производство колес и роликов по передовым технологиям. Диаметр от 20 мм до 1000 мм. Грузоподъемность от 15 кг до 50 т."
                link="https://pk-tiso.ru/prom-kolesa/sobstvennue-kolesa/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_06.png"
                title="Поставка замков-защелок"
                text="Предлагаем широкий ассортимент надежных замков-защелок, петель и ручек."
                link="https://pk-tiso.ru/komplekt/zaschelki/zaschelki/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_07.png"
                title="Модульные системы"
                text="Легковозводимые конструкции подходят для создания рабочих зон, конвейерных линий и другого оборудования."
                link="https://pk-tiso.ru/modulsistemy/"
                linktext="Подробнее"
                />
                <Card
                cl="col-3"
                image="/img/tiso/solutions_08.png"
                title="Стальные конструкции"
                text="Технологические тележки, стойки, стеллажи и специализированные изделия для различных отраслей промышленности."
                link="https://pk-tiso.ru/telejki/"
                linktext="Подробнее"
                />
            </div>
            </div>
      </div>
      {/* <Hero />
            <News />
            <Slider /> */}
    </div>
  );
};
