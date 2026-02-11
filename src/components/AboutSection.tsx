import { Target, History, Award } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function AboutSection() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <section
      className={`py-20 px-4 theme-transition ${isDark ? "bg-slate-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-slide-up">
            <div
              className={`absolute -inset-4 rounded-2xl opacity-30 blur-xl ${isDark ? "bg-gradient-to-br from-emerald-600 to-teal-700" : "bg-gradient-to-br from-emerald-200 to-teal-200"}`}
            ></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl h-80 shadow-2xl flex items-center justify-center">
              <p className="text-center text-white text-2xl font-bold px-8 font-['Plus_Jakarta_Sans']">
                Our Community Heritage
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2
              className={`text-4xl font-bold font-['Plus_Jakarta_Sans'] mb-6 ${isDark ? "text-slate-100" : "text-slate-900"}`}
            >
              What We Aspire to Be
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <History className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}
                  >
                    Our History
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Originating from Sindh, the Memon community embraced Islam
                    and migrated through Kutch to Bombay, Kathiawar, and beyond.
                    Our association carries this legacy of community service and
                    faith-based welfare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}
                  >
                    Our Mission
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Bhavnagar Association is determined to end poverty among
                    community members by providing life-saving and
                    life-affirming resources. We stand committed to
                    comprehensive community welfare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-emerald-500" />
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-2 ${isDark ? "text-slate-100" : "text-slate-900"}`}
                  >
                    Our Values
                  </h3>
                  <p
                    className={`leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Community first, compassion always, transparency in all
                    actions. We believe in collaborative efforts with
                    philanthropists to build a stronger, more supportive society
                    for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl animate-rotate-in">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-bold font-['Plus_Jakarta_Sans'] mb-4">
              Message from Leadership
            </h3>
            <p className="text-lg text-emerald-50 mb-6 leading-relaxed">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
            <p className="text-emerald-50 leading-relaxed mb-6">
              "I assure you all that I will always try to work in the best
              interest of the community, in line with the mission of Dhoraji
              Association. Together, we shall build a brighter future for
              everyone."
            </p>
            <p className="font-bold text-white">
              — Haji Ahmed Chamdia, President
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
