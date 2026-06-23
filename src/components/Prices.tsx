const prices = [
  {
    title: "Обзорная прогулка",
    duration: "1 час",
    price: "3 000",
    unit: "за катер",
    capacity: "до 6 человек",
    features: ["Экипаж включён", "Маршрут по водохранилищу", "Остановки для фото"],
  },
  {
    title: "Экскурсия в каньон",
    duration: "2 часа",
    price: "5 500",
    unit: "за катер",
    capacity: "до 6 человек",
    features: ["Экипаж включён", "Маршрут в ущелья", "Рассказ о природе", "Остановки для фото"],
    featured: true,
  },
  {
    title: "Аренда на полдня",
    duration: "4 часа",
    price: "9 000",
    unit: "за катер",
    capacity: "до 6 человек",
    features: ["Экипаж включён", "Маршрут на выбор", "Любые остановки", "Гибкий график"],
  },
];

export default function Prices() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="prices" className="bg-neutral-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3">Стоимость</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16">Цены</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prices.map((plan) => (
            <div
              key={plan.title}
              className={`p-8 flex flex-col ${
                plan.featured
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-900 border border-neutral-100"
              }`}
            >
              {plan.featured && (
                <span className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Популярный</span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.featured ? "text-white" : "text-neutral-900"}`}>
                {plan.title}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? "text-neutral-400" : "text-neutral-500"}`}>
                {plan.duration} · {plan.capacity}
              </p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-neutral-900"}`}>
                  {plan.price} ₽
                </span>
                <span className={`text-sm ml-2 ${plan.featured ? "text-neutral-400" : "text-neutral-500"}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${plan.featured ? "text-neutral-300" : "text-neutral-600"}`}>
                    <span className={`w-1 h-1 rounded-full ${plan.featured ? "bg-neutral-400" : "bg-neutral-400"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToBooking}
                className={`py-3 text-sm uppercase tracking-widest font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-neutral-900 text-white hover:bg-neutral-700"
                }`}
              >
                Забронировать
              </button>
            </div>
          ))}
        </div>

        <p className="text-neutral-400 text-sm mt-8 text-center">
          Цены указаны за весь катер. Групповые скидки и специальные условия — уточняйте при бронировании.
        </p>
      </div>
    </section>
  );
}
