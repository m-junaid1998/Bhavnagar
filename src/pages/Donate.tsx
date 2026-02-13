import { Heart, Quote, Landmark, Globe } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function Donate() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  // Common Card Style - Adjusted padding for 320px (p-5 on mobile, p-8 on desktop)
  const cardStyle = `p-5 md:p-8 rounded-[32px] border theme-transition transition-all duration-300`;
  const darkCard = `bg-slate-800/50 border-slate-700 shadow-xl shadow-emerald-900/10`;
  const lightCard = `bg-slate-50 border-emerald-100 shadow-sm`;

  // Inner Box Style - Fixed for long numbers
  const innerBoxStyle = `p-4 rounded-2xl border transition-all ${
    isDark
      ? "bg-emerald-950/30 border-emerald-900/50 shadow-inner"
      : "bg-emerald-50/50 border-emerald-100 shadow-sm"
  }`;

  return (
    <section className={`py-12 md:py-20 theme-transition ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* --- MAIN HEADING --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] font-['Plus_Jakarta_Sans'] ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}>
            Donate
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch mb-12">
          {/* Donation Intro */}
          <div className={`${cardStyle} ${isDark ? darkCard : lightCard}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-emerald-500 rounded-xl shrink-0">
                <Heart className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className={`text-xl md:text-3xl font-bold font-['Plus_Jakarta_Sans'] ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                DONATION
              </h2>
            </div>
            <p className={`text-sm md:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              AL-HAMDOLLILAH! to facilitate our Donors, we have launched <span className="text-emerald-500 font-bold">ONLINE DONATION PORTAL</span>. Please note that Dhoraji Association is fully responsible for spending your donations in the right way.
            </p>
          </div>

          {/* Hadith Section */}
          <div className={`${cardStyle} ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-emerald-600 border-emerald-500"}`}>
            <div className="flex items-center gap-3 mb-4">
              <Quote className="text-white w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <h2 className="text-lg md:text-2xl font-bold text-white uppercase tracking-wider">Hadith</h2>
            </div>
            <p className="text-base md:text-xl italic text-white leading-relaxed mb-4">
              "Whoever spends a sum in the cause of Allah, it is recorded for him seven-hundred fold."
            </p>
            <span className="text-emerald-100 text-xs md:text-sm font-bold">- Jami` at-Tirmidhi 1625</span>
          </div>
        </div>

        {/* --- SECTION HEADING: FOR ZAKAT --- */}
        <div className="text-center mb-8 md:mb-10">
          <h3 className={`text-lg md:text-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
            For Zakat
          </h3>
          <div className="w-16 md:w-20 h-1 bg-emerald-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* --- BANK DETAILS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Bank Al Habib Box */}
          <div className={`${cardStyle} ${isDark ? darkCard : lightCard}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h4 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-100" : "text-[#4A81A4]"}`}>Bank Al Habib</h4>
                <p className="text-[10px] md:text-sm font-semibold text-emerald-500 uppercase tracking-wider">Dhoraji Branch</p>
              </div>
              <Landmark className={isDark ? "text-slate-600" : "text-slate-300"} size={28} />
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className={innerBoxStyle}>
                <p className="text-[9px] md:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-widest mb-1">Account Title</p>
                <p className={`text-sm md:text-base font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}>Bhavnagar Association</p>
              </div>

              <div className={innerBoxStyle}>
                <p className="text-[9px] md:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-widest mb-1">Account Number</p>
                <p className={`text-sm md:text-base font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}>1078-0081-000136-01-5</p>
              </div>

              <div className={innerBoxStyle}>
                <p className="text-[9px] md:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-widest mb-1">IBAN Number</p>
                <p className={`text-sm md:text-base font-bold break-all leading-tight ${isDark ? "text-slate-200" : "text-slate-700"}`}>PK56BAHL1078008100013601</p>
              </div>
            </div>
          </div>

          {/* Meezan Bank Box */}
          <div className={`${cardStyle} ${isDark ? darkCard : lightCard}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h4 className={`text-xl md:text-2xl font-bold ${isDark ? "text-slate-100" : "text-[#5689A8]"}`}>Meezan Bank</h4>
                <p className="text-[10px] md:text-sm font-semibold text-emerald-500 uppercase tracking-wider">Dhoraji Branch</p>
              </div>
              <Globe className={isDark ? "text-slate-600" : "text-slate-300"} size={28} />
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className={innerBoxStyle}>
                <p className="text-[9px] md:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-widest mb-1">Account Title</p>
                <p className={`text-sm md:text-base font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}>Bhavnagar Association</p>
              </div>

              <div className={innerBoxStyle}>
                <p className="text-[9px] md:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-widest mb-1">Account Number</p>
                <p className={`text-sm md:text-base font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}>0100004265</p>
              </div>

              <div className={innerBoxStyle}>
                <p className="text-[9px] md:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-widest mb-1">IBAN Number</p>
                <p className={`text-sm md:text-base font-bold break-all leading-tight ${isDark ? "text-slate-200" : "text-slate-700"}`}>PK80MEZN0001220100004265</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Donate;