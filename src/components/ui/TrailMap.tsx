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
      label: "Nossa Carta", 
      description: "Palavras que guardam o nosso encontro, nossos sentimentos e cada detalhe do que construímos juntos.", 
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

// Componente para corações e luzes douradas flutuantes no cenário elegante
function RomanticAtmosphere() {
  const [elements, setElements] = useState<Array<{ id: number; left: string; delay: number; duration: number; size: number; isSparkle: boolean }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 14, 
      size: Math.random() * 10 + 12,
      isSparkle: i % 3 === 0
    }));
    setElements(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute bottom-[-50px]"
          style={{ left: el.left }}
          initial={{ y: 0, opacity: 0, scale: 0.5 }}
          animate={{ 
            y: "-120vh", 
            opacity: [0, 0.45, 0.7, 0.45, 0],
            x: el.id % 2 === 0 ? [0, 35, -35, 0] : [0, -35, 35, 0]
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        >
          {el.isSparkle ? (
            <Sparkles size={el.size} className="text-amber-400/40" />
          ) : (
            <Heart size={el.size} className="text-rose-400/35 fill-rose-300/35" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function PhotoSlot({ id, x, y, rotate, video }: { id: number; x: number; y: number, rotate: string, video: string }) {
  return (
    <div
      className={`absolute flex aspect-[3/4] w-[28%] max-w-[195px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-md bg-[#FFFDFB]/95 backdrop-blur-md border-[8px] border-white shadow-[0_15px_35px_rgba(136,19,55,0.12)] transition-all duration-700 hover:scale-105 hover:rotate-0 hover:z-40 ${rotate}`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="flex-1 w-full flex items-center justify-center bg-stone-900/5 border border-stone-200/60 overflow-hidden rounded-xs relative">
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
      <span className="font-serif italic text-[11px] tracking-wider text-stone-500 pb-0.5">
        Lembrança {String(id).padStart(2, "0")}
      </span>
    </div>
  );
}

// Imagem inteligente que tenta extensões maiúsculas/minúsculas ou ignora se estiver corrompida
function SmartAlbumImage({ 
  src, 
  alt, 
  onUnrecoverableError 
}: { 
  src: string; 
  alt: string; 
  onUnrecoverableError: (badSrc: string) => void;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setTriedFallback(false);
  }, [src]);

  const handleError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
      if (currentSrc.endsWith(".jpg")) {
        setCurrentSrc(currentSrc.slice(0, -4) + ".JPG");
      } else if (currentSrc.endsWith(".JPG")) {
        setCurrentSrc(currentSrc.slice(0, -4) + ".jpg");
      } else {
        onUnrecoverableError(src);
      }
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

function GlassModal({ 
  stop, 
  gallery, 
  onRemoveBrokenImage, 
  onClose 
}: { 
  stop: any; 
  gallery: string[];
  onRemoveBrokenImage: (badSrc: string) => void;
  onClose: () => void;
}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Garante que o índice nunca fique fora do limite se uma imagem quebrada for removida
  const safeIndex = gallery.length > 0 ? currentPhotoIndex % gallery.length : 0;

  // Pré-carrega a próxima imagem e a anterior para transição instantânea sem travar
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
    if (gallery.length > 0) {
      setCurrentPhotoIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const prevPhoto = () => {
    if (gallery.length > 0) {
      setCurrentPhotoIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-stone-950/60 backdrop-blur-md p-4"
    >
      <motion.article
        initial={{ y: 20, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="w-full max-w-sm overflow-hidden rounded-2xl bg-[#FDFBF9] border border-amber-100/80 shadow-2xl p-6 relative"
      >
        <header className="flex items-start justify-between gap-4 relative z-10">
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
            className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100/60 hover:bg-rose-200 text-rose-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {stop.hasGallery && gallery.length > 0 ? (
          <div className="mt-6 flex flex-col items-center">
            <div className="relative flex aspect-[4/5] w-full items-center justify-center bg-white p-3 pb-11 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#EBE3D5] rounded-sm">
              
              {/* Moldura interna com transição ultra fluida */}
              <div className="relative w-full h-full overflow-hidden rounded-xs flex items-center justify-center bg-stone-100">
                <AnimatePresence mode="sync" initial={false}>
                  <SmartAlbumImage
                    key={gallery[safeIndex]}
                    src={gallery[safeIndex]}
                    alt={`Lembrança ${safeIndex + 1}`}
                    onUnrecoverableError={onRemoveBrokenImage}
                  />
                </AnimatePresence>
              </div>

              {/* Setas para folhear o álbum */}
              <div className="absolute inset-y-0 left-1.5 right-1.5 flex items-center justify-between pointer-events-none px-1 z-20">
                <button 
                  type="button"
                  onClick={prevPhoto} 
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-stone-800 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition"
                >
                  <ChevronLeft className="h-5 w-5 ml-[-2px]" />
                </button>
                <button 
                  type="button"
                  onClick={nextPhoto} 
                  className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-stone-800 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition"
                >
                  <ChevronRight className="h-5 w-5 mr-[-2px]" />
                </button>
              </div>

              <div className="absolute bottom-2.5 text-center w-full z-10 pointer-events-none">
                <p className="font-serif text-xs italic text-stone-600">
                  Memória {safeIndex + 1} de {gallery.length}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-lg bg-rose-50/50 border border-rose-100/80 shadow-inner relative z-10 overflow-hidden">
            <img src={stop.icon || "/assets/album.png"} alt={stop.label} className="w-12 h-12 object-contain opacity-75 drop-shadow-sm" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-rose-500 font-medium">
              {stop.id === 2 ? "Nossa Carta Especial" : "Capítulo da Nossa História"}
            </p>
          </div>
        )}

        <p className="mt-6 text-sm leading-relaxed text-stone-600 font-medium relative z-10 text-center px-2">
          {stop.description}
        </p>
      </motion.article>
    </motion.div>
  );
}

export function TrailMap() {
  const [avatarPosition, setAvatarPosition] = useState({ 
    x: presentData.stops[0].x, 
    y: presentData.stops[0].y 
  });
  
  const [targetStop, setTargetStop] = useState<any | null>(null);
  const [activeModalData, setActiveModalData] = useState<any | null>(null);
  const [validGallery, setValidGallery] = useState<string[]>(INITIAL_GALLERY);

  // Filtra em segundo plano qualquer imagem que não possa ser lida pelo navegador logo ao abrir a página
  useEffect(() => {
    INITIAL_GALLERY.forEach((src) => {
      const img = new Image();
      img.onload = () => {};
      img.onerror = () => {
        const altSrc = src.endsWith(".jpg")
          ? src.slice(0, -4) + ".JPG"
          : src.endsWith(".JPG")
          ? src.slice(0, -4) + ".jpg"
          : null;

        if (altSrc) {
          const altImg = new Image();
          altImg.onload = () => {
            setValidGallery((prev) => prev.map((item) => (item === src ? altSrc : item)));
          };
          altImg.onerror = () => {
            setValidGallery((prev) => prev.filter((item) => item !== src));
          };
          altImg.src = altSrc;
        } else {
          setValidGallery((prev) => prev.filter((item) => item !== src));
        }
      };
      img.src = src;
    });
  }, []);

  const handleRemoveBrokenImage = (badSrc: string) => {
    setValidGallery((prev) => prev.filter((item) => item !== badSrc));
  };

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
    <section className="min-h-screen w-full relative overflow-hidden bg-[#FAF6F0]">
      
      {/* Cenário Elegante e Romântico: Gradientes quentes de Champagne, Rosé suave e Âmbar */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(254, 205, 211, 0.45) 0%, transparent 45%),
            radial-gradient(circle at 85% 30%, rgba(253, 230, 138, 0.35) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(251, 207, 232, 0.4) 0%, transparent 55%),
            linear-gradient(135deg, #FFFDFB 0%, #FDF5EF 45%, #F9EAE1 100%)
          `
        }}
      />

      {/* Textura sutil de papel de carta/álbum clássico e moldura interna elegante */}
      <div className="absolute inset-3 md:inset-6 border border-amber-900/10 rounded-3xl pointer-events-none z-10 shadow-[inset_0_0_80px_rgba(244,63,94,0.04)]" />

      {/* Corações e brilhos dourados flutuantes */}
      <RomanticAtmosphere />

      {/* Trilha elegante com brilho suave conectando as paradas */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Sombra/Brilho da trilha */}
        <path
          d="M 26,26 C 60,26 60,44 74,44 S 40,62 26,62 S 60,84 72,84"
          fill="none"
          stroke="rgba(251, 113, 133, 0.15)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Linha pontilhada fina romântica */}
        <path
          d="M 26,26 C 60,26 60,44 74,44 S 40,62 26,62 S 60,84 72,84"
          fill="none"
          stroke="rgba(190, 18, 60, 0.4)"
          strokeWidth="0.3"
          strokeDasharray="1.2, 1.8"
          strokeLinecap="round"
        />
      </svg>

      {/* Cabeçalho elegante */}
      <header className="absolute inset-x-0 top-0 z-30 px-6 pt-10 md:pt-12 text-center flex flex-col items-center pointer-events-none">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col items-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-rose-700 mb-3 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xs border border-rose-200/60">
            {presentData.header.subtitle}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 drop-shadow-xs">
            {presentData.header.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 opacity-60">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-rose-400" />
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-rose-400" />
          </div>
        </motion.div>
      </header>

      {/* Cards de Vídeo (Polaroids) */}
      {presentData.photoSlots.map((slot) => (
        <PhotoSlot key={slot.id} {...slot} />
      ))}

      {/* Pontos de Parada da Nossa História */}
      {presentData.stops.map((stop) => (
        <button
          key={stop.id}
          type="button"
          onClick={() => handleStopClick(stop)}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2.5 transition-transform duration-500 hover:scale-110 active:scale-95 group"
          style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
        >
          {stop.icon ? (
            <>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-rose-300/30 rounded-full blur-xl scale-75 group-hover:scale-110 transition-transform" />
                <img 
                  src={stop.icon} 
                  alt={stop.label} 
                  className="relative w-16 h-16 object-contain drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-1.5"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-800 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-md border border-amber-900/10 transition-colors group-hover:bg-white group-hover:text-rose-600">
                {stop.label}
              </span>
            </>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 shadow-lg border-2 border-white text-white font-serif text-lg transition-transform group-hover:-translate-y-1">
                {stop.id}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-stone-800 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-amber-900/10 transition-colors group-hover:text-rose-600">
                {stop.label}
              </span>
            </div>
          )}
        </button>
      ))}

      {/* Avatar do Casal */}
      <motion.div
        className="absolute z-30 -translate-x-1/2 -translate-y-[80%] pointer-events-none"
        animate={{ left: `${avatarPosition.x}%`, top: `${avatarPosition.y}%` }}
        transition={{ type: "tween", duration: 3.0, ease: "easeInOut" }}
        onAnimationComplete={handleWalkComplete}
      >
        <div className="relative">
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-9 h-3 bg-stone-950/20 rounded-full blur-[3px]" />
          <img
            src="/assets/avatar.png"
            alt="Avatar"
            className="relative w-16 h-16 rounded-full object-cover shadow-xl bg-white p-1 border-2 border-amber-100"
          />
        </div>
      </motion.div>

      {/* Modal de Capítulos e Álbum de Memórias */}
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