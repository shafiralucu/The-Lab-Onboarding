import React from 'react';
import { 
  Zap, 
  Scissors, 
  Palette, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  ShieldAlert, 
  Sparkles,
  Bot,
  Layers,
  ArrowRight,
  BookOpen,
  Eye,
  FileText
} from 'lucide-react';

interface UnderstandingCheckSlideProps {
  isDark?: boolean;
}

export const UnderstandingCheckSlide: React.FC<UnderstandingCheckSlideProps> = ({ isDark = false }) => {
  const cardBorderClass = isDark ? 'border-slate-700' : 'border-slate-200/90';
  const cardBgClass = isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900';
  const innerCardClass = isDark ? 'bg-slate-800/90 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700';
  const textMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="w-full flex flex-col justify-between py-1 gap-3.5">
      {/* Top Banner */}
      <div className={`p-4 sm:p-5 rounded-2xl border shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
        isDark 
          ? 'bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 border-indigo-800 text-slate-100' 
          : 'bg-gradient-to-r from-indigo-50/90 via-sky-50/80 to-purple-50/80 border-indigo-200 text-indigo-950'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black shrink-0 shadow-xs">
            <Zap size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-600 text-white shadow-2xs">
                Weekly Mini-Test Standard
              </span>
              <span className={`text-xs ${isDark ? 'text-indigo-300' : 'text-indigo-700'} font-medium`}>
                Kinder Lesson 1.2 Benchmark Example
              </span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mt-0.5">
              The 4 Core Expectations for Your Understanding Check
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <div className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>Pass All 4 Criteria</span>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Grid (2x2 on md/lg, spacious, clean, accessible) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5 flex-1">
        
        {/* PILLAR 1: Concept & Safety Explanation */}
        <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all ${cardBgClass} ${cardBorderClass}`}>
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                  1
                </div>
                <h4 className="text-base sm:text-lg font-bold">
                  Explain Electricity, Conductors & Dangers
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-2xs font-bold bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30">
                Oral Delivery
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 text-indigo-600 dark:text-indigo-400">
                  Kid-Friendly Delivery (Ages 4–6):
                </strong>
                <p className={`text-xs leading-relaxed ${textMutedClass}`}>
                  Explain electricity as energetic dancers moving through a continuous closed road. Introduce conductors (doors wide open) vs. insulators (solid walls).
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-rose-950/30 border-rose-800/60 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                  <ShieldAlert size={16} />
                  <span>Crucial Danger Rules (Mentor Check):</span>
                </strong>
                <p className="text-xs leading-relaxed">
                  <strong>Human bodies & water conduct electricity!</strong> Kids must understand: never touch wall sockets, never poke objects into wall outlets, and never handle plugs with wet hands.
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-3 pt-2.5 border-t text-xs font-semibold flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Target: Pre-K to Kindergarten</span>
            <span className="text-indigo-500 font-bold">Safety First</span>
          </div>
        </div>

        {/* PILLAR 2: The Cut & Paste Worksheet & Cody Kit */}
        <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all ${cardBgClass} ${cardBorderClass}`}>
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                  2
                </div>
                <h4 className="text-base sm:text-lg font-bold">
                  Cut & Paste Worksheet + Cody Tester Kit
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-2xs font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30">
                Hands-On Kit
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-amber-950/30 border-amber-800/60 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <AlertCircle size={16} />
                  <span>The Hidden Activity: Cody Tester Kit</span>
                </strong>
                <p className="text-xs leading-relaxed">
                  The lesson plan does not explicitly list the experiment steps—it only shows the 6 cards! Trainees must know to bring the <strong>Cody Conductor/Insulator Tester Kit</strong> so kids physically test materials before pasting.
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 text-sky-600 dark:text-sky-400">
                  The 6 Materials Tested:
                </strong>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  <span className="flex items-center gap-1">📄 Paper (Insulator)</span>
                  <span className="flex items-center gap-1">🪵 Wood (Insulator)</span>
                  <span className="flex items-center gap-1 font-bold text-rose-500">✋ Hand (Conductor!)</span>
                  <span className="flex items-center gap-1 font-bold text-emerald-500">🍎 Apple (Conductor!)</span>
                  <span className="flex items-center gap-1">🧴 Plastic (Insulator)</span>
                  <span className="flex items-center gap-1 font-bold text-emerald-500">🔩 Metal Nail (Conductor!)</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-3 pt-2.5 border-t text-xs font-semibold flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Never let kids guess & paste blindly</span>
            <span className="text-sky-500 font-bold">Empirical Science</span>
          </div>
        </div>

        {/* PILLAR 3: Lighted-Up Activity Card */}
        <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all ${cardBgClass} ${cardBorderClass}`}>
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                  3
                </div>
                <h4 className="text-base sm:text-lg font-bold">
                  Lighted-Up Card & Its 3 Pedagogical Uses
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-2xs font-bold bg-pink-500/15 text-pink-600 dark:text-pink-400 border border-pink-500/30">
                Art & Tech
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 text-pink-600 dark:text-pink-400">
                  What It Is:
                </strong>
                <p className={`text-xs leading-relaxed ${textMutedClass}`}>
                  A personalized card for loved ones using copper tape, a 3V coin battery, and a green LED bulb that glows when folded!
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 text-pink-600 dark:text-pink-400">
                  The 3 Pedagogical Uses to State in Your Check:
                </strong>
                <ul className={`list-disc list-inside space-y-1 text-xs ${textMutedClass}`}>
                  <li><strong>Tactile Circuit Physics:</strong> Teaches polarity (+/-) and using paper folding as a mechanical switch.</li>
                  <li><strong>Tangible Take-Home Pride:</strong> Parents see a physical, glowing artifact proving creative learning.</li>
                  <li><strong>STEAM Art Integration:</strong> Merges artistic drawing with real engineering circuits.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`mt-3 pt-2.5 border-t text-xs font-semibold flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Take-home parent impression</span>
            <span className="text-pink-500 font-bold">STEAM Synergy</span>
          </div>
        </div>

        {/* PILLAR 4: Snap Circuit Challenge & Clarifying with Mentors */}
        <div className={`border-2 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs transition-all ${cardBgClass} ${cardBorderClass}`}>
          <div>
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-indigo-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs font-bold">
                  4
                </div>
                <h4 className="text-base sm:text-lg font-bold">
                  Snap Circuits Challenge & Checking with Instructors
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-2xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                Proactive Check
              </span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className={`p-3 rounded-xl border ${
                isDark ? 'bg-amber-950/30 border-amber-800/60 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
              }`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                  <AlertCircle size={16} />
                  <span>The Missing Challenge Diagram Warning!</span>
                </strong>
                <p className="text-xs leading-relaxed">
                  Notice in the lesson plan: <strong>The document describes the Mini House but leaves out the complete schematic diagram!</strong> Never assume or panic in class—<strong>always check and verify with senior instructors beforehand!</strong>
                </p>
              </div>

              <div className={`p-3 rounded-xl border ${innerCardClass}`}>
                <strong className="block font-bold text-xs sm:text-sm mb-1 text-emerald-600 dark:text-emerald-400">
                  What the Mini House Entails:
                </strong>
                <ul className={`list-disc list-inside space-y-1 text-xs ${textMutedClass}`}>
                  <li><strong>3 Appliances:</strong> Light (lamp bulb), Radio (speaker), Fan (motor).</li>
                  <li><strong>Polarity Rules:</strong> Battery is <em>+ to +</em>; other pieces are <em>+ to -</em>.</li>
                  <li><strong>Laminated Cards:</strong> Attached to components using Blu-Tack.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`mt-3 pt-2.5 border-t text-xs font-semibold flex items-center justify-between ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span>Clarify with senior instructors early</span>
            <span className="text-emerald-500 font-bold">Proactive Readiness</span>
          </div>
        </div>

      </div>

      {/* Bottom Navigation Notice linking to dedicated Document Deep Dives */}
      <div className={`p-3 sm:p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shrink-0 ${
        isDark ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-indigo-50/70 border-indigo-200 text-indigo-950'
      }`}>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
          <span>
            <strong>Dedicated Document Scans:</strong> Next 2 slides feature full-screen zoomable high-resolution document scans of Page 4 and Page 5!
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xs font-mono font-bold px-2 py-1 bg-indigo-600 text-white rounded-md">
            Slide 4: Page 4 Scan →
          </span>
          <span className="text-2xs font-mono font-bold px-2 py-1 bg-amber-500 text-slate-950 rounded-md">
            Slide 5: Page 5 Scan →
          </span>
        </div>
      </div>
    </div>
  );
};
