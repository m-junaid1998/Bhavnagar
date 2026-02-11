import { ArrowRight, Heart, Users, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function HeroSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  return (
    <section id="home" className={`pt-32 pb-16 px-4 theme-transition ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight font-['Plus_Jakarta_Sans'] ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Community Welfare
              <span className="text-emerald-500"> Organization</span>
            </h2>
            <p className={`text-xl mb-8 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Bhavnagar Association Karachi is a community-based welfare organization providing comprehensive support to every segment of society through charitable initiatives and social programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all hover:scale-105 transform shadow-lg flex items-center justify-center gap-2 animate-pulse-glow">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className={`border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 ${isDark ? 'hover:bg-slate-800' : 'hover:bg-emerald-50'}`}>
                Donate Now
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white'} rounded-xl p-4 shadow-md border theme-transition`}>
                <Users className="w-8 h-8 text-emerald-500 mb-2" />
                <p className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>500K+</p>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm`}>Members</p>
              </div>
              <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white'} rounded-xl p-4 shadow-md border theme-transition`}>
                <Heart className="w-8 h-8 text-red-500 mb-2" />
                <p className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>100+</p>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm`}>Programs</p>
              </div>
              <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white'} rounded-xl p-4 shadow-md border theme-transition`}>
                <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                <p className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>24/7</p>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm`}>Support</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up relative h-96 md:h-full">
            <div className={`absolute inset-0 rounded-3xl transform rotate-3 opacity-20 ${isDark ? 'bg-gradient-to-br from-emerald-600 to-teal-700' : 'bg-gradient-to-br from-emerald-400 to-teal-600'}`}></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl h-96 md:h-[500px] shadow-2xl flex items-center justify-center animate-float">
              <div className="text-center text-white">
                <Heart className="w-20 h-20 mx-auto mb-4 animate-pulse" />
                <p className="text-2xl font-bold font-['Plus_Jakarta_Sans']">Together We Care</p>
                <p className="text-emerald-100 mt-2">Building stronger communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
