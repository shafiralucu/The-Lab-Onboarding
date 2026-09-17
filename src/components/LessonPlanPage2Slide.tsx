import React, { useState } from 'react';
import { 
  Zap, 
  HelpCircle, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Home,
  Coffee,
  PackageCheck,
  Sparkles,
  Radio,
  Lightbulb,
  Fan,
  Layers
} from 'lucide-react';

import page2Img from '../assets/images/lesson_1_2_page2_v2_1789580121296.jpg';

interface LessonPlanPage2SlideProps {
  isDark?: boolean;
}

export const LessonPlanPage2Slide: React.FC<LessonPlanPage2SlideProps> = ({ isDark = false }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<'challenge' | 'polarity' | 'house'>('challenge');

  const cardBorderClass = isDark ? 'border-slate-700' : 'border-slate-200/90';
  const cardBgClass = isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900';
  const innerCardClass = isDark ? 'bg-slate-800/90 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700';
  const textMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 20, 180));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 20, 70));
  const handleResetZoom = () => setZoomLevel(100);

  const appliances = [
    { name: 'Light Bulb', rep: 'Desk / Table Lamp', icon: '💡', color: 'text-amber-500' },
    { name: 'Speaker', rep: 'Home Radio', icon: '📻', color: 'text-sky-500' },
    { name: 'Motor', rep: 'Electric Fan', icon: '🌀', color: 'text-teal-500' },
  ];

  return (
    <div className="w-full flex flex-col justify-between py-1 gap-3">
      {/* Top Banner */}
      <div className={`p-3 sm:p-4 rounded-2xl border shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isDark 
          ? 'bg-amber-950/40 border-amber-800 text-amber-100' 
          : 'bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-indigo-50/80 border-amber-200 text-slate-900'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
            P5
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300">
                Lesson Plan Scan · Page 5
              </span>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Duration: 50 mins (10m Break + 10m Intro + 25m Build + 5m Pack)
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold">
              Snap Circuits Polarity, Mini House Building & Mentor Verification Alert
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Maximize2 size={13} />
            <span>Full-Screen Inspection</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Split: Image Scan on Left, Interactive Breakdown on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start flex-1">
        
        {/* Left Column: Scanned Document Page 5 (5 cols) */}
        <div className={`lg:col-span-5 border-2 rounded-2xl p-3 sm:p-4 flex flex-col shadow-xs ${cardBgClass} ${cardBorderClass}`}>
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <h4 className="text-xs sm:text-sm font-bold">Official Document Page 5</h4>
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
                src={page2Img}
                alt="Lesson Plan Page 5: Snap Circuits & Mini House"
                className="object-contain max-w-none transition-transform duration-200 rounded shadow-md"
                style={{ width: `${zoomLevel}%` }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/lesson_1_2_page2.jpg';
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
            <span>Features: Real LED cards, Snap board circles, Appliance illustrations</span>
            <span className="font-mono font-bold text-amber-500">Page 5 of docx</span>
          </div>
        </div>

        {/* Right Column: Deep-Dive Technical & Challenge Breakdown (7 cols) */}
        <div className={`lg:col-span-7 border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs ${cardBgClass} ${cardBorderClass}`}>
          <div>
            {/* Top Critical Alert: The Missing Schematic Challenge */}
            <div className={`p-3 rounded-xl border mb-3.5 ${
              isDark ? 'bg-amber-950/50 border-amber-800 text-amber-200' : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-start gap-2.5">
                <AlertCircle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <strong className="block font-bold text-xs sm:text-sm text-amber-600 dark:text-amber-400 mb-0.5">
                    Crucial Check: Challenge Diagram is NOT Shown in the Lesson Plan!
                  </strong>
                  <p className="text-xs leading-relaxed">
                    Notice that the document describes building the Mini House with Snap Circuits, but <strong>does not show the complete schematic diagram for the challenge circuit!</strong> In your Understanding Check, mentors will test whether you caught this: <strong>You must always check and clarify the circuit build with senior instructors beforehand!</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Section Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 mb-3.5">
              <button
                onClick={() => setActiveSection('challenge')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeSection === 'challenge'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <HelpCircle size={14} />
                <span>Mentor Rule & Check</span>
              </button>

              <button
                onClick={() => setActiveSection('polarity')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeSection === 'polarity'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Zap size={14} />
                <span>Polarity: + to + (10m)</span>
              </button>

              <button
                onClick={() => setActiveSection('house')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  activeSection === 'house'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Home size={14} />
                <span>Mini House Story (25m)</span>
              </button>
            </div>

            {/* TAB 1: Mentor Rule & Checking with Senior Instructors */}
            {activeSection === 'challenge' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                  <strong className="block font-bold text-xs sm:text-sm mb-1 text-indigo-500">
                    Why Mentors Ask "What is the Challenge?":
                  </strong>
                  <p className={`text-xs leading-relaxed mb-2.5 ${textMutedClass}`}>
                    When mentors conduct your Understanding Check, they want to see if you read curriculum critically. Many junior teachers walk in unprepared because the lesson plan left out the final circuit diagram!
                  </p>

                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                      <strong className="block font-bold text-emerald-600 dark:text-emerald-400 mb-0.5">
                        ✅ What You Must Tell the Mentor:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-300">
                        <em>"I noticed the last challenge section doesn't show the snap circuit schematic diagram in the document. I clarified the exact circuit build with my senior instructor, tested it personally, and know how to guide students safely!"</em>
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs">
                      <strong className="block font-bold text-indigo-600 dark:text-indigo-400 mb-0.5">
                        📦 The 4 Laminated Pictures (Blu-Tack Step):
                      </strong>
                      <span className="text-slate-600 dark:text-slate-300">
                        Once the circuit is closed, students use Blu-Tack to attach the 4 appliance pictures (Fan, Desk Lamp, Table Lamp, Radio) onto the real circuit components!
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                  <Coffee size={15} className="text-amber-500 shrink-0" />
                  <span><strong>Schedule Note:</strong> Includes 10-min student water/bathroom break between theory and circuit build.</span>
                </div>
              </div>
            )}

            {/* TAB 2: Snap Circuits Polarity Rule (+ to +) */}
            {activeSection === 'polarity' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                  <strong className="block font-bold text-xs sm:text-sm mb-1 text-amber-600 dark:text-amber-400">
                    Snap Circuits – Elenco Intro (10 mins):
                  </strong>
                  <p className={`text-xs leading-relaxed mb-2.5 ${textMutedClass}`}>
                    Kindergarteners are introduced to safe physical electronic modular snaps. Two fundamental rules dictate the entire build:
                  </p>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                      <strong className="block font-bold text-xs text-rose-600 dark:text-rose-400 mb-0.5">
                        🔴 Battery Rule (Red Circle on Document):
                      </strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">
                        The <strong>+ sign of other snap circuit parts MUST be connected to the + sign of the battery holder</strong>. <em>&lt;Note, for battery it is + to +&gt;</em>
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20">
                      <strong className="block font-bold text-xs text-sky-600 dark:text-sky-400 mb-0.5">
                        🔵 Standard Component Rule (Blue Circle on Document):
                      </strong>
                      <span className="text-xs text-slate-600 dark:text-slate-300">
                        Other than the battery holder, the <strong>+ sign must connect to the - sign</strong> of the adjacent component to form an uninterrupted electrical loop.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Mini House Storytelling (25 mins) */}
            {activeSection === 'house' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                  <strong className="block font-bold text-xs sm:text-sm mb-1 text-indigo-600 dark:text-indigo-400">
                    Narration Story for Students (25 mins):
                  </strong>
                  <blockquote className="italic p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border-l-3 border-indigo-500 text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                    "We are going to create a mini house! Before that, let's learn about electricity so that we can make a nice house later by using the snap circuit. What electrical appliances can we commonly find in a house?"
                  </blockquote>

                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {appliances.map((app) => (
                      <div key={app.name} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                        <span className="text-lg block mb-0.5">{app.icon}</span>
                        <strong className="block font-bold text-2xs">{app.name}</strong>
                        <span className="text-3xs text-slate-500">{app.rep}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-2xs text-slate-500 dark:text-slate-400 leading-tight">
                    🌟 <em>Extension Tip:</em> If time allows, children can use Lego bricks to build house walls and a roof over their circuit to elevate their storytelling!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Callout & Pack Up Rule */}
          <div className={`mt-3 pt-2.5 border-t text-xs flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span className="flex items-center gap-1.5 font-medium">
              <PackageCheck size={15} className="text-emerald-500" />
              <span>Pack Up (5 mins): Return snaps to transparent tray molds cleanly</span>
            </span>
            <span className="font-bold text-amber-500 font-mono">
              Total 50 mins
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal for High-Res Inspection */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                P5
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">
                  Lesson 1.2 Document Scan · Page 5
                </h3>
                <p className="text-2xs text-slate-300">
                  Snap Circuits Polarity (+ to +) & Mini House Building Activity
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
              src={page2Img}
              alt="Lesson Plan Page 5 High Resolution"
              className="max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform"
              style={{ width: `${zoomLevel}%` }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/lesson_1_2_page2.jpg';
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
