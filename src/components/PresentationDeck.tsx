import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_LIST } from '../data/slides';
import { SlideContent } from './SlideContent';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  Layers,
  Sun,
  Moon
} from 'lucide-react';

export const PresentationDeck: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('thelab-theme') === 'dark';
    } catch {
      return false;
    }
  });

  const totalSlides = SLIDES_LIST.length;
  const currentSlide = SLIDES_LIST[currentIndex];

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const next = !prev;
      try {
        localStorage.setItem('thelab-theme', next ? 'dark' : 'light');
      } catch (err) {
        console.error('Failed to save theme to localStorage', err);
      }
      return next;
    });
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, totalSlides]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.error(`Error attempting to exit fullscreen: ${err.message}`);
        });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with an input or select
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.code === 'Space' || e.code === 'ArrowRight' || e.code === 'ArrowDown' || e.code === 'PageDown') {
        e.preventDefault();
        goToNext();
      } else if (e.code === 'ArrowLeft' || e.code === 'ArrowUp' || e.code === 'PageUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentIndex(totalSlides - 1);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'd') {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, totalSlides, toggleTheme]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className={`w-full h-screen max-h-screen overflow-hidden flex flex-col justify-between select-none transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    }`}>
      {/* Top Header & Progress Bar */}
      <header className={`w-full border-b shrink-0 z-30 transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200/90 text-slate-900'
      }`}>
        {/* Progress Bar at the very top edge */}
        <div className={`w-full h-1 overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 h-13 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white text-xs sm:text-sm tracking-wider shadow-xs">
              TL
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm font-bold tracking-tight flex items-center gap-2">
                <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>The Lab Instructor Onboarding</span>
                <span className={`hidden sm:inline-block ${isDarkMode ? 'text-slate-700' : 'text-slate-300'}`}>|</span>
                <span className={`hidden sm:inline-block text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  10-Week Training & Performance Deck
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Slide Selector Dropdown */}
            <select
              value={currentIndex}
              onChange={(e) => goToSlide(Number(e.target.value))}
              aria-label="Select slide"
              className={`text-xs sm:text-sm font-bold rounded-xl px-3 py-1.5 transition-colors cursor-pointer outline-none border focus:ring-2 focus:ring-indigo-500 ${
                isDarkMode 
                  ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750' 
                  : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {SLIDES_LIST.map((s, idx) => (
                <option key={s.id} value={idx}>
                  Slide {idx + 1}: {s.title.replace(/[^\x00-\x7F]/g, '').trim()}
                </option>
              ))}
            </select>

            {/* Top Slide Counter */}
            <span className={`hidden md:inline-flex px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-bold border ${
              isDarkMode 
                ? 'bg-indigo-950/80 border-indigo-800 text-indigo-300' 
                : 'bg-indigo-50 border-indigo-100 text-indigo-700'
            }`}>
              {currentIndex + 1} / {totalSlides}
            </span>

            {/* Dark/Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                isDarkMode
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700 shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 shadow-xs'
              }`}
              title={isDarkMode ? 'Switch to Light Mode (D)' : 'Switch to Dark Mode (D)'}
              aria-label="Toggle Dark or Light Mode"
            >
              {isDarkMode ? (
                <>
                  <Sun size={16} className="text-amber-300" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon size={16} className="text-indigo-600" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className={`p-2 rounded-xl transition-colors border cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
              title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Full-Screen Presentation Canvas (Edge-to-Edge, full responsiveness) */}
      <main className={`flex-1 min-h-0 w-full max-w-[1700px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 flex flex-col justify-between overflow-hidden transition-colors ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}>
        <div 
          key={currentSlide.id}
          className="slide-transition w-full h-full flex flex-col justify-between overflow-hidden"
        >
          {/* Slide Top Bar */}
          <div className={`flex items-start justify-between gap-4 pb-2 sm:pb-3 shrink-0 border-b ${
            isDarkMode ? 'border-slate-800' : 'border-slate-200/90'
          }`}>
            <div>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-1.5 border ${
                isDarkMode 
                  ? 'bg-indigo-950/80 border-indigo-700 text-indigo-300' 
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}>
                <Layers size={14} />
                <span>{currentSlide.tag}</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {currentSlide.title}
              </h2>
              {currentSlide.subtitle && (
                <p className={`text-sm sm:text-base md:text-lg font-medium mt-1 leading-snug ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Index Badge */}
            <div className="shrink-0 hidden sm:flex flex-col items-end">
              <span className={`px-4 py-1.5 rounded-xl border text-sm sm:text-base font-mono font-bold ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-200' 
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                {currentSlide.slideNumber} / {totalSlides}
              </span>
              <span className={`text-xs font-semibold mt-1 uppercase tracking-wider ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                The Lab Training
              </span>
            </div>
          </div>

          {/* Slide Dynamic Body (Smooth vertical scrolling prevents any content from being blocked/clipped) */}
          <div className="flex-1 min-h-0 py-1.5 sm:py-2 flex flex-col justify-start overflow-y-auto slide-scroll-container pr-0.5 sm:pr-1">
            <SlideContent slide={currentSlide} isDark={isDarkMode} />
          </div>

          {/* Slide Bottom Metadata */}
          <div className={`pt-2 border-t flex items-center justify-between text-xs sm:text-sm shrink-0 ${
            isDarkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span className={`font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                The Lab Singapore & Indonesia
              </span>
              <span>•</span>
              <span>Instructor Onboarding Program</span>
            </div>
            <div className={`font-mono font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Slide {currentSlide.slideNumber} of {totalSlides}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <footer className={`w-full border-t py-2.5 px-4 sm:px-8 lg:px-12 shrink-0 z-30 transition-colors ${
        isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200/90 text-slate-900'
      }`}>
        <div className="w-full flex items-center justify-between gap-3">
          {/* Keyboard navigation hint */}
          <div className={`hidden lg:flex items-center gap-2 text-xs font-medium ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            <span>Shortcuts:</span>
            <kbd className={`px-2 py-0.5 border rounded text-xs font-mono ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>←</kbd>
            <kbd className={`px-2 py-0.5 border rounded text-xs font-mono ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>→</kbd>
            <kbd className={`px-2 py-0.5 border rounded text-xs font-mono ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>Space</kbd>
            <span className={isDarkMode ? 'text-slate-700' : 'text-slate-300'}>•</span>
            <kbd className={`px-2 py-0.5 border rounded text-xs font-mono ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>D</kbd>
            <span>dark/light</span>
            <span className={isDarkMode ? 'text-slate-700' : 'text-slate-300'}>•</span>
            <kbd className={`px-2 py-0.5 border rounded text-xs font-mono ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>F</kbd>
            <span>fullscreen</span>
          </div>

          {/* Slide Quick Navigator Dots */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1">
            {SLIDES_LIST.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'w-7 sm:w-9 h-3 bg-indigo-500 rounded-full shadow-xs'
                    : isDarkMode 
                    ? 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-700 hover:bg-slate-500 rounded-full'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-200 hover:bg-slate-400 rounded-full'
                }`}
                title={`Jump to Slide ${idx + 1}: ${s.title}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons with Bigger Labels */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                currentIndex === 0
                  ? isDarkMode 
                    ? 'bg-slate-800/50 text-slate-600 border border-slate-800 cursor-not-allowed'
                    : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
                  : isDarkMode
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-xs'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Prev</span>
            </button>

            <span className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold sm:hidden ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-700'
            }`}>
              {currentIndex + 1}/{totalSlides}
            </span>

            <button
              onClick={goToNext}
              disabled={currentIndex === totalSlides - 1}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer ${
                currentIndex === totalSlides - 1
                  ? isDarkMode 
                    ? 'bg-slate-800/50 text-slate-600 border border-slate-800 cursor-not-allowed'
                    : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'
              }`}
            >
              <span>{currentIndex === totalSlides - 1 ? 'End' : 'Next'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
