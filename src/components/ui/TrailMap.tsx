import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const INITIAL_GALLERY = [
  "/assets/inicio de tudo.JPG",
  "/assets/IMG_4777.JPG",
  "/assets/IMG_5003.JPG",
  "/assets/IMG_5115.jpg",
  "/assets/IMG_5619.jpg",
  "/assets/IMG_5874.JPG",
  "/assets/IMG_6015.JPG",
  "/assets/IMG_6204.JPG",
  "/assets/IMG_6275.jpg",
  "/assets/IMG_6393.jpg",
  "/assets/IMG_6427.JPG",
  "/assets/IMG_6493.jpg",
  "/assets/IMG_6585.jpg",
  "/assets/IMG_6688.jpg",
  "/assets/IMG_6697.jpg",
  "/assets/IMG_7377.JPG",
  "/assets/IMG_7420.JPG",
  "/assets/IMG_7634.jpg",
  "/assets/IMG_7666.JPG",
  "/assets/IMG_7735.JPG",
  "/assets/IMG_7779.JPG",
  "/assets/IMG_7864.jpg",
  "/assets/primeira que dormiu nos meus braços.JPG"
];

const presentData = {
  header: {
    subtitle: "365 Dias de Amor",
    title: "Nosso primeiro ano",
  },
  stops: [
    { 
      id: 1, 
      label: "O Início", 
      description: "O momento exato em que a nossa história começou a ser escrita e tudo ganhou um novo sentido.", 
      x: 26, 
      y: 26, 
      icon: null 
    },
    { 
      id: 2, 
      label: "Minha Declaração de Amor", 
      description: `Oiii, minha princesa! ❤️

Hoje a gente completa nosso primeiro ano oficial, 365 dias juntos, e é muito bom parar pra pensar em tudo que vivemos até aqui. Às vezes fico lembrando de como tudo começou e de como, aos poucos, você foi se tornando alguém tão importante pra mim. Hoje meu coração é cheio de amor e gratidão por ter você na minha vida.

Lembro que, no começo, eu brincava falando que estava te aturando kkkkk. Mas hoje, quando paro pra pensar, vejo o quanto essa brincadeira não fazia sentido. Eu não estava te aturando, estava conhecendo, aos poucos, a pessoa que se tornaria o grande amor da minha vida, minha verdadeira paixão. E olha só, hoje você é muito mais do que minha namorada. É minha melhor amiga, minha companheira pra tudo, minha felicidade de todos os dias, minha estressadinha, minha chorona e minha baixinha que eu tanto amo. Você é tudo isso e muito mais pra mim, e eu sou muito feliz por ter você ao meu lado.

Eu sei que não sou perfeito e que tenho minhas complicações. Sei também que, em alguns momentos, acabo errando na forma de falar ou agir, mas quero que saiba que tenho consciência disso e que procuro melhorar. Não quero que a gente fique preso aos erros ou às coisas que já passaram. Quero que a gente aprenda com tudo e siga construindo algo cada vez melhor. Você é muito importante pra mim, e quero demonstrar isso não só com palavras, mas também nas minhas atitudes.

Uma coisa que gosto muito em nós é a liberdade que tenho de compartilhar minha vida com você, desde as coisas mais importantes até as conversas mais bobas do dia a dia. Gosto de ter você por perto, de dividir meus momentos, de rir com você e até mesmo de conversar sobre coisas que às vezes nem fazem sentido kkkkk. São essas pequenas coisas que fazem tudo ser tão especial.

Agora estamos começando mais uma fase da nossa história, com novos planos, sonhos e objetivos. Sei que ainda temos muito para viver e aprender juntos, e quero estar ao seu lado em cada uma dessas etapas. Quero ver você conquistar suas coisas, quero conquistar as minhas e quero que a gente continue se apoiando e comemorando cada vitória, por menor que seja.

Obrigado por tudo, meu amor! Por todo carinho, pela paciência, por cada momento e por fazer parte da minha vida de uma forma tão especial. Talvez eu nem consiga explicar direito o tamanho do amor que sinto por você, mas espero que consiga perceber isso em cada detalhe e em tudo que faço por nós.

Eu te amo muito, minha princesa! Tenho uma felicidade enorme em poder chamar você de minha e em saber que estamos construindo nossa história juntos. Que esse seja apenas o primeiro de muitos anos, com muito amor, parceria e felicidade.

Feliz nosso dia, meu amorrr! Que venham muitos outros dias 7 e muitas histórias nossas para contar.

Te amo demais! ❤️`, 
      x: 74, 
      y: 44, 
      icon: "/assets/correio.png" 
    },
    { 
      id: 3, 
      label: "Nossas Memórias", 
      description: "Um pouquinho dos nossos melhores momentos. Cada sorriso guarda uma história só nossa.", 
      x: 26, 
      y: 62, 
      icon: "/assets/album.png",
      hasGallery: true
    },
    { 
      id: 4, 
      label: "Nosso Futuro", 
      description: "De mãos dadas, prontos para todos os próximos capítulos que ainda vamos viver lado a lado.", 
      x: 72, 
      y: 84, 
      icon: "/assets/bloco.png" 
    },
  ],
  photoSlots: [
    { id: 1, x: 62, y: 20, rotate: "rotate-[-3deg]", video: "/assets/video_1.mp4" },
    { id: 2, x: 20, y: 45, rotate: "rotate-[2deg]", video: "/assets/video_2.mp4" },
    { id: 3, x: 75, y: 70, rotate: "rotate-[-2deg]", video: "/assets/video_3.mp4" },
    { id: 4, x: 35, y: 82, rotate: "rotate-[3deg]", video: "/assets/video_4.mp4" },
  ]
};

// Atmosfera Romântica com partículas
function RomanticAtmosphere() {
  const [elements, setElements] = useState<Array<{ id: number; left: string; delay: number; duration: number; size: number; isSparkle: boolean }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 12,
      duration: Math.random() * 12 + 15, 
      size: Math.random() * 8 + 10,
      isSparkle: i % 4 === 0
    }));
    setElements(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute bottom-[-50px]"
          style={{ left: el.left }}
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{ 
            y: "-120vh", 
            opacity: [0, 0.6, 0.8, 0.4, 0],
            x: el.id % 2 === 0 ? [0, 40, -40, 0] : [0, -40, 40, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut"
          }}
        >
          {el.isSparkle ? (
            <Sparkles size={el.size} className="text-amber-300/50" strokeWidth={1.5} />
          ) : (
            <Heart size={el.size} className="text-rose-400/30 fill-rose-300/30" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Orbes de luz animadas para o fundo (Efeito Aurora/Glow)
function AnimatedGradientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#FDF8F5]">
      {/* Imagem de Fundo Suavizada */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply transition-opacity duration-1000"
        style={{ backgroundImage: "url('/assets/mapa-fundo.jpg.png')" }}
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      {/* Orbes Animadas */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full bg-rose-200/40 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] -right-[15%] w-[70%] h-[70%] rounded-full bg-amber-100/50 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-[20%] left-[20%] w-[80%] h-[60%] rounded-full bg-pink-200/40 blur-[140px]"
      />
    </div>
  );
}

function PhotoSlot({ id, x, y, rotate, video }: { id: number; x: number; y: number, rotate: string, video: string }) {
  return (
    <div
      className={`absolute flex aspect-[3/4] w-[28%] max-w-[195px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-[#FFFDFB]/90 backdrop-blur-xl border-[6px] border-white shadow-[0_20px_40px_rgba(136,19,55,0.15)] transition-all duration-700 hover:scale-110 hover:rotate-0 hover:z-40 ${rotate}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="flex-1 w-full flex items-center justify-center bg-stone-900/5 border border-stone-200/60 overflow-hidden rounded-sm relative">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover pointer-events-none"
          onEnded={(e) => {
            const v = e.currentTarget;
            v.currentTime = 0;
            v.play().catch(() => {});
          }}
        >
          <source src={video} type="video/mp4" />
          <source src={video.replace(/\.mp4$/i, ".mov")} type="video/quicktime" />
          <source src={video.replace(/\.mp4$/i, ".MOV")} type="video/quicktime" />
        </video>
      </div>
      <span className="font-serif italic text-[11px] tracking-widest text-stone-500 pb-0.5">
        Lembrança {String(id).padStart(2, "0")}
      </span>
    </div>
  );
}

function SmartAlbumImage({ src, alt, onUnrecoverableError }: { src: string; alt: string; onUnrecoverableError: (badSrc: string) => void; }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setTriedFallback(false);
  }, [src]);

  const handleError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
      if (currentSrc.endsWith(".jpg")) setCurrentSrc(currentSrc.slice(0, -4) + ".JPG");
      else if (currentSrc.endsWith(".JPG")) setCurrentSrc(currentSrc.slice(0, -4) + ".jpg");
      else onUnrecoverableError(src);
    } else {
      onUnrecoverableError(src);
    }
  };

  return (
    <motion.img
      key={currentSrc}
      src={currentSrc}
      onError={handleError}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="absolute inset-0 h-full w-full object-cover shadow-inner select-none"
      alt={alt}
      draggable={false}
    />
  );
}

function GlassModal({ stop, gallery, onRemoveBrokenImage, onClose }: { stop: any; gallery: string[]; onRemoveBrokenImage: (badSrc: string) => void; onClose: () => void; }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const safeIndex = gallery.length > 0 ? currentPhotoIndex % gallery.length : 0;

  useEffect(() => {
    if (!stop.hasGallery || gallery.length === 0) return;
    const nextIdx = (safeIndex + 1) % gallery.length;
    const prevIdx = (safeIndex - 1 + gallery.length) % gallery.length;
    [gallery[nextIdx], gallery[prevIdx]].forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [safeIndex, gallery, stop.hasGallery]);

  const nextPhoto = () => {
    if (gallery.length > 0) setCurrentPhotoIndex((prev) => (prev + 1) % gallery.length);
  };
  const prevPhoto = () => {
    if (gallery.length > 0) setCurrentPhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-stone-900/60 backdrop-blur-md p-4"
    >
      <motion.article
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-full max-w-sm overflow-hidden rounded-3xl bg-[#FDFBF9] border border-amber-100/80 shadow-[0_30px_60px_rgba(0,0,0,0.2)] p-6 relative flex flex-col max-h-[90vh]"
      >
        <header className="flex items-start justify-between gap-4 relative z-10 shrink-0">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-500">
              Capítulo {String(stop.id).padStart(2, '0')}
            </p>
            <h2 className="mt-1 font-serif text-3xl font-medium text-stone-900">
              {stop.label}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors shadow-sm shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {stop.hasGallery && gallery.length > 0 ? (
          <div className="mt-6 flex flex-col items-center shrink-0">
            <div className="relative flex aspect-[4/5] w-full items-center justify-center bg-white p-3 pb-11 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#EBE3D5] rounded-md">
              <div className="relative w-full h-full overflow-hidden rounded-sm flex items-center justify-center bg-stone-100">
                <AnimatePresence mode="sync" initial={false}>
                  <SmartAlbumImage
                    key={gallery[safeIndex]}
                    src={gallery[safeIndex]}
                    alt={`Lembrança ${safeIndex + 1}`}
                    onUnrecoverableError={onRemoveBrokenImage}
                  />
                </AnimatePresence>
              </div>

              <div className="absolute inset-y-0 left-1.5 right-1.5 flex items-center justify-between pointer-events-none px-1 z-20">
                <button 
                  type="button"
                  onClick={prevPhoto} 
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-stone-800 shadow-lg hover:bg-white hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronLeft className="h-5 w-5 ml-[-2px]" />
                </button>
                <button 
                  type="button"
                  onClick={nextPhoto} 
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-stone-800 shadow-lg hover:bg-white hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronRight className="h-5 w-5 mr-[-2px]" />
                </button>
              </div>

              <div className="absolute bottom-2.5 text-center w-full z-10 pointer-events-none">
                <p className="font-serif text-xs italic text-stone-500">
                  Memória {safeIndex + 1} de {gallery.length}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-rose-50 to-amber-50/50 border border-rose-100 shadow-inner relative z-10 overflow-hidden shrink-0">
            <img src={stop.icon || "/assets/album.png"} alt={stop.label} className="w-12 h-12 object-contain opacity-70 drop-shadow-md" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-rose-500 font-medium">
              {stop.id === 2 ? "Nossa Carta Especial" : "Capítulo da Nossa História"}
            </p>
          </div>
        )}

        {/* Caixa de texto com scrollbar e alinhamento ajustado */}
        <div className="mt-6 overflow-y-auto pr-2 pb-2 flex-grow min-h-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-rose-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          <p className={`text-sm leading-relaxed text-stone-600 font-medium relative z-10 whitespace-pre-line ${stop.id === 2 ? 'text-left' : 'text-center'}`}>
            {stop.description}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function TrailMap() {
  const [avatarPosition, setAvatarPosition] = useState({ x: presentData.stops[0].x, y: presentData.stops[0].y });
  const [targetStop, setTargetStop] = useState<any | null>(null);
  const [activeModalData, setActiveModalData] = useState<any | null>(null);
  const [validGallery, setValidGallery] = useState<string[]>(INITIAL_GALLERY);

  useEffect(() => {
    INITIAL_GALLERY.forEach((src) => {
      const img = new Image();
      img.onload = () => {};
      img.onerror = () => {
        const altSrc = src.endsWith(".jpg") ? src.slice(0, -4) + ".JPG" : src.endsWith(".JPG") ? src.slice(0, -4) + ".jpg" : null;
        if (altSrc) {
          const altImg = new Image();
          altImg.onload = () => setValidGallery((prev) => prev.map((item) => (item === src ? altSrc : item)));
          altImg.onerror = () => setValidGallery((prev) => prev.filter((item) => item !== src));
          altImg.src = altSrc;
        } else {
          setValidGallery((prev) => prev.filter((item) => item !== src));
        }
      };
      img.src = src;
    });
  }, []);

  const handleRemoveBrokenImage = (badSrc: string) => setValidGallery((prev) => prev.filter((item) => item !== badSrc));

  const handleStopClick = (stop: any) => {
    setActiveModalData(null);
    setTargetStop(stop);
    setAvatarPosition({ x: stop.x, y: stop.y });
  };

  const handleWalkComplete = () => {
    if (targetStop) {
      setActiveModalData(targetStop);
      setTargetStop(null);
    }
  };

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-white">
      
      {/* Fundo Animado Elegante */}
      <AnimatedGradientBackground />

      {/* Partículas e Corações */}
      <RomanticAtmosphere />

      {/* Trilha - Estilo Fio de Ouro Rosa */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M 26,26 C 60,26 60,44 74,44 S 40,62 26,62 S 60,84 72,84"
          fill="none"
          stroke="rgba(251, 113, 133, 0.2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]"
        />
        <path
          d="M 26,26 C 60,26 60,44 74,44 S 40,62 26,62 S 60,84 72,84"
          fill="none"
          stroke="rgba(225, 29, 72, 0.6)"
          strokeWidth="0.4"
          strokeDasharray="1.5, 2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Cabeçalho Flutuante com Fundo de Vidro Suave */}
      <header className="absolute inset-x-0 top-0 z-30 px-6 pt-12 pb-24 text-center flex flex-col items-center pointer-events-none bg-gradient-to-b from-[#FDF8F5]/90 via-[#FDF8F5]/40 to-transparent">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="flex flex-col items-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-rose-600 mb-3 bg-white/80 backdrop-blur-md px-5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-rose-100">
            {presentData.header.subtitle}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-800 drop-shadow-sm">
            {presentData.header.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 opacity-70">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-rose-300" />
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
        </motion.div>
      </header>

      {/* Renderiza as Lembranças (Vídeos) */}
      {presentData.photoSlots.map((slot) => (
        <PhotoSlot key={slot.id} {...slot} />
      ))}

      {/* Pontos Interativos */}
      {presentData.stops.map((stop) => (
        <button
          key={stop.id}
          type="button"
          onClick={() => handleStopClick(stop)}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2.5 transition-all duration-500 hover:scale-110 active:scale-95 group"
          style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
        >
          {stop.icon ? (
            <>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-rose-200/40 rounded-full blur-xl scale-75 group-hover:scale-125 transition-transform duration-700" />
                <img 
                  src={stop.icon} 
                  alt={stop.label} 
                  className="relative w-16 h-16 object-contain drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-700 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-white/50 transition-colors group-hover:bg-white group-hover:text-rose-600">
                {stop.label}
              </span>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 shadow-xl border-[3px] border-white text-white font-serif text-lg transition-transform group-hover:-translate-y-2">
                {stop.id}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-700 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/50 transition-colors group-hover:text-rose-600">
                {stop.label}
              </span>
            </div>
          )}
        </button>
      ))}

      {/* Avatar */}
      <motion.div
        className="absolute z-30 -translate-x-1/2 -translate-y-[80%] pointer-events-none"
        animate={{ left: `${avatarPosition.x}%`, top: `${avatarPosition.y}%` }}
        transition={{ type: "tween", duration: 3.5, ease: "easeInOut" }}
        onAnimationComplete={handleWalkComplete}
      >
        <div className="relative group">
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-rose-950/20 rounded-full blur-[4px]" />
          <img
            src="/assets/avatar.png"
            alt="Avatar"
            className="relative w-16 h-16 rounded-full object-cover shadow-[0_10px_20px_rgba(0,0,0,0.15)] bg-white p-1 border-2 border-rose-100"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {activeModalData && (
          <GlassModal 
            stop={activeModalData} 
            gallery={validGallery}
            onRemoveBrokenImage={handleRemoveBrokenImage}
            onClose={() => setActiveModalData(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}