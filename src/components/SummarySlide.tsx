import React from 'react';
import { 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  Bot, 
  Clock, 
  Video, 
  Users, 
  Lightbulb, 
  Star,
  Compass
} from 'lucide-react';

interface SummarySlideProps {
  isDark?: boolean;
}

export const SummarySlide: React.FC<SummarySlideProps> = ({ isDark = false }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between py-1">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-sm mb-3.5 shrink-0">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-sm font-black">
            <Star size={26} className="text-slate-950 fill-slate-950" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-300 block mb-0.5">
              Executive Cheat Sheet
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
              What's Most Important: The 4 Non-Negotiables for Every Instructor
            </h3>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/10 backdrop-blur-xs text-amber-300 font-bold text-xs sm:text-sm rounded-full border border-white/15">
          <Sparkles size={16} />
          <span>Core Takeaways</span>
        </span>
      </div>

      {/* 4 Big High-Impact Feature Cards (Large fonts, high readability) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5 flex-1 min-h-0">
        {/* Pillar 1: Hands-On Tools */}
        <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xs ${
          isDark 
            ? 'bg-slate-900 border-slate-700 hover:border-indigo-400 text-slate-100' 
            : 'bg-slate-50 border-slate-200/90 hover:border-indigo-400 text-slate-900'
        }`}>
          <div>
            <div className={`flex items-center justify-between mb-3 pb-2.5 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black shrink-0">
                  <Bot size={22} />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black">
                  1. Test ALL Tools Personally
                </h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                isDark ? 'bg-indigo-900/80 text-indigo-300 border border-indigo-700' : 'bg-indigo-100 text-indigo-800'
              }`}>
                100% Literacy
              </span>
            </div>
            <p className={`text-base sm:text-lg leading-relaxed mb-3 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              You must physically assemble and test <strong>every single robot, sensor, and educational STEM toy</strong> across both Kinder & Junior.
            </p>
            <div className={`p-3.5 rounded-xl border text-sm sm:text-base leading-relaxed ${
              isDark ? 'bg-slate-800 border-slate-700 text-amber-200' : 'bg-white border-slate-200 text-slate-800'
            }`}>
              ⚠️ <strong>Critical Note:</strong> Even lessons <em>without</em> a robot have physical games or mechanism toys you <strong>MUST try firsthand</strong> before entering the classroom.
            </div>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 flex items-center gap-2 text-sm sm:text-base text-indigo-500 font-bold">
            <CheckCircle2 size={18} className="text-indigo-500 shrink-0" />
            <span>Check the room Picking List folder daily</span>
          </div>
        </div>

        {/* Pillar 2: Pacing & Video Verification */}
        <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xs ${
          isDark 
            ? 'bg-slate-900 border-slate-700 hover:border-amber-400 text-slate-100' 
            : 'bg-slate-50 border-slate-200/90 hover:border-amber-400 text-slate-900'
        }`}>
          <div>
            <div className={`flex items-center justify-between mb-3 pb-2.5 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0">
                  <Clock size={22} />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black">
                  2. Pacing & Video Proof
                </h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                isDark ? 'bg-amber-950/80 text-amber-300 border border-amber-700' : 'bg-amber-100 text-amber-900'
              }`}>
                1 Wk = 2 Terms
              </span>
            </div>
            <p className={`text-base sm:text-lg leading-relaxed mb-3 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              Maintain the fast pacing: <strong>Week 1 covers Terms 1 & 2; Week 2 covers Terms 3 & 4</strong>.
            </p>
            <div className={`p-3.5 rounded-xl border text-sm sm:text-base leading-relaxed ${
              isDark ? 'bg-slate-800 border-slate-700 text-amber-200' : 'bg-white border-slate-200 text-slate-800'
            }`}>
              📹 <strong>Proof Requirement:</strong> Record short video clips of all your completed challenges, upload to Google Drive, and paste links in <em>Instructor Task Submission</em>.
            </div>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 flex items-center gap-2 text-sm sm:text-base text-amber-500 font-bold">
            <Video size={18} className="text-amber-500 shrink-0" />
            <span>No video link = Task considered incomplete</span>
          </div>
        </div>

        {/* Pillar 3: Socratic Delivery */}
        <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xs ${
          isDark 
            ? 'bg-slate-900 border-slate-700 hover:border-sky-400 text-slate-100' 
            : 'bg-slate-50 border-slate-200/90 hover:border-sky-400 text-slate-900'
        }`}>
          <div>
            <div className={`flex items-center justify-between mb-3 pb-2.5 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-black shrink-0">
                  <Lightbulb size={22} />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black">
                  3. The Socratic "Lab Way"
                </h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                isDark ? 'bg-sky-950/80 text-sky-300 border border-sky-700' : 'bg-sky-100 text-sky-800'
              }`}>
                Never Build For Them
              </span>
            </div>
            <p className={`text-base sm:text-lg leading-relaxed mb-3 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              When a child is stuck, <strong>never grab their mouse or blocks</strong>. Ask guiding questions (<em>"What does this block tell the motor to do?"</em>).
            </p>
            <div className={`p-3.5 rounded-xl border text-sm sm:text-base leading-relaxed ${
              isDark ? 'bg-slate-800 border-slate-700 text-sky-200' : 'bg-white border-slate-200 text-slate-800'
            }`}>
              👶 <strong>Kinder (4–6):</strong> Colors, numbers, analogies. 👦 <strong>Junior (7–12):</strong> Computational logic & debugging.
            </div>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 flex items-center gap-2 text-sm sm:text-base text-sky-500 font-bold">
            <Compass size={18} className="text-sky-500 shrink-0" />
            <span>Guide the discovery; celebrate their "Aha!" moment</span>
          </div>
        </div>

        {/* Pillar 4: Synergy & Mindset */}
        <div className={`border-2 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all shadow-xs ${
          isDark 
            ? 'bg-slate-900 border-slate-700 hover:border-emerald-400 text-slate-100' 
            : 'bg-slate-50 border-slate-200/90 hover:border-emerald-400 text-slate-900'
        }`}>
          <div>
            <div className={`flex items-center justify-between mb-3 pb-2.5 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black shrink-0">
                  <Users size={22} />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-black">
                  4. Synergy & Proactive Spirit
                </h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                isDark ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700' : 'bg-emerald-100 text-emerald-800'
              }`}>
                Team First
              </span>
            </div>
            <p className={`text-base sm:text-lg leading-relaxed mb-3 font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}>
              Collaborate hand-in-hand with <strong>SPA</strong> (student progress videos) & <strong>EC</strong> (trial class experiences and conversions).
            </p>
            <div className={`p-3.5 rounded-xl border text-sm sm:text-base leading-relaxed ${
              isDark ? 'bg-slate-800 border-slate-700 text-emerald-200' : 'bg-white border-slate-200 text-slate-800'
            }`}>
              🚀 <strong>Be Proactive:</strong> Don’t wait to be asked. Explore lesson plans independently first, ask high-value questions, and bring positive energy!
            </div>
          </div>
          <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 flex items-center gap-2 text-sm sm:text-base text-emerald-500 font-bold">
            <Flame size={18} className="text-emerald-500 shrink-0" />
            <span>High energy & smiling faces are contagious!</span>
          </div>
        </div>
      </div>

      {/* Bottom Golden Mantra */}
      <div className="mt-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl px-5 py-3 flex items-center justify-between shadow-xs shrink-0">
        <div className="flex items-center gap-3 font-bold text-sm sm:text-base text-slate-950">
          <Star size={20} className="text-slate-950 fill-slate-950 shrink-0" />
          <span>
            <strong>Instructor Mantra:</strong> <em>"We don’t just teach coding — we empower creative, resilient young problem solvers!"</em>
          </span>
        </div>
        <span className="hidden md:inline-block px-3 py-1 bg-slate-950 text-white rounded-full text-xs sm:text-sm font-bold shadow-xs">
          Ready to Inspire
        </span>
      </div>
    </div>
  );
};
