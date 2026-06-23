export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+500px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[500px] lg:h-[600px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-500px)] lg:top-[calc(100vh-600px)]">
          <div className="bg-neutral-950 py-8 px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-wrap gap-12 max-w-6xl mx-auto w-full">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">Маршруты</h3>
                <span className="text-white text-sm">Обзорная прогулка</span>
                <span className="text-white text-sm">Экскурсия в каньон</span>
                <span className="text-white text-sm">Аренда катера</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">Контакты</h3>
                <a href="tel:+70000000000" className="text-white hover:text-neutral-400 transition-colors text-sm">
                  +7 (000) 000-00-00
                </a>
                <a href="https://t.me/max" className="text-white hover:text-neutral-400 transition-colors text-sm">
                  Telegram
                </a>
                <a href="mailto:forsage.plus@mail.ru" className="text-white hover:text-neutral-400 transition-colors text-sm">
                  forsage.plus@mail.ru
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">Режим работы</h3>
                <span className="text-white text-sm">Май — Октябрь</span>
                <span className="text-white text-sm">Ежедневно 8:00 — 20:00</span>
              </div>
            </div>
            <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[15vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] text-white font-bold tracking-tight">
                ЮМАГУЗА
              </h1>
              <p className="text-neutral-500 text-sm">{new Date().getFullYear()} Юмагуза Тур</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
