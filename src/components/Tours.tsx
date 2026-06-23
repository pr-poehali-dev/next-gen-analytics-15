import { useState } from "react";

const tours = [
  {
    num: "01",
    title: "Водопад и скала Трон",
    duration: "1 час",
    price: "7 000 ₽",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/e03024ed-683a-4cd8-a0d0-7da678995f47.jpg",
    intro: "Путешествие, в котором каждый поворот открывает новую грань природы и ощущений.",
    points: [
      { name: "Водопад Климентий", desc: "Скрытый среди зелени уголок, где вода с мягким шумом срывается вниз. Здесь хочется остановиться, вдохнуть глубже и на мгновение забыть о времени." },
      { name: "Скала Трон", desc: "Величественная и строгая, словно природный символ силы и спокойствия." },
      { name: "Купание с катера", desc: "Лёгкий ветер, солнечные блики на воде и ощущение полного счастья." },
    ],
  },
  {
    num: "02",
    title: "Семь братьев и пещеры",
    duration: "2 часа",
    price: "14 000 ₽",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/9e204c8c-80f8-4595-a23a-08ef169de8e4.jpg",
    intro: "Весь маршрут №1, плюс новые точки вглубь водохранилища.",
    points: [
      { name: "Гора Азан-таш", desc: "Возвышается над землёй, словно древний страж, хранящий тайны веков. Вид с катера." },
      { name: "Пещера Голубиный грот", desc: "Прохладное убежище, где мягкий полумрак переплетается с тишиной природы. Вид с катера." },
      { name: "Скала Семь братьев", desc: "Суровая и величественная, словно застывшие в камне великаны." },
      { name: "Водопад Аккаваз", desc: "Струи стремятся вниз и наполняют воздух свежестью. Возможна высадка на берег — родниковая вода и красивые фото." },
    ],
  },
  {
    num: "03",
    title: "Остров Сакасска",
    duration: "3 часа",
    price: "21 000 ₽",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/6eafd142-f12c-4984-afd9-a542f6e891de.jpg",
    intro: "Весь маршрут №1 и №2, плюс легендарный остров посреди водохранилища.",
    points: [
      { name: "Остров Сакасска", desc: "Раньше был горой и частью одноимённой деревни. После заполнения водоёма вершина осталась над гладью — одинокая, спокойная, словно наблюдающая за временем." },
    ],
  },
  {
    num: "04",
    title: "Полное погружение",
    duration: "4 часа",
    price: "28 000 ₽",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/d90a29fb-37fa-4845-833e-8033f49c27b0.jpg",
    intro: "Весь маршрут №1, №2 и №3, плюс самые впечатляющие точки водохранилища.",
    points: [
      { name: "Скала Крейсер", desc: "Узкий утёс поднимается над водой строго и мощно — в хорошем освещении силуэт напоминает нос судна, застывшего среди гор. Вид с катера." },
      { name: "Пещера Театральная", desc: "Своды поднимаются высоко, создавая ощущение огромного зала, где каждый звук отзывается гулким эхом. Желающие смогут посетить пещеру." },
      { name: "Скала Чёртов палец", desc: "Стоит, как каменный указующий перст, застывший между водой и небом. Вид с катера." },
      { name: "Скала Вождей", desc: "На отвесной каменной стене угадываются знаменитые портреты Маркса, Энгельса и Ленина. Изображения около 50×70 метров — производит сильное впечатление даже издалека. Вид с катера." },
      { name: "Пещера Акбута", desc: "Спокойная, суровая красота и дыхание истории. Камень хранит следы очень давнего прошлого. Желающие смогут посетить пещеру." },
    ],
  },
];

export default function Tours() {
  const [open, setOpen] = useState<number | null>(null);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tours" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3">Выбери своё приключение</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16">Куда отправимся?</h2>

        <div className="flex flex-col divide-y divide-neutral-100">
          {tours.map((tour, i) => (
            <div key={tour.num}>
              <button
                className="w-full text-left py-8 flex items-start gap-6 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-xs text-neutral-300 font-mono mt-1 shrink-0 w-6">{tour.num}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-6 shrink-0">
                      <span className="text-sm text-neutral-400">{tour.duration}</span>
                      <span className="text-base font-semibold text-neutral-900">{tour.price}</span>
                      <span className={`text-neutral-400 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">{tour.intro}</p>
                </div>
              </button>

              {open === i && (
                <div className="pb-10 pl-12 grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-5">
                    {tour.points.map((p) => (
                      <div key={p.name} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2 shrink-0" />
                        <div>
                          <p className="font-semibold text-neutral-900 text-sm mb-0.5">{p.name}</p>
                          <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={scrollToBooking}
                      className="mt-2 self-start bg-neutral-900 text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-neutral-700 transition-colors"
                    >
                      Забронировать
                    </button>
                  </div>
                  <div className="overflow-hidden h-64 md:h-auto">
                    <img
                      src={tour.img}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}