import React, { useState } from "react";

const GALLERY = [
  {
    id: 1,
    title: "Homem Aranha, Marvel Comics",
    src: "/images/image1.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 2,
    title: "Natal Macabro",
    src: "/images/image2.jpg",
    category: "Fanart",
    year: 2024,
    description: "",
  },
  {
    id: 3,
    title: "You make me Juno, OW2",
    src: "/images/image3.jpg",
    category: "Fanart",
    year: 2024,
    description: "",
  },
  {
    id: 4,
    title: "Nosferatu",
    src: "/images/image5.jpg",
    category: "Fanart",
    year: 2024,
    description: "",
  },
    {
    id: 5,
    title: "Nosferatu Livro",
    src: "/images/image19.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 6,
    title: "Missão Cósmica - Capa de Livro",
    src: "/images/image6.jpg",
    category: "Original",
    year: 2025,
    description: "",
  },
  {
    id: 7,
    title: "Circe - Personagem de RPG",
    src: "/images/image7.jpg",
    category: "Original",
    year: 2025,
    description: "",
  },
  {
    id: 8,
    title: "GojoGeto, Jujutsu Kaisen",
    src: "/images/image8.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 9,
    title: "Doechii",
    src: "/images/image9.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 10,
    title: "Natal Macabro",
    src: "/images/image10.jpg",
    category: "Fanart",
    year: 2024,
    description: "",
  },
  {
    id: 11,
    title: "Juno, OW2",
    src: "/images/image11.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 12,
    title: "Lara Raj",
    src: "/images/image12.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 13,
    title: "Rumi, K-Pop Demon Hunters",
    src: "/images/image13.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
  {
    id: 14,
    title: "Gwen, Knights of Guinevere",
    src: "/images/image18.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
    {
    id: 15,
    title: "Kirby, Nintendo",
    src: "/images/image14.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
    {
    id: 16,
    title: "The Mitski Club",
    src: "/images/image15.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
    {
    id: 17,
    title: "Kirby Broche, Nintendo",
    src: "/images/image16.jpg",
    category: "Produtos",
    year: 2025,
    description: "",
  },
   {
    id: 18,
    title: "The Mitski Club Broche",
    src: "/images/image17.jpg",
    category: "Produtos",
    year: 2025,
    description: "",
  },
    {
    id: 18,
    title: "Hexatombe",
    src: "/images/image20.jpg",
    category: "Fanart",
    year: 2025,
    description: "",
  },
];

const CATEGORIES = ["All", "Original", "Fanart", "Commissions", "Produtos"];

export default function TakyllPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpenMenu, setModalOpenMenu] = useState(false);

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

  const heroImage = GALLERY[-1]?.src || "/images/image4.jpg";

  return (
    <div className="relative min-h-screen text-gray-100 antialiased overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[#0f0f10] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] animate-gridMotion"></div>
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <header className="w-[90%] max-w-[1600px] mx-auto px-4 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#d945ff] to-[#645394] flex items-center justify-center font-bold text-white shadow-md">
              TAK
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">Takyll</h1>
              <p className="text-xs text-gray-400">
                Illustration & Character Design
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#portfolio" className="hover:text-white">
              Portfólio
            </a>
            <a href="#commissions" className="hover:text-white">
              Comissões
            </a>
            <a href="#contact" className="hover:text-white">
              Contato
            </a>
          </nav>

          <div className="md:hidden relative">
            <button
              onClick={() => setModalOpenMenu((prev) => !prev)}
              className="text-gray-300 border border-gray-700 px-3 py-1 rounded-md"
            >
              Menu
            </button>

            {modalOpenMenu && (
              <div className="absolute right-0 mt-2 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50 flex flex-col">
                <a
                  href="#portfolio"
                  onClick={() => setModalOpenMenu(false)}
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800"
                >
                  Portfólio
                </a>
                <a
                  href="#commissions"
                  onClick={() => setModalOpenMenu(false)}
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800"
                >
                  Comissões
                </a>
                <a
                  href="#contact"
                  onClick={() => setModalOpenMenu(false)}
                  className="px-4 py-2 text-gray-300 hover:bg-gray-800"
                >
                  Contato
                </a>
              </div>
            )}
          </div>
        </header>

        {/* SOBRE MIM */}
        <section className="w-[90%] max-w-[1600px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sobre <span className="text-[#b0ef49]">Mim</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              Olá! Meu nome é Takyll. Sou ilustradora e futura designer,
              apaixonada por transformar ideias em arte. Confira a seguir alguns
              dos meus trabalhos e sinta-se à vontade para entrar em contato!
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#portfolio"
                className="px-4 py-2 bg-[#d945ff] hover:bg-[#645394] rounded-md text-white font-medium"
              >
                Ver Portfólio
              </a>
              <a
                href="#commissions"
                className="px-4 py-2 border border-gray-700 rounded-md text-gray-200"
              >
                Comissões
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <strong>Ferramentas de trabalho:</strong> Crio minhas artes
              principalmente no Krita, explorando cores, luz e expressão em cada
              ilustração.
            </div>
          </div>
          <div className="flex-1 w-full">
            <div
              className="rounded-xl overflow-hidden shadow-xl"
              style={{
                background: "linear-gradient(180deg,#111 0%, #0b0b0c 100%)",
              }}
            >
              <img
                src={heroImage}
                alt="hero"
                className="w-full h-64 object-cover md:h-96"
              />
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="w-[90%] max-w-[1600px] mx-auto px-4 py-12">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-2xl font-bold">Portfólio</h3>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`text-sm px-3 py-1 rounded-full transition ${
                    selectedCategory === c
                      ? "bg-[#b0ef49] text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="relative group cursor-pointer"
                onClick={() => openModal(idx)}
              >
                <div className="aspect-[4/5] w-full rounded-lg overflow-hidden bg-gray-900 shadow-inner">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="text-xs text-gray-400">
                      {item.year} • {item.category}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">↗</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMISSÕES */}
        <section id="commissions" className="w-[90%] max-w-[1600px] mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold">Comissões</h3>
          <p className="text-gray-400 mt-2">
            Valores variam conforme complexidade, poses, fundo e nível de
            detalhamento.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h4 className="font-semibold">Pintura Simples</h4>
              <p className="text-sm text-gray-400 mt-2">
                Arte com line e cores sombreadas de forma simples. Disponível em
                busto, meio corpo ou corpo inteiro.
              </p>
              <div className="mt-4 font-bold">R$ 50 - R$ 80</div>
              <a
                href="#contact"
                className="mt-4 inline-block px-3 py-2 bg-[#d945ff] hover:bg-[#645394] rounded-md text-white transition"
              >
                Solicitar
              </a>
            </div>

            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h4 className="font-semibold">Render (Pintura Completa)</h4>
              <p className="text-sm text-gray-400 mt-2">
                Arte com acabamento completo e pintura detalhada. Disponível
                para busto, meio corpo e corpo inteiro.
              </p>
              <div className="mt-4 font-bold">R$ 85 - R$ 170</div>
              <a
                href="#contact"
                className="mt-4 inline-block px-3 py-2 bg-[#d945ff] hover:bg-[#645394] rounded-md text-white transition"
              >
                Solicitar
              </a>
            </div>

            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h4 className="font-semibold">Ilustração Completa</h4>
              <p className="text-sm text-gray-400 mt-2">
                Ideal para projetos profissionais: capas de livros, cenas
                completas, banners, artes para brindes e materiais promocionais.
              </p>
              <div className="mt-4 font-bold">R$ 200 - R$ 400</div>
              <a
                href="#contact"
                className="mt-4 inline-block px-3 py-2 bg-[#d945ff] hover:bg-[#645394] rounded-md text-white transition"
              >
                Solicitar
              </a>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contact" className="w-[90%] max-w-[1600px] mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold">Contato</h3>
          <p className="text-gray-400 mt-2">
            Entre em contato para comissões, colaborações ou dúvidas sobre meu
            trabalho.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
              <h4 className="font-semibold">E-mail</h4>
              <p className="text-sm text-gray-400 mt-2">
                takyllart07outlook@gmail.com
              </p>
              <h4 className="font-semibold mt-6">Redes</h4>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/takyll?igsh=eG5zdzM0YXhwbWVy"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  ⨯ Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@takylloop?_r=1&_t=ZS-919PfeD9BEw"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  ⨯ TikTok
                </a>
              </div>
            </div>

            <div className="bg-[#0b0f1c] p-6 rounded-xl flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed">
                As solicitações de comissões e dúvidas são realizadas
                diretamente pelo <strong>Instagram</strong>. Assim posso
                conversar com você de forma mais pessoal e entender melhor a sua
                ideia antes de começar a arte.
              </p>
              <p className="text-gray-300 mt-3 leading-relaxed">
                No direct, podemos discutir detalhes como o tipo de desenho,
                estilo, prazos, valores e referências visuais, garantindo que o
                resultado final saia exatamente como você imagina.
              </p>
              <a
                href="https://www.instagram.com/takyll?igsh=eG5zdzM0YXhwbWVy"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#d945ff] hover:bg-[#645394] rounded-md text-white text-lg font-medium transition"
              >
                Falar pelo Instagram
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-gray-900 py-6 text-sm text-gray-500">
          <div className="w-[90%] max-w-[1600px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div>© {new Date().getFullYear()} Takyll — All rights reserved</div>
          </div>
        </footer>

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={closeModal}
            />
            <div className="relative max-w-4xl w-full rounded-lg overflow-hidden bg-gray-900 p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <img
                    src={filtered[activeIndex].src}
                    alt={filtered[activeIndex].title}
                    className="w-full h-[60vh] object-contain rounded-md"
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg">
                        {filtered[activeIndex].title}
                      </div>
                      <div className="text-sm text-gray-400">
                        {filtered[activeIndex].year} •{" "}
                        {filtered[activeIndex].category}
                      </div>
                      <p className="text-sm text-gray-300 mt-2">
                        {filtered[activeIndex].description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="px-3 py-2 bg-gray-800 rounded-md"
                      >
                        Voltar
                      </button>
                      <button
                        onClick={next}
                        className="px-3 py-2 bg-gray-800 rounded-md"
                      >
                        Próximo
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-3 py-2 bg-[#d945ff] rounded-md"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
