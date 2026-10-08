import React from 'react';
import { SLIDES_META } from '../data/slidesData';
import { SlideContent } from './SlideContent';
import { Printer, ArrowLeft } from 'lucide-react';

interface AllSlidesPrintViewProps {
  onBack: () => void;
}

export const AllSlidesPrintView: React.FC<AllSlidesPrintViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-100 py-6 px-4 print:p-0 print:bg-white">
      {/* Top action bar (hidden in print) */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm print:hidden">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Презентацияға оралу
        </button>

        <div className="text-center">
          <h2 className="text-sm font-bold text-slate-800">
            Барлық 10 слайд (Басып шығару немесе PDF түрінде сақтау)
          </h2>
          <p className="text-xs text-slate-500">
            Ctrl+P немесе «Басып шығару» батырмасын басыңыз
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold shadow-sm transition cursor-pointer"
        >
          <Printer className="w-4 h-4" /> Басып шығару / PDF
        </button>
      </div>

      {/* Slides list */}
      <div className="max-w-5xl mx-auto space-y-8 print:space-y-0">
        {SLIDES_META.map((slide, idx) => (
          <div
            key={slide.id}
            className="w-full aspect-[16/9] bg-white rounded-2xl border border-slate-300 shadow-lg overflow-hidden print:border-none print:shadow-none print:rounded-none print:break-after-page print:m-0 print:w-full print:h-[100vh]"
          >
            <SlideContent slideId={slide.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
