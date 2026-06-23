import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/1497df41-9b80-4d9f-a608-ca596f7bf740.jpg"
          alt="Юмагузинское водохранилище"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Башкирия · Юмагузинское водохранилище</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          Там, где<br />кончается суша
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 mb-10 leading-relaxed">
          Скоростной катер, горные скалы в метре от борта и ветер, который сдувает всё лишнее. Юмагуза ждёт.
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          Хочу на воду
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </div>
  );
}