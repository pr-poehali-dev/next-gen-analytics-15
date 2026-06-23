import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const facts = [
  { num: "105 км²", label: "площадь — как маленькое море" },
  { num: "35 м", label: "глубина в самом каньоне" },
  { num: "до 6", label: "гостей на борту" },
  { num: "100+", label: "довольных пассажиров" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/projects/abaa77cc-bade-4d25-b3ec-2270a1774e1b/files/3fadabd6-1f98-4563-933b-7a0affb17315.jpg"
              alt="Туманное утро на Юмагузинском водохранилище"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </div>

        <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-xs tracking-[0.3em] opacity-70">
          Это не просто прогулка
        </h3>

        <p className="absolute bottom-12 left-6 right-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl z-10 leading-tight font-light">
          Здесь нет толпы, нет вай-фая и нет суеты. Только вода, скалы и ощущение, что ты нашёл что-то настоящее.
        </p>
      </div>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {facts.map((f) => (
            <div key={f.num} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{f.num}</p>
              <p className="text-sm text-neutral-500 uppercase tracking-wide">{f.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}