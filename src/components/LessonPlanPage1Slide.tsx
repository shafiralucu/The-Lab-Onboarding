import React, { useState } from 'react';
import { 
  Zap, 
  Scissors, 
  Palette, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  Info,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

import page1Img from '../assets/images/lesson_1_2_page1_v2_1789580101624.jpg';

interface LessonPlanPage1SlideProps {
  isDark?: boolean;
}

export const LessonPlanPage1Slide: React.FC<LessonPlanPage1SlideProps> = ({ isDark = false }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<'video' | 'worksheet' | 'art'>('worksheet');

  const cardBorderClass = isDark ? 'border-slate-700' : 'border-slate-200/90';
  const cardBgClass = isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900';
  const innerCardClass = isDark ? 'bg-slate-800/90 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700';
  const textMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 20, 180));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 20, 70));
  const handleResetZoom = () => setZoomLevel(100);

  const materials = [
    { name: 'Paper', type: 'Insulator', icon: '📄', desc: 'Blocks electricity flow' },
    { name: 'Wood', type: 'Insulator', icon: '🪵', desc: 'Blocks electricity flow' },
    { name: 'Hand', type: 'Conductor', icon: '✋', desc: '⚠️ Human body conducts! Danger rule' },
    { name: 'Apple', type: 'Conductor', icon: '🍎', desc: 'Fruit acids/juices conduct' },
    { name: 'Plastic', type: 'Insulator', icon: '🧴', desc: 'Blocks electricity flow' },
    { name: 'Metal Nail', type: 'Conductor', icon: '🔩', desc: 'Metal allows current to flow' },
  ];

  return (
    <div className="w-full flex flex-col justify-between py-1 gap-3">
      {/* Top Banner */}
      <div className={`p-3 sm:p-4 rounded-2xl border shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isDark 
          ? 'bg-indigo-950/70 border-indigo-800 text-slate-100' 
          : 'bg-gradient-to-r from-indigo-50/90 via-sky-50/80 to-purple-50/80 border-indigo-200 text-indigo-950'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
            P4
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                Lesson Plan Scan · Page 4
              </span>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Duration: 40 mins
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold">
              Electric Circuits & Conductivity: Video, 6-Item Worksheet & Lighted Card
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Maximize2 size={13} />
            <span>Full-Screen Inspection</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Split: Image Scan on Left, Interactive Breakdown on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start flex-1">
        
        {/* Left Column: Scanned Document Page 4 (5 cols) */}
        <div className={`lg:col-span-5 border-2 rounded-2xl p-3 sm:p-4 flex flex-col shadow-xs ${cardBgClass} ${cardBorderClass}`}>
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <h4 className="text-xs sm:text-sm font-bold">Official Document Page 4</h4>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1">
              <button 
                onClick={handleZoomOut} 
                className="p-1 rounded-md border text-xs hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut size={13} />
              </button>
              <span className="text-xs font-mono px-1.5 font-semibold text-slate-500">
                {zoomLevel}%
              </span>
              <button 
                onClick={handleZoomIn} 
                className="p-1 rounded-md border text-xs hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn size={13} />
              </button>
              <button 
                onClick={handleResetZoom} 
                className="p-1 rounded-md border text-xs hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer ml-1"
                title="Reset Zoom"
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>

          {/* Document Image Display Container */}
          <div className="relative w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 flex items-center justify-center min-h-[380px] max-h-[520px]">
            <div 
              className="w-full h-full overflow-auto flex items-center justify-center p-2 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                src={page1Img}
                alt="Lesson Plan Page 4: Electric Circuits & Conductivity"
                className="object-contain max-w-none transition-transform duration-200 rounded shadow-md"
                style={{ width: `${zoomLevel}%` }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/lesson_1_2_page1.jpg';
                }}
              />
            </div>

            {/* Click to expand overlay badge */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-slate-900/80 hover:bg-slate-900 text-white rounded-lg text-2xs font-bold backdrop-blur-xs flex items-center gap-1 border border-white/20 transition-all cursor-pointer shadow-xs"
            >
              <Maximize2 size={11} />
              <span>Inspect Scan</span>
            </button>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-2xs text-slate-500 dark:text-slate-400">
            <span>Includes: Learning Objectives, Video Intro, Cut & Paste Table</span>
            <span className="font-mono font-bold text-indigo-500">Page 4 of docx</span>
          </div>
        </div>

        {/* Right Column: Deep-Dive Pedagogical Breakdown (7 cols) */}
        <div className={`lg:col-span-7 border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs ${cardBgClass} ${cardBorderClass}`}>
          <div>
            {/* Section Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 mb-3.5">
              <button
                onClick={() => setActiveSection('worksheet')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeSection === 'worksheet'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Scissors size={14} />
                <span>Cut & Paste + Cody Kit</span>
              </button>

              <button
                onClick={() => setActiveSection('video')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeSection === 'video'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Zap size={14} />
                <span>Video & Safety (20m)</span>
              </button>

              <button
                onClick={() => setActiveSection('art')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeSection === 'art'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Palette size={14} />
                <span>Lighted Card (20m)</span>
              </button>
            </div>

            {/* TAB 1: The Cut & Paste Worksheet & Cody Kit (The most crucial mentor test) */}
            {activeSection === 'worksheet' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-3 rounded-xl border ${
                  isDark ? 'bg-amber-950/30 border-amber-800 text-amber-200' : 'bg-amber-50 border-amber-300 text-amber-950'
                }`}>
                  <strong className="block font-bold text-xs sm:text-sm mb-1 flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <AlertCircle size={16} />
                    <span>The Lesson Plan "Trap" & The Cody Kit Solution:</span>
                  </strong>
                  <p className="text-xs leading-relaxed">
                    The document shows 6 cards in a box and simply states: <em>"Complete the worksheet."</em>
                    <strong> Mentors will fail trainees who just let children guess and glue!</strong> Instructors must distribute the physical <strong>Cody Conductor/Insulator Tester Kit</strong> so students empirically test each material!
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {materials.map((m) => (
                    <div 
                      key={m.name}
                      className={`p-2.5 rounded-xl border ${innerCardClass} flex flex-col justify-between`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-base">{m.icon}</span>
                        <strong className="font-bold text-xs">{m.name}</strong>
                      </div>
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-2xs font-bold mb-1 ${
                          m.type === 'Conductor'
                            ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {m.type}
                        </span>
                        <p className="text-2xs text-slate-500 dark:text-slate-400 leading-tight">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                  <strong className="block font-bold text-xs mb-1 text-indigo-500">
                    How to Facilitate with Cody Tester Kit:
                  </strong>
                  <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    <li>Students cut out the 6 printed sample cards from the worksheet.</li>
                    <li>Instructors pass the Cody Conductor/Insulator Tester Kit with probe leads.</li>
                    <li>Children touch the leads to real items (metal nail, wooden block, water cup).</li>
                    <li>If Cody's light turns ON, it is a conductor! If not, it is an insulator.</li>
                    <li>Students paste each card into the validated column with scientific confidence!</li>
                  </ol>
                </div>
              </div>
            )}

            {/* TAB 2: Video & Safety Delivery */}
            {activeSection === 'video' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                  <strong className="block font-bold text-xs sm:text-sm mb-1 text-indigo-600 dark:text-indigo-400">
                    Video & Short Introduction (20 mins):
                  </strong>
                  <ul className="space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span><strong>What is electricity:</strong> Explain as tiny energetic dancers moving through a continuous closed road.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span><strong>Conductor vs Insulator:</strong> For advanced kids, introduce the scientific words "conductor" and "insulator".</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span><strong>Examples in lesson:</strong> Wood, paper, fruits, water, wire, and plastic.</span>
                    </li>
                  </ul>
                </div>

                <div className={`p-3 rounded-xl border ${
                  isDark ? 'bg-rose-950/30 border-rose-800 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-950'
                }`}>
                  <strong className="block font-bold text-xs sm:text-sm mb-1 flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                    <ShieldAlert size={16} />
                    <span>Dangers of Electricity (Oral Check Non-Negotiable):</span>
                  </strong>
                  <p className="text-xs leading-relaxed mb-2">
                    Young children must understand that electricity in wall sockets has high voltage. Teach them:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Never touch wall sockets or poke metal pins into outlets.</li>
                    <li>Never handle plugs or appliances with wet hands (water conducts!).</li>
                    <li>Always ask parents or teachers before plugging anything into a wall.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: Art Activity — Lighted-Up Card */}
            {activeSection === 'art' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Palette size={18} className="text-pink-500" />
                    <strong className="font-bold text-sm text-pink-600 dark:text-pink-400">
                      Art Activity: Lighted-Up Card for Loved Ones (20 mins)
                    </strong>
                  </div>
                  <p className={`text-xs leading-relaxed mb-3 ${textMutedClass}`}>
                    Students build a personalized greeting card that lights up with a green LED bulb when folded or pressed!
                  </p>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs">
                      <strong className="block font-bold text-indigo-600 dark:text-indigo-400 mb-0.5">
                        1. STEAM Engineering Circuit:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-300">
                        Uses copper foil tape as conductive traces, a 3V coin cell battery, and a green LED diode. Teaches polarity (+/-) and folding the paper corner as a mechanical switch!
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs">
                      <strong className="block font-bold text-pink-600 dark:text-pink-400 mb-0.5">
                        2. Tangible Take-Home Pride:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-300">
                        Children take this physical artifact home to show mom and dad. Parents immediately see tangible proof of creative technology learning!
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                      <strong className="block font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                        3. Artistic Creative Storytelling:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-300">
                        Kids draw a car headlight, birthday candle, or glowing lighthouse to bring the circuit to life.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Callout & Page Indicator */}
          <div className={`mt-3 pt-2.5 border-t text-xs flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={15} className="text-emerald-500" />
              <span>Page 4 mastered! See Page 5 for Snap Circuits & Mini House</span>
            </span>
            <span className="font-bold text-indigo-500 font-mono">
              Total 40 mins
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal for High-Res Inspection */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-xs">
                P4
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">
                  Lesson 1.2 Document Scan · Page 4
                </h3>
                <p className="text-2xs text-slate-300">
                  Electric Circuits & Electrical Conductivity (Learning Objectives & Table)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut size={16} />
              </button>
              <span className="text-xs font-mono font-bold px-2 text-white">
                {zoomLevel}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs cursor-pointer ml-3 flex items-center gap-1 font-bold"
              >
                <X size={16} />
                <span>Close</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-auto flex items-center justify-center p-4">
            <img
              src={page1Img}
              alt="Lesson Plan Page 4 High Resolution"
              className="max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform"
              style={{ width: `${zoomLevel}%` }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/lesson_1_2_page1.jpg';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
