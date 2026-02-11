import React from "react";
import { Heart, Quote, Landmark, ReceiptText, Globe } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function Donate() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  // Common Card Style to match Donation/Hadith
  const cardStyle = `p-8 rounded-3xl border theme-transition transition-all duration-300`;
  const darkCard = `bg-slate-800/50 border-slate-700 shadow-xl shadow-emerald-900/10`;
  const lightCard = `bg-slate-50 border-emerald-100 shadow-sm`;

  return (
    <section
      className={`py-16 theme-transition ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* --- TOP ROW: Donation Intro & Hadith --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Donation Intro */}
          <div className={`${cardStyle} ${isDark ? darkCard : lightCard}`}>
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
              AL-HAMDOLLILAH! to facilitate our Donors, we have launched{" "}
              <span className="text-emerald-500 font-semibold">
                ONLINE DONATION PORTAL
              </span>
              . Please note that Dhoraji Association is fully responsible for
              spending your donations in the right way.
            </p>
          </div>

          {/* Hadith Section */}
          <div
            className={`${cardStyle} ${isDark ? darkCard : "bg-emerald-600 border-emerald-500 shadow-lg"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`p-3 rounded-xl ${isDark ? "bg-emerald-500" : "bg-white/20"}`}
              >
                <Quote className="text-white w-6 h-6" />
              </div>
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

        {/* --- SECTION HEADING --- */}
        <div className="text-center mb-10">
          <h3
            className={`text-2xl font-black uppercase tracking-[0.3em] ${isDark ? "text-emerald-400" : "text-emerald-700"}`}
          >
            For Zakat
          </h3>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-2 rounded-full" />
        </div>

        {/* --- BOTTOM ROW: Bank Details (Styled like Top Row) --- */}
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
                <p
                  className={`text-sm font-semibold ${isDark ? "text-emerald-500" : "text-emerald-600"}`}
                >
                  Dhoraji Branch
                </p>
              </div>
              <Landmark
                className={isDark ? "text-slate-600" : "text-slate-300"}
                size={32}
              />
            </div>

            <div className="space-y-4">
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-slate-900/50" : "bg-white border border-emerald-50"}`}
              >
                <p className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">
                  Account Title
                </p>
                <p
                  className={`font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  Dhoraji Association
                </p>
              </div>
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-slate-900/50" : "bg-white border border-emerald-50"}`}
              >
                <p className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">
                  Account Number
                </p>
                <p
                  className={`text-lg font-mono font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  1078-0081-000136-01-5
                </p>
              </div>
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-slate-900/50" : "bg-white border border-emerald-50"}`}
              >
                <p className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">
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
                <p
                  className={`text-sm font-semibold ${isDark ? "text-emerald-500" : "text-emerald-600"}`}
                >
                  Dhoraji Branch
                </p>
              </div>
              <Globe
                className={isDark ? "text-slate-600" : "text-slate-300"}
                size={32}
              />
            </div>

            <div className="space-y-4">
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-slate-900/50" : "bg-white border border-emerald-50"}`}
              >
                <p className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">
                  Account Title
                </p>
                <p
                  className={`font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  Dhoraji Association
                </p>
              </div>
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-slate-900/50" : "bg-white border border-emerald-50"}`}
              >
                <p className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">
                  Account Number
                </p>
                <p
                  className={`text-lg font-mono font-bold ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  0100004265
                </p>
              </div>
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-slate-900/50" : "bg-white border border-emerald-50"}`}
              >
                <p className="text-[10px] uppercase font-black text-emerald-500 tracking-tighter">
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
