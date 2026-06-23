import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } ${className ?? ""}`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <div className={`text-sm uppercase tracking-widest font-bold ${scrolled ? "text-black" : "text-white"}`}>
          Юмагуза Тур
        </div>
        <nav className="hidden md:flex gap-8">
          {[
            { label: "Маршруты", id: "tours" },
            { label: "Цены", id: "prices" },
            { label: "Контакты", id: "booking" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`uppercase text-xs tracking-widest transition-colors duration-300 ${
                scrolled ? "text-black hover:text-neutral-500" : "text-white hover:text-neutral-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a
          href="tel:+79279278037"
          className={`text-xs uppercase tracking-widest px-5 py-2 border transition-all duration-300 ${
            scrolled
              ? "border-black text-black hover:bg-black hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          +7 (927) 927-80-37
        </a>
      </div>
    </header>
  );
}