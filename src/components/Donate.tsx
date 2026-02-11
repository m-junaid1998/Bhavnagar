import { Heart, Quote, Landmark, Globe } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function Donate() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  // Common Card Style
  const cardStyle = `p-8 rounded-3xl border theme-transition transition-all duration-300`;
  const darkCard = `bg-slate-800/50 border-slate-700 shadow-xl shadow-emerald-900/10`;
  const lightCard = `bg-slate-50 border-emerald-100 shadow-sm`;

  // Inner Box Style (Haryali Version for visibility)
  const innerBoxStyle = `p-4 rounded-2xl border transition-all ${
    isDark
      ? "bg-emerald-950/30 border-emerald-900/50 shadow-inner"
      : "bg-emerald-50/50 border-emerald-100 shadow-sm"
  }`;

  return (
    <section
      id="donate"
      className={`py-16 theme-transition ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        {/* --- MAIN SECTION HEADING: DONATE --- */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-black uppercase tracking-[0.2em] font-['Plus_Jakarta_Sans'] ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            Donate
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Donation Intro */}
          <div
            className={`p-8 rounded-3xl border theme-transition ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-slate-50 border-emerald-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500 rounded-xl">
                <Heart className="text-white w-6 h-6" />
              </div>
              <h2
                className={`text-3xl font-bold font-['Plus_Jakarta_Sans'] ${isDark ? "text-slate-100" : "text-slate-900"}`}
              >
                DONATION
              </h2>
            </div>
            <p
              className={`text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              AL-HAMDOLLILAH! to facilitate our Donors, we have launched ONLINE
              DONATION PORTAL . Please note that Dhoraji Association is fully
              responsible for spending your donations in the right way.
            </p>
          </div>

          {/* Hadith Section */}
          <div
            className={`p-8 rounded-3xl border theme-transition ${
              isDark
                ? "bg-slate-800/50 border-slate-700"
                : "bg-emerald-600 border-emerald-500"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Quote className="text-white w-6 h-6 " />
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
                Hadith
              </h2>
            </div>
            <p className="text-xl italic text-white leading-relaxed mb-4">
              "Whoever spends a sum in the cause of Allah, it is recorded for
              him seven-hundred fold."
            </p>
            <span className="text-emerald-100 text-sm font-bold">
              - Jami` at-Tirmidhi 1625
            </span>
          </div>
        </div>

        {/* --- SECTION HEADING: FOR ZAKAT --- */}
        <div className="text-center mb-10">
          <h3
            className={`text-2xl font-black uppercase tracking-[0.3em] ${isDark ? "text-emerald-400" : "text-emerald-700"}`}
          >
            For Zakat
          </h3>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* --- BOTTOM ROW: Bank Details --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Bank Al Habib Box */}
          <div className={`${cardStyle} ${isDark ? darkCard : lightCard}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h4
                  className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-[#4A81A4]"}`}
                >
                  Bank Al Habib
                </h4>
                <p className="text-sm font-semibold text-emerald-500">
                  Dhoraji Branch
                </p>
              </div>
              <Landmark
                className={isDark ? "text-slate-600" : "text-slate-300"}
                size={32}
              />
            </div>
            <div className="space-y-4">
              <div className={innerBoxStyle}>
                <p className="text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider mb-0.5">
                  Account Title
                </p>
                <p
                  className={`font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  Bhavnagar Association
                </p>
              </div>
              <div className={innerBoxStyle}>
                <p className="text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider mb-0.5">
                  Account Number
                </p>
                <p
                  className={`text-lg font-mono font-bold ${isDark ? "text-emerald-500" : "text-emerald-700"}`}
                >
                  1078-0081-000136-01-5
                </p>
              </div>
              <div className={innerBoxStyle}>
                <p className="text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider mb-0.5">
                  IBAN Number
                </p>
                <p
                  className={`text-xs font-mono font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  PK56BAHL1078008100013601
                </p>
              </div>
            </div>
          </div>

          {/* Meezan Bank Box */}
          <div className={`${cardStyle} ${isDark ? darkCard : lightCard}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-1">
                <h4
                  className={`text-2xl font-bold ${isDark ? "text-slate-100" : "text-[#5689A8]"}`}
                >
                  Meezan Bank
                </h4>
                <p className="text-sm font-semibold text-emerald-500">
                  Dhoraji Branch
                </p>
              </div>
              <Globe
                className={isDark ? "text-slate-600" : "text-slate-300"}
                size={32}
              />
            </div>
            <div className="space-y-4">
              <div className={innerBoxStyle}>
                <p className="text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider mb-0.5">
                  Account Title
                </p>
                <p
                  className={`font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  Bhavnagar Association
                </p>
              </div>
              <div className={innerBoxStyle}>
                <p className="text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider mb-0.5">
                  Account Number
                </p>
                <p
                  className={`text-lg font-mono font-bold ${isDark ? "text-emerald-500" : "text-emerald-700"}`}
                >
                  0100004265
                </p>
              </div>
              <div className={innerBoxStyle}>
                <p className="text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider mb-0.5">
                  IBAN Number
                </p>
                <p
                  className={`text-xs font-mono font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  PK80MEZN0001220100004265
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donate;
