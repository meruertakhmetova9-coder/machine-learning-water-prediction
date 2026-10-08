import React from 'react';
import { X, Mic, Volume2, Copy, Check } from 'lucide-react';
import { SlideData } from '../types';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  slideIndex: number;
  totalSlides: number;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
  slideIndex,
  totalSlides
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(slide.speakerNotes);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-base">
                Баяндамашы сөзі (Спикер жазбасы)
              </h3>
              <p className="text-xs text-slate-500">
                {slideIndex + 1}-слайд: {slide.title} ({slideIndex + 1}/{totalSlides})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 flex items-center gap-1.5">
            <Volume2 className="w-4 h-4" /> Қорғау барысында айтылатын баяндама мәтіні:
          </div>
          <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-xl text-slate-800 text-base leading-relaxed font-sans">
            "{slide.speakerNotes}"
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Орындаған: Ахметова Меруерт • Қорқыт Ата атындағы университет</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Көшірілді' : 'Мәтінді көшіру'}
            </button>
          </div>
        </div>

        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition"
          >
            Жабу
          </button>
        </div>
      </div>
    </div>
  );
};
