const tours = [
  {
    title: "Разгон по глади",
    duration: "1 час",
    desc: "Выходим на простор — полный газ, солёный ветер в лицо и скалы, летящие мимо бортов. Лучший способ почувствовать водохранилище.",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/33542e5f-2a36-4af5-b332-66e03f83ec2a.jpg",
  },
  {
    title: "Вглубь каньона",
    duration: "2 часа",
    desc: "Уходим туда, куда пешком не добраться. Узкие ущелья, отвесные стены известняка и полная тишина — только эхо мотора.",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/0bfeeb16-923b-44d9-b79a-6122659888bf.jpg",
  },
  {
    title: "Катер в ваше распоряжение",
    duration: "от 1 часа",
    desc: "Никакого маршрута — только ваши желания и опытный капитан. Подходит для романтики, фотосессий и дружеских вылазок.",
    img: "https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/c88e9a78-5d44-433f-9412-baad5a4befc0.jpg",
  },
];

export default function Tours() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tours" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3">Выбери своё приключение</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16">Куда отправимся?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.title} className="group cursor-pointer" onClick={scrollToBooking}>
              <div className="overflow-hidden mb-5 h-64">
                <img
                  src={tour.img}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-neutral-900">{tour.title}</h3>
                <span className="text-sm text-neutral-400 whitespace-nowrap ml-4">{tour.duration}</span>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">{tour.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}