import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", tour: "", comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/080792c4-535e-442c-a254-8b65f81f616b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", phone: "", date: "", tour: "", comment: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="booking" className="bg-neutral-900 py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-3">Бронирование</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Запишитесь<br />на прогулку</h2>
          <p className="text-neutral-400 leading-relaxed mb-10">
            Оставьте заявку — мы свяжемся с вами в течение часа, уточним детали и подтвердим бронь.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 text-sm shrink-0">1</div>
              <div>
                <p className="text-white font-medium">Оставьте заявку</p>
                <p className="text-neutral-400 text-sm">Заполните форму с удобной датой</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 text-sm shrink-0">2</div>
              <div>
                <p className="text-white font-medium">Мы перезвоним</p>
                <p className="text-neutral-400 text-sm">Уточним детали и подберём время</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 text-sm shrink-0">3</div>
              <div>
                <p className="text-white font-medium">Отправляйтесь в путь</p>
                <p className="text-neutral-400 text-sm">Приезжайте в назначенное время и наслаждайтесь!</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя *"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-neutral-800 text-white placeholder-neutral-500 px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-neutral-500 transition"
          />
          <input
            type="tel"
            placeholder="Телефон *"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-neutral-800 text-white placeholder-neutral-500 px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-neutral-500 transition"
          />
          <select
            required
            value={form.tour}
            onChange={(e) => setForm({ ...form, tour: e.target.value })}
            className="bg-neutral-800 text-white px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-neutral-500 transition appearance-none"
          >
            <option value="" disabled>Выберите маршрут *</option>
            <option value="Обзорная прогулка (1 час)">Обзорная прогулка — 1 час</option>
            <option value="Экскурсия в каньон (2 часа)">Экскурсия в каньон — 2 часа</option>
            <option value="Аренда на полдня (4 часа)">Аренда на полдня — 4 часа</option>
          </select>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="bg-neutral-800 text-white placeholder-neutral-500 px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-neutral-500 transition"
          />
          <textarea
            placeholder="Комментарий (количество человек, пожелания)"
            rows={3}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="bg-neutral-800 text-white placeholder-neutral-500 px-5 py-4 text-sm outline-none focus:ring-1 focus:ring-neutral-500 transition resize-none"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-black py-4 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-all duration-300 disabled:opacity-50"
          >
            {status === "loading" ? "Отправляем..." : "Отправить заявку"}
          </button>
          {status === "success" && (
            <p className="text-green-400 text-sm text-center">Заявка отправлена! Мы свяжемся с вами в течение часа.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Ошибка. Попробуйте ещё раз или позвоните нам.</p>
          )}
        </form>
      </div>
    </section>
  );
}