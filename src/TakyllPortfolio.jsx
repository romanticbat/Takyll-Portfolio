import React, { useState } from "react";

// Substitua /images/* por imagens reais em public/images
const GALLERY = [
  {
    id: 1,
    title: "Homem Aranha - Fanart",
    src: "/images/image1.jpg",
    category: "Fanart",
    year: 2025,
    description: "Digital fanart study — dramatic lighting and motion.",
  },
  {
    id: 2,
    title: "RPG Fanart",
    src: "/images/image2.jpg",
    category: "Original",
    year: 2024,
    description: "Character study with bold expression and red accents.",
  },
  {
    id: 3,
    title: "Juno - Fanart",
    src: "/images/image3.jpg",
    category: "Original",
    year: 2024,
    description: "Portrait with clean shapes and colored background.",
  },
];

const CATEGORIES = ["All", "Original", "Fanart", "Commissions"];

export default function TakyllPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered =
    selectedCategory === "All"
      ? GALLERY
      : GALLERY.filter((g) => g.category === selectedCategory);

  function openModal(index) {
    setActiveIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }
  function next() {
    setActiveIndex((i) => (i + 1) % filtered.length);
  }
  function prev() {
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }

  const heroImage = GALLERY[0]?.src || "/images/hero.jpg";

  return (
    <div className="min-h-screen bg-[#0f0f10] text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-gradient-to-br from-red-600 to-red-400 flex items-center justify-center font-bold text-white shadow-md">
            TAK
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">Takyll</h1>
            <p className="text-xs text-gray-400">Illustration & Character Design</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#portfolio" className="hover:text-white">Portfólio</a>
          <a href="#commissions" className="hover:text-white">Comissões</a>
          <a href="#about" className="hover:text-white">Sobre</a>
          <a href="#contact" className="hover:text-white">Contato</a>
        </nav>
        <div className="md:hidden text-gray-300">Menu</div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Retratos de atitude <span className="text-red-400">e expressão.</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl">
            Arte digital com cores ousadas, iluminação cinematográfica e personagens cheios de personalidade. Disponível para comissões — veja exemplos abaixo.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#portfolio" className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white font-medium">Ver Portfólio</a>
            <a href="#commissions" className="px-4 py-2 border border-gray-700 rounded-md text-gray-200">Comissões</a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <strong>Ferramentas:</strong> Procreate, Photoshop, Clip Studio Paint.
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden shadow-xl" style={{ background: "linear-gradient(180deg,#111 0%, #0b0b0c 100%)" }}>
            <img src={heroImage} alt="hero" className="w-full h-64 object-cover md:h-96" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Portfólio</h3>
          <div className="flex gap-2 items-center">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`text-sm px-3 py-1 rounded-full transition ${
                  selectedCategory === c
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div key={item.id} className="relative group cursor-pointer" onClick={() => openModal(idx)}>
              <div className="aspect-[4/5] w-full rounded-lg overflow-hidden bg-gray-900 shadow-inner">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.year} • {item.category}</div>
                </div>
                <div className="text-xs text-gray-500">↗</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMISSIONS */}
      <section id="commissions" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Comissões</h3>
        <p className="text-gray-400 mt-2">Faixas de preço e exemplos. Preço final pode variar de acordo com complexidade.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
            <h4 className="font-semibold">Sketch Rápido</h4>
            <p className="text-sm text-gray-400 mt-2">Busto simples, linhas limpas. Entrega: 3-5 dias.</p>
            <div className="mt-4 font-bold">R$ 40 - R$ 80</div>
            <a href="#contact" className="mt-4 inline-block px-3 py-2 bg-red-500 rounded-md text-white">Solicitar</a>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
            <h4 className="font-semibold">Retrato Colorido</h4>
            <p className="text-sm text-gray-400 mt-2">Busto ou meio corpo, pintura digital completa. Entrega: 1-2 semanas.</p>
            <div className="mt-4 font-bold">R$ 150 - R$ 300</div>
            <a href="#contact" className="mt-4 inline-block px-3 py-2 bg-red-500 rounded-md text-white">Solicitar</a>
          </div>
          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
            <h4 className="font-semibold">Cena / Ilustração</h4>
            <p className="text-sm text-gray-400 mt-2">Composição completa, background detalhado. Entrega: 2-4 semanas.</p>
            <div className="mt-4 font-bold">R$ 400+</div>
            <a href="#contact" className="mt-4 inline-block px-3 py-2 bg-red-500 rounded-md text-white">Solicitar</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Sobre</h3>
            <p className="text-gray-300 mt-3">Takyll é uma ilustradora digital focada em retratos e personagens. Seu trabalho mistura traços realistas com estética de quadrinhos e paletas vibrantes. Aceita comissões e trabalha principalmente com personagens e estudos de luz.</p>
            <ul className="mt-4 text-sm text-gray-400 space-y-1">
              <li>• Atua com Ilustração digital desde 2018</li>
              <li>• Ferramentas: Procreate, Photoshop</li>
              <li>• Responde com prazos e processo claro para cada pedido</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-sm text-gray-300 hover:text-white">Instagram</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">Twitter / X</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white">ArtStation</a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-4">
            <img src="/images/image4.jpg" alt="Takyll" className="w-full h-48 object-cover rounded-md" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Contato</h3>
        <p className="text-gray-400 mt-2">Para comissões e parcerias, envie e-mail ou preencha o formulário.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
            <h4 className="font-semibold">E-mail</h4>
            <p className="text-sm text-gray-400 mt-2">takyll@example.com</p>
            <h4 className="font-semibold mt-6">Redes</h4>
            <div className="mt-2 text-sm text-gray-400">Instagram: @takyll • Twitter: @takyll_art</div>
          </div>
          <form className="p-6 bg-gray-900 rounded-lg border border-gray-800" onSubmit={(e) => { e.preventDefault(); alert('Formulário enviado (exemplo). Abra o arquivo para integrar com backend).'); }}>
            <label className="block text-sm text-gray-300">Nome</label>
            <input required className="mt-1 w-full rounded-md p-2 bg-gray-800 border border-gray-700 text-white text-sm" />
            <label className="block text-sm text-gray-300 mt-3">E-mail</label>
            <input required type="email" className="mt-1 w-full rounded-md p-2 bg-gray-800 border border-gray-700 text-white text-sm" />
            <label className="block text-sm text-gray-300 mt-3">Mensagem</label>
            <textarea required className="mt-1 w-full rounded-md p-2 bg-gray-800 border border-gray-700 text-white text-sm h-28" />
            <button type="submit" className="mt-4 px-4 py-2 bg-red-500 rounded-md">Enviar</button>
          </form>
        </div>
      </section>

      <footer className="mt-12 border-t border-gray-900 py-6 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Takyll — All rights reserved</div>
          <div className="mt-3 md:mt-0"></div>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/70" onClick={closeModal} />
          <div className="relative max-w-4xl w-full rounded-lg overflow-hidden bg-gray-900 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <img src={filtered[activeIndex].src} alt={filtered[activeIndex].title} className="w-full h-[60vh] object-contain rounded-md" />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg">{filtered[activeIndex].title}</div>
                    <div className="text-sm text-gray-400">{filtered[activeIndex].year} • {filtered[activeIndex].category}</div>
                    <p className="text-sm text-gray-300 mt-2">{filtered[activeIndex].description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={prev} className="px-3 py-2 bg-gray-800 rounded-md">Prev</button>
                    <button onClick={next} className="px-3 py-2 bg-gray-800 rounded-md">Next</button>
                    <button onClick={() => { navigator.clipboard?.writeText(window.location.href); }} className="px-3 py-2 bg-gray-800 rounded-md">Copy Link</button>
                    <button onClick={closeModal} className="px-3 py-2 bg-red-500 rounded-md">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
