"use client";
import React from "react";
import { Hero } from "./Hero";
import { News } from "./News";
import { Slider } from "./Slider";
import AdvantageBox from "./AdvantageBox";
import Card from "./Card";
import Tug from "./Tug";

export const Main = () => {
  return (
    <div>
      <div className="screen tech">
        <div className="content">
          <h2>Техника под&nbsp;задачи вашего&nbsp;бизнеса</h2>
          <div className="row">
            <Card
              cl="col-3"
              image="/img/tech_tugs.png"
              title="Универсальное применение"
              text="Буксиры для&nbsp;&nbsp;перемещения грузов до&nbsp;15&nbsp;тонн."
            />
            <Card
              cl="col-3"
              image="/img/tech_platforms.png"
              title="Платформенные электротележки"
              text="Электротележки для&nbsp;&nbsp;перевозки грузов до&nbsp;1&nbsp;тонны."
            />
            <Card
              cl="col-3 fix"
              image="/img/tech_ride_on_trolleys.png"
              title="Электротележки с&nbsp;местом для&nbsp;&nbsp;водителя"
              text="Электротележки для&nbsp;&nbsp;транспортировки персонала и&nbsp;грузов."
            />
            <Card
              cl="col-3"
              image="/img/tech_lifting_equipment.png"
              title="Погрузочное оборудование"
              text="Оборудование для&nbsp;&nbsp;подъема груза в&nbsp;различных условиях."
            />
          </div>
        </div>
      </div>
      <div className="screen faq">
        <div className="content">
          <h2>Преимущества нашей техники</h2>
          <div className="row">
            <Card
              cl="col-6 no-img"
              title="Универсальное применение"
              text="Электротележки &laquo;ТИСО&raquo; успешно работают в&nbsp;логистике, торговле, на&nbsp;производствах, складах, в&nbsp;больницах и&nbsp;аэропортах. Их&nbsp;используют для&nbsp;&nbsp;перевозки грузов, персонала и&nbsp;спецоборудования&nbsp;&mdash; как внутри помещений, так и&nbsp;на&nbsp;улице."
            />
            <Card
              cl="col-6 no-img"
              title="Маневренность и безопасность"
              text="Компактные модели, такие как &laquo;Импульс&nbsp;1&raquo; или&nbsp;&laquo;Заряд&nbsp;3&raquo;, легко проходят в&nbsp;узких коридорах. На&nbsp;всех моделях установлены электромагнитные тормоза, системы безопасности и&nbsp;управление скоростью, которые позволяют уверенно работать даже в&nbsp;сложных условиях."
            />
            <Card
              cl="col-6 no-img"
              title="Гибкость под задачи клиента"
              text="Модели &laquo;Электра&raquo;, &laquo;Заряд&raquo;, &laquo;Молния&raquo; доступны с&nbsp;разными платформами, полками, кузовами и&nbsp;ложементами. Возможно изготовление под нестандартные грузы&nbsp;&mdash; от&nbsp;коробок до&nbsp;длинномерных панелей и&nbsp;труб."
            />
            <Card
              cl="col-6 no-img"
              title="Производительность без перегрузки"
              text="Платформенные и&nbsp;буксирные тележки берут на&nbsp;себя тяжелую работу: перевозят грузы до&nbsp;15&nbsp;тонн, снижают физическую нагрузку на&nbsp;персонал и&nbsp;минимизируют риск травм."
            />
          </div>
          <h2>Часто задаваемые вопросы</h2>
          <div className="row">
            <Card
              cl="col-6 no-img"
              title="Какой вес&nbsp;могут перевозить ваши электротележки?"
              text="В&nbsp;зависимости от&nbsp;модели: от&nbsp;300&nbsp;кг (например, &laquo;Заряд&nbsp;3&raquo;) до&nbsp;15&nbsp;000&nbsp;кг (например, &laquo;Энергия&nbsp;15&raquo;)."
            />
            <Card
              cl="col-6 no-img"
              title="Подходят ли тележки для&nbsp; работы на улице?"
              text="Да, большинство моделей рассчитаны на&nbsp;работу как в&nbsp;помещении, так и&nbsp;на&nbsp;открытых площадках, в&nbsp;том числе на&nbsp;неровных покрытиях."
            />
            <Card
              cl="col-6 no-img"
              title="От&nbsp;чего зависит выбор аккумулятора в&nbsp;тележке?"
              text="От&nbsp;условий работы: GEL предназначен для&nbsp;&nbsp;спокойной эксплуатации в&nbsp;помещении. Литиевый — для&nbsp;&nbsp;частой, интенсивной работы, особенно на&nbsp;улице и&nbsp;в&nbsp;холоде."
            />
            <Card
              cl="col-6 no-img"
              title="Где производится оборудование?"
              text="Вся продукция производится в&nbsp;России, на&nbsp;собственном заводе в&nbsp;Санкт-Петербурге, сертифицированном по&nbsp;ISO 9001:2015."
            />
            <Card
              cl="col-6 no-img"
              title="Есть&nbsp;ли сервисное обслуживание и&nbsp;гарантия?"
              text="Да, компания &laquo;ТИСО&raquo; предоставляет сервисное обслуживание и&nbsp;гарантию на&nbsp;свою продукцию. Гарантийный срок на&nbsp;все модели электротележек составляет 12&nbsp;месяцев. Кроме того, компания обеспечивает постгарантийный сервис&nbsp;и&nbsp;поставку комплектующих для&nbsp;&nbsp;своей техники."
            />
            <Card
              cl="col-6 no-img"
              title="Можно&nbsp;ли адаптировать тележку под наши задачи?"
              text="Да, доступны различные опции: платформы и&nbsp;корзины разных размеров, контейнеры, колёса с&nbsp;разными свойствами, противоскользящие цепи, проблесковые маячки и&nbsp;другие аксессуары."
            />
            <Card
              cl="col-6 no-img"
              title="Возможна ли поставка в другие города и страны?"
              text="Да, компания работает по&nbsp;всей России и&nbsp;поставляет продукцию в&nbsp;страны СНГ и&nbsp;ближнего зарубежья."
            />
            <Card
              cl="col-6 no-img"
              title="Вы&nbsp;разрабатываете индивидуальные модели?"
              text="Да, компания &laquo;ТИСО&raquo; разрабатывает изделия по&nbsp;техническому заданию, чертежам и&nbsp;эскизам заказчика."
            />
          </div>
        </div>
      </div>
      <div className="screen advantages">
        <div className="content">
          <h2>Выгода от&nbsp;работы именно с&nbsp;нами</h2>
          <div className="row advantages">
            <Card
              cl="col-3"
              image="/img/pref01.png"
              title="Постгарантийный сервис&nbsp;и&nbsp;поставка комплектующих"
            />
            <Card
              cl="col-3"
              image="/img/pref02.png"
              title="Представительства по&nbsp;всей стране"
            />
            <Card
              cl="col-3"
              image="img/pref03.png"
              title="20&nbsp;лет опыта производства"
            />
            <Card
              cl="col-3"
              image="/img/pref04.png"
              title="Разработка индивидуальных проектов"
            />
          </div>
        </div>
      </div>
      <div className="screen tugs">
        <div className="content">
          <h2>Электрические буксиры</h2>
          <div className="tugs row">
            <Tug
              cl="col-3"
              image="energy3"
              title="Энергия 3"
              text="Легкий электрический тягач для&nbsp;&nbsp;перемещения грузов до 3&nbsp;тонн. Подходит для&nbsp;&nbsp;складов, цехов и участков с&nbsp;ограниченным пространством. Компактный, простой в управлении. Базовый набор функций: электромагнитный тормоз, зарядка от 220В, кнопка безопасности, трехрежимный селектор скорости, утяжелители для&nbsp;&nbsp;сцепления с&nbsp;поверхностью."
              specs={{
                speed: "2-5,5",
                buxir: "1–5",
                angle: "15",
                accum: "GEL/Литий"
              }}
            />
            <Tug
              cl="col-3"
              image="energy6"
              title="Энергия 6"
              text="Легкий электрический тягач для&nbsp;&nbsp;перемещения грузов до 3&nbsp;тонн. Подходит для&nbsp;&nbsp;складов, цехов и участков с&nbsp;ограниченным пространством. Компактный, простой в управлении. Базовый набор функций: электромагнитный тормоз, зарядка от 220В, кнопка безопасности, трехрежимный селектор скорости, утяжелители для&nbsp;&nbsp;сцепления с&nbsp;поверхностью."
              specs={{
                speed: "2-5,5",
                buxir: "1–5",
                angle: "15",
                accum: "GEL/Литий"
              }}
            />
          </div>
        </div>
      </div>
      <div className="screen about">
        <div className="content">
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
              image="/img/about_quality.png"
              title="Международный стандарт качества"
              text="Производство сертифицировано по&nbsp;ISO 9001:2015; каждый этап контролируется внутренней службой ОТК."
            />
            <AdvantageBox
              image="/img/about_engineering.png"
              title="Инженерная экспертиза"
              text="Конструкторский отдел ТИСО разрабатывает изделия по&nbsp;ТЗ заказчика с&nbsp;авторским контролем и&nbsp;возможностью выезда инженеров на&nbsp;предприятие заказчика."
            />
            <AdvantageBox
              image="/img/about_speed.png"
              title="Скорость и надёжность"
              text="За&nbsp;более чем 20&nbsp;лет компания ТИСО создала широкую сеть представительств по&nbsp;всей стране, что позволяет оперативно выполнять заказы по&nbsp;России и&nbsp;СНГ."
            />
            <AdvantageBox
              image="/img/about_clients.png"
              title="Доверие лидеров отраслей"
              text="Среди заказчиков&nbsp;&mdash; автопром, авиа- и&nbsp;вагонстроение, торговые, горнодобывающие и&nbsp;перерабатывающие предприятия."
            />
          </div>
        </div>
      </div>
      <div className="screen solutions">
        <div className="content">
          <h2>Дополнительные решения</h2>
          <div className="row advantages"></div>
          <div className="row">
            <Card
              cl="col-3"
              image="/img/pogryzchiki.png"
              title="Колеса для&nbsp;&nbsp;спецтехники"
              text="Изготовление колес&nbsp;для&nbsp;&nbsp;всех типов погрузчиков, ричтраков, штабелеров и&nbsp;другой спецтехники."
              link="https://pk-tiso.ru/prom-kolesa/kolesa-dlya-pogruzchikov/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3"
              image="/img/konveer.png"
              title="Конвейерные ролики и&nbsp;рольганги"
              text="Гравитационные и&nbsp;приводные ролики и&nbsp;рольганги под различные типы ремней и&nbsp;звездочек."
              link="https://pk-tiso.ru/konveier/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3"
              image="/img/poliyeretan.png"
              title="Литье изделий из полиуретана"
              text="Современное оборудование и технологии позволяют изготавливать изделия любой сложности в кратчайшие сроки."
              link="https://pk-tiso.ru/litie-poly/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3"
              image="/img/doposle.png"
              title="Восстановление колес&nbsp;полиуретаном"
              text="Наши технологии позволяют продлить срок службы колес&nbsp;и&nbsp;улучшить их&nbsp;эксплуатационные характеристики."
              link="https://pk-tiso.ru/prom-kolesa/vosstanovlenie/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3"
              image="/img/kolesa.png"
              title="Колеса и колесные опоры"
              text="Производство колес&nbsp;и роликов по передовым технологиям. Диаметр от 20&nbsp;мм до 1000&nbsp;мм. Грузоподъемность от 15 кг до 50 т."
              link="https://pk-tiso.ru/prom-kolesa/sobstvennue-kolesa/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3 zamki"
              image="/img/zamki.png"
              title="Поставка замков-защелок"
              text="Предлагаем широкий ассортимент надежных замков-защелок, петель и ручек."
              link="https://pk-tiso.ru/komplekt/zaschelki/zaschelki/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3 module"
              image="/img/modylnaya.png"
              title="Модульные системы"
              text="Легковозводимые конструкции подходят для&nbsp; создания рабочих зон, конвейерных линий и другого оборудования."
              link="https://pk-tiso.ru/modulsistemy/"
              linktext="Подробнее"
            />
            <Card
              cl="col-3 fix"
              image="/img/stalnya.png"
              title="Стальные конструкции"
              text="Технологические тележки, стойки, стеллажи и специализированные изделия для&nbsp; различных отраслей промышленности."
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
