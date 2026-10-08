/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { SLIDES_META } from './data/slidesData';
import { SlideContent } from './components/SlideContent';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { AllSlidesPrintView } from './components/AllSlidesPrintView';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  LayoutGrid,
  Mic,
  Printer,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSpeakerNotesOpen, setIsSpeakerNotesOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'presentation' | 'print'>('presentation');

  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'print') return;

      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(SLIDES_META.length - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsSpeakerNotesOpen((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsDrawerOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, viewMode]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const nextSlide = () => {
    if (currentSlideIndex < SLIDES_META.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentSlide = SLIDES_META[currentSlideIndex];
  const progressPercent = ((currentSlideIndex + 1) / SLIDES_META.length) * 100;

  if (viewMode === 'print') {
    return <AllSlidesPrintView onBack={() => setViewMode('presentation')} />;
  }

  return (
    <div
      ref={containerRef}
      className={`min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans select-none ${
        isFullscreen ? 'h-screen w-screen overflow-hidden' : ''
      }`}
    >
      {/* Top Application Bar */}
      <header className="h-14 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
            <h1 className="font-extrabold text-sm md:text-base tracking-tight text-white flex items-center gap-2">
              <span>Су мөлшерін болжау</span>
              <span className="hidden sm:inline text-xs font-normal text-slate-400">
                • Ахметова Меруерт, Әділқасын Аяжан (Жасанды Интеллект институты)
              </span>
            </h1>
          </div>
        </div>

        {/* Center: Slide indicator */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="px-3.5 py-1 bg-blue-600/30 text-blue-300 rounded-full border border-blue-500/40 font-bold">
            Слайд: {currentSlideIndex + 1} / {SLIDES_META.length}
          </div>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          {/* Download Real PPTX Presentation File */}
          <a
            href="/Machine_Learning_Су_Болжау_Ахметова_Меруерт.pptx"
            download="Machine_Learning_Су_Болжау_Ахметова_Меруерт.pptx"
            className="flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg text-xs font-bold shadow-md hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            title="Microsoft PowerPoint (.pptx) файлын толық жүктеп алу"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PowerPoint (.pptx) жүктеу</span>
          </a>

          {/* Speaker Notes */}
          <button
            onClick={() => setIsSpeakerNotesOpen(true)}
            title="Баяндамашы сөзі (Спикер жазбасы) [N]"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium border border-slate-700 transition cursor-pointer"
          >
            <Mic className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden md:inline">Баяндама сөзі</span>
          </button>

          {/* Drawer / Slides Grid */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            title="Барлық слайдтар тізімі [G]"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
              isDrawerOpen
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Слайдтар</span>
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            title="Толық экран режимі [F]"
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1 z-20">
        <div
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Slide Workspace */}
      <main className="flex-1 relative flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/90 overflow-hidden">
        {/* Slide Stage Container: Strict 16:9 ratio with maximum fit */}
        <div className="w-full max-w-[1240px] aspect-[16/9] max-h-[calc(100vh-140px)] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col border border-slate-700/60">
          <SlideContent slideId={currentSlide.id} />
        </div>

        {/* Floating Side Navigation Buttons (Left / Right) */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          title="Алдыңғы слайд (← немесе PageUp)"
          className={`absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition shadow-xl border cursor-pointer ${
            currentSlideIndex === 0
              ? 'opacity-20 cursor-not-allowed bg-slate-800 border-slate-700 text-slate-500'
              : 'bg-slate-900/90 hover:bg-blue-600 text-white border-slate-700 hover:border-blue-500 hover:scale-110 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === SLIDES_META.length - 1}
          title="Келесі слайд (→ немесе Space, PageDown)"
          className={`absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition shadow-xl border cursor-pointer ${
            currentSlideIndex === SLIDES_META.length - 1
              ? 'opacity-20 cursor-not-allowed bg-slate-800 border-slate-700 text-slate-500'
              : 'bg-slate-900/90 hover:bg-blue-600 text-white border-slate-700 hover:border-blue-500 hover:scale-110 active:scale-95'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </main>

      {/* Bottom Floating Control Bar */}
      <footer className="h-14 bg-slate-950 border-t border-slate-800 px-4 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">
            Слайд: <strong className="text-white">{currentSlide.title}</strong>
          </span>
        </div>

        {/* Slide Selector Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-xl py-1">
          {SLIDES_META.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center shrink-0 ${
                currentSlideIndex === idx
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-400/50'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
              title={`${idx + 1}: ${s.title}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Shortcuts Hint */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-400">
          <span className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">← / →</span>
          <span>Бағыттауыш</span>
          <span className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono ml-2">F</span>
          <span>Толық экран</span>
          <span className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono ml-2">N</span>
          <span>Баяндама сөзі</span>
        </div>
      </footer>

      {/* Slide Thumbnails Drawer (Modal Overlay) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-xs flex flex-col justify-end animate-in fade-in duration-200">
          <div className="bg-slate-900 border-t border-slate-700 p-6 rounded-t-3xl shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 font-bold text-white text-base">
                  <LayoutGrid className="w-5 h-5 text-blue-500" />
                  Барлық слайдтар шолуы (10 слайд)
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-slate-300 font-semibold transition"
                >
                  Жабу
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {SLIDES_META.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      setIsDrawerOpen(false);
                    }}
                    className={`flex flex-col text-left p-3 rounded-xl border transition cursor-pointer group ${
                      currentSlideIndex === idx
                        ? 'bg-blue-600/20 border-blue-500 ring-2 ring-blue-500/40 text-white'
                        : 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-slate-700 group-hover:bg-blue-600 transition text-white">
                        #{idx + 1}
                      </span>
                      <span className="text-[10px] text-slate-400">{s.category}</span>
                    </div>
                    <div className="text-xs font-bold line-clamp-2 mt-1 leading-snug">
                      {s.title}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1 mt-1">
                      {s.subtitle}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Speaker Notes Modal */}
      <SpeakerNotesModal
        isOpen={isSpeakerNotesOpen}
        onClose={() => setIsSpeakerNotesOpen(false)}
        slide={currentSlide}
        slideIndex={currentSlideIndex}
        totalSlides={SLIDES_META.length}
      />
    </div>
  );
}
