import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type ImageModalProps = {
  images: {
    image: string;
    title: string;
  }[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function ImageModal({
  images,
  activeIndex,
  onChange,
  onClose,
}: ImageModalProps) {
  if (!images.length) return null;

  const currentImage = images[activeIndex];

  const nextImage = () => {
    onChange((activeIndex + 1) % images.length);
  };

  const previousImage = () => {
    onChange((activeIndex - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {currentImage && (
        <motion.div
          className="fixed inset-0 z-200 flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-bg-dark/95 p-4 backdrop-blur-md ipad:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-bg/70 text-muted backdrop-blur-md transition-all hover:border-blue hover:text-white ipad:right-8 ipad:top-8"
            aria-label="Close image preview"
          >
            <X size={20} />
          </button>
          {/* Image */}
          <motion.img
            key={currentImage.image}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[calc(100dvh-180px)] max-w-[90vw] rounded-xl object-contain shadow-[0_0_80px_rgba(55,168,255,0.15)] ipad:max-h-[calc(100dvh-160px)] ipad:max-w-[85vw]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />

          {/* Navigation */}
          {images.length > 1 && (
            <div className="fixed bottom-3 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 ipad:bottom-5">
              {/* Previous */}
              <button
                type="button"
                onClick={previousImage}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-bg/70 text-muted backdrop-blur-md transition-all hover:border-blue hover:text-white"
                aria-label="Previous image"
              >
                <ArrowLeft size={22} />
              </button>

              {/* Counter */}
              <div className="flex h-10 min-w-20 items-center justify-center rounded-full border border-white/10 bg-bg/70 px-4 text-sm font-medium text-muted backdrop-blur-md">
                {activeIndex + 1} / {images.length}
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={nextImage}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-bg/70 text-muted backdrop-blur-md transition-all hover:border-purple hover:text-white"
                aria-label="Next image"
              >
                <ArrowRight size={22} />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
