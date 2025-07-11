"use client";
import React from "react";
import Card from "./Card";
import Tug from "./Tug";
import Button from "./Button";
import Headerr from "./Headerr";

export const Main = () => {
  return (
    <div className="page">
      <Headerr></Headerr>
      <div className="screen desktop fix"></div>
      <div className="screen hero" id="hero">
        <div className="content" id="hero-content">
          <div className="row">
            <div className="col-5 self-stretch">
              <h1>
                Электрические тележки,<br></br>буксиры и тягачи<br></br>от{" "}
                <span className="color-one bold">ПК ТИСО</span>
              </h1>
              <p>
                Эргономичные решения для перевозки и буксировкигрузов в различных условиях
              </p>
              <Button>Бесплатная консультация</Button>
            </div>
            <div className="col-7 hero">
              <img src="img/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="screen tech" id="tech">
        <div className="content">
          <h2>Техника под&nbsp;задачи вашего&nbsp;бизнеса</h2>
          <div className="row">
            <Card
              cl="col-3"
              image="/img/tech_tugs.png"
              title="Универсальное применение"
              text="Буксиры для&nbsp;&nbsp;перемещения грузов до&nbsp;20&nbsp;тонн."
            />
            <Card
              cl="col-3"
              image="/img/tech_platforms.png"
              title="Платформенные электротележки"
              text="Электротележки для&nbsp;&nbsp;перевозки грузов до&nbsp;3&nbsp;тонн."
            />
            <Card
              cl="col-3 fix"
              image="/img/tech_ride_on_trolleys.png"
              title="Электротележки с местом для водителя"
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
      <div className="screen faq" id="faq">
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
      <div className="screen advantages" id="advantages">
        <div className="content">
          <h2>Выгода от&nbsp;работы именно с&nbsp;нами</h2>
          <div className="row">
            <Card
              cl="col-3"
              image="/img/pref01.png"
              title="Постгарантийный сервис&nbsp;и&nbsp;поставка комплектующих"
            />
            <Card
              cl="col-3"
              image="/img/pref02.png"
              title="Представительства по&nbsp;всей стране"
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
      <div className="screen tugs" id="tugs">
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
                buxir: "3",
                angle: "15",
                accum: "GEL/Литий",
                angle: "до 15",
                length: "1625",
                width: "1270",
              }}
            />
            <Tug
              cl="col-3"
              image="energy6"
              title="Энергия 6"
              text="Средний электрический тягач с усиленным двигателем и базовыми функциями модели ЭНЕРГИЯ 3. Имеет большую буксируемую массу, усиленную раму и утяжелители для лучшего сцепления. Опционально оснащается проблесковым маячком. Подходит для производств, логистики и строительных объектов, используется на закрытых и открытых площадках."
              specs={{
                speed: "5,5",
                buxir: "10",
                accum: "GEL/Литий",
                angle: "15",
                length: "1 880",
                width: "920",
                height: "1270",
              }}
            />
            <Tug
              cl="col-3"
              image="energy6"
              title="Энергия 10"
              text="Промышленный тягач для тяжелых условий эксплуатации. Оборудован мощным электродвигателем и базовыми функциями модели ЭНЕРГИЯ 3, опционально оснащается проблесковым маячком. Применяется в аэропортах, на складах, на закрытых и открытых площадках."
              specs={{
                speed: "5,5",
                buxir: "10",
                accum: "GEL/Литий",
                angle: "15",
                length: "1 880",
                width: "920",
                height: "1270",
              }}
            />
            <Tug
              cl="col-3"
              image="energy6"
              title="Энергия 15"
              text="Тяжелый электрический тягач с усиленной конструкцией, мощным двигателем и литиевыми батареями. Оснащен базовыми функциями модели ЭНЕРГИЯ 3, может комплектоваться проблесковым маячком. Предназначен для перемещения особо тяжелых и крупногабаритных объектов на производстве, в логистике, на закрытых и открытых площадках"
              specs={{
                speed: "5,5",
                buxir: "15",
                accum: "GEL/Литий",
                angle: "15",
                length: "1 940",
                width: "920",
                height: "1270",
              }}
            />
            <Tug
              cl="col-3"
              image="impuls1"
              title="Импульс 1"
              text="Импульс 1 - самая компактная модель для перемещения грузов до 5 тонн. Отличается высокой маневренностью и простотой управления с возможностью регулировки скорости, что делает его идеальным для работы в узких проходах и ограниченных пространствах."
              specs={{
                speed: "2-5,5",
                buxir: "1–5",
                angle: "до 15",
                accum: "GEL/Литий",
              }}
            />
            <Tug
              cl="col-3"
              image="impuls2"
              title="Импульс 2"
              text="Импульс 2 ― универсальный электрический тягач с гидравлической системой подъема для работы с&nbsp;двухколесными прицепами и&nbsp;нестабильными грузами. Поднимает одну сторону груза для буксировки."
              specs={{
                speed: "2-5,5",
                buxir: "1–5",
                accum: "GEL/Литий",
              }}
            />
            <Tug
              cl="col-3"
              image="tygach"
              title="Тягач"
              subtitle="с подъёмной опорой для полуприцепов"
              text="Cпециализированное решение для маневровки грузовых прицепов массой до 20 т на складах, в логистических центрах и на промышленных объектах. Работает на любых покрытиях в помещениях и на улице."
              specs={{
                speed: "5",
                buxir: "20",
              }}
            />
          </div>
        </div>
      </div>
      <div className="screen tugs" id="platforms">
        <div className="content">
          <h2>
            Платформенные <br></br>электротележки
          </h2>
          <div className="tugs row">
            <Tug
              cl="col-3"
              image="electra"
              title="Электра"
              text="Шестиколесная платформенная тележка с электрическим мотором для перевозки грузов. Центральные приводные колеса и поворотные ролики по углам обеспечивают разворот на месте на 360°. Тележка оснащена системой безопасности с защитой от прижатия оператора к препятствиям."
              specs={{
                speed: "2-5,5",
                buxir: "0,3–3",
                angle: "15",
                accum: "GEL/Литий",
              }}
            />
            <Tug
              cl="col-3"
              image="zaryad3"
              title="Заряд 3"
              text="Трехколесная модель с приводом на задние колеса и управляемым передним колесом. Отличается высокой маневренностью, удобна для работы в узких проходах и ограниченных пространствах."
              specs={{
                speed: "2-5,5",
                buxir: "0,3–2",
                angle: "15",
                accum: "GEL/Литий",
              }}
            />
            <Tug
              cl="col-3"
              image="zaryad4"
              title="Заряд 4"
              text="Четырехколесная модель с приводными задними колесами и управляемыми передними. Обеспечивает повышенную устойчивость и проходимость, что особенно важно при перевозке грузов по неровным поверхностям."
              specs={{
                speed: "2-5,5",
                buxir: "0,3–2",
                angle: "15",
                accum: "GEL/Литий",
              }}
            />
            <Tug
              cl="col-3"
              image="molniya"
              title="Молния"
              text="Предназначена для перевозки длинномерных грузов, таких как профили, панели, трубы и листы. Оснащена электрическим мотором и колесами. Может комплектоваться различными вариантами кузовов и ложементов, включая индивидуальные решения для фиксации груза"
              specs={{
                speed: "2-5,5",
                buxir: "3",
                cargo: "3, 5, 6",
                accum: "GEL/Литий",
              }}
            />
          </div>
        </div>
      </div>
      <div className="screen tugs" id="trolleys">
        <div className="content">
          <h2>
            Электротележки<br></br>с местом для водителя
          </h2>
          <div className="tugs row">
            <Tug
              cl="col-3"
              image="atom"
              title="Атом"
              text="Трехколесный электрический тягач с местом для водителя, предназначенный для транспортировки грузов и перемещения персонала на складах, в логистических центрах и на промышленных предприятиях. Компактная конструкция и высокая маневренность позволяют эффективно работать в узких проходах и ограниченных пространствах, а мощный аккумулятор обеспечивает длительную автономную работу."
              specs={{
                speed: "8–10",
                buxir: "1–15",
                angle: "15",
                accum: "GEL/Литий",
              }}
            />
            <Tug
              cl="col-3"
              image="volt"
              title="Вольт"
              text="Четырехколесный электрический тягач с местом для водителя. Предназначен для транспортировки грузов и перемещения персонала. Отличается высокой устойчивостью, маневренностью, удобством эксплуатации и повышенной проходимостью по неровным поверхностям."
              specs={{
                speed: "8–16",
                buxir: "1–15",
                accum: "GEL/Литий",
              }}
            />
          </div>
        </div>
      </div>
      <div className="screen tugs" id="kranes">
        <div className="content">
          <h2>
            Погрузочное<br></br>оборудование
          </h2>
          <div className="tugs row">
            <Tug
              cl="col-3"
              image="shtabeler"
              title="Штабелер"
              subtitle="для бездорожья"
              text="Легкий электрический тягач для&nbsp;&nbsp;перемещения грузов до 3&nbsp;тонн. Подходит для&nbsp;&nbsp;складов, цехов и участков с&nbsp;ограниченным пространством. Компактный, простой в управлении. Базовый набор функций: электромагнитный тормоз, зарядка от 220В, кнопка безопасности, трехрежимный селектор скорости, утяжелители для&nbsp;&nbsp;сцепления с&nbsp;поверхностью."
              specs={{
                weight: "1,2",
                height: "2 500",
              }}
            />
            <Tug
              cl="col-3"
              image="minikran"
              title="Мини-кран"
              subtitle="передвижной электрогидравлический"
              text="Легкий электрический тягач для&nbsp;&nbsp;перемещения грузов до 3&nbsp;тонн. Подходит для&nbsp;&nbsp;складов, цехов и участков с&nbsp;ограниченным пространством. Компактный, простой в управлении. Базовый набор функций: электромагнитный тормоз, зарядка от 220В, кнопка безопасности, трехрежимный селектор скорости, утяжелители для&nbsp;&nbsp;сцепления с&nbsp;поверхностью."
              specs={{
                weight: "0.5",
              }}
            />
          </div>
        </div>
      </div>
      <div className="screen about" id="about">
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
          <div className="row">
            <Card
              cl="col-3"
              image="/img/about_quality.png"
              title="Международный стандарт качества"
              text="Производство сертифицировано по&nbsp;ISO 9001:2015; каждый этап контролируется внутренней службой ОТК."
            />
            <Card
              cl="col-3"
              image="/img/about_engineering.png"
              title="Инженерная экспертиза"
              text="Конструкторский отдел ТИСО разрабатывает изделия по&nbsp;ТЗ заказчика с&nbsp;авторским контролем и&nbsp;возможностью выезда инженеров на&nbsp;предприятие заказчика."
            />
            <Card
              cl="col-3"
              image="/img/about_speed.png"
              title="Скорость и надёжность"
              text="За&nbsp;более чем 20&nbsp;лет компания ТИСО создала широкую сеть представительств по&nbsp;всей стране, что позволяет оперативно выполнять заказы по&nbsp;России и&nbsp;СНГ."
            />
            <Card
              cl="col-3"
              image="/img/about_clients.png"
              title="Доверие лидеров отраслей"
              text="Среди заказчиков&nbsp;&mdash; автопром, авиа- и&nbsp;вагонстроение, торговые, горнодобывающие и&nbsp;перерабатывающие предприятия."
            />
          </div>
        </div>
      </div>
      <div className="screen solutions" id="solutions">
        <div className="content">
          <h2>Дополнительные решения</h2>
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
              cl="col-3" // fix //#вернуться
              image="/img/stalnya.png"
              title="Стальные конструкции"
              text="Технологические тележки, стойки, стеллажи и специализированные изделия для&nbsp; различных отраслей промышленности."
              link="https://pk-tiso.ru/telejki/"
              linktext="Подробнее"
            />
          </div>
        </div>
      </div>
      <div className="screen contacts" id="contacts">
        <div className="content">
          <h2>Контактная информация</h2>
          <div className="row stretch">
            <div className="col-5">
              <div>
                <h3 className="color-one">Главный офис и производство</h3>
                <p>
                  <b>Адрес:</b> Россия, Ленинградская область, Всеволожский район, дер. Порошкино, дорога на Мендсары 14.<br></br>
                  <b>Телефон:</b> 7 (812) 336-90-95<br></br>
                  <b>Email:</b> info@pk-tiso.ru<br></br>
                  <b>Режим работы:</b> Пн–Пт 09:00 – 18:00
                </p>
              </div>
              <div>
                <h4 className="color-one">Представительство в Москве</h4>
                <p>
                  <b>Телефон:</b> +7 (495) 108-75-92
                </p>
              </div>
              <Button>Перезвоните мне</Button>
            </div>
            <div className="col-6 hero">
              <img src="/img/map.png" alt="Главный офис" />
            </div>
          </div>
        </div>
      </div>
      {/* <Hero />
            <News />
            <Slider /> */}
    </div>
  );
};
