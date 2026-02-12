import { useTheme } from "../hooks/useTheme";

export default function PatronsSection() {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const aboutusdetails = [
    "HISTORY OF  BHAVNAGAR MEMON",
    "ABOUT BHAVNAGAR MEMON JAMAT",
    "PRESIDENT MESSAGE",
    "GENERAL SECRETARY MESSAGE",
    "MANAGING COMMITTEE MEMBERS",
    "PAST PRESIDENT AND GENERAL SECRETARY",
    "ANNUAL REPORT",
    "Mission & Vission",
    "CONSTITUTION",
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 theme-transition ${isDark ? "bg-slate-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2
              className={`text-4xl md:text-5xl font-bold font-['Plus_Jakarta_Sans'] ${isDark ? "text-slate-100" : "text-slate-900"}`}
            >
              About Us
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {aboutusdetails.map((patron, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 shadow-md hover:shadow-xl transition-all border group cursor-pointer hover:-translate-y-1 animate-scale-in ${isDark ? "bg-slate-700 border-slate-600 hover:border-emerald-400" : "bg-gradient-to-br from-gray-50 to-emerald-50 border-gray-200 hover:border-emerald-300"}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center justify-center min-h-32">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
                  <span
                    className={`font-bold text-xl font-['Plus_Jakarta_Sans'] text-white`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className={`font-semibold group-hover:text-emerald-500 transition-colors theme-transition text-center ${isDark ? "text-slate-100" : "text-slate-900"}`}
                >
                  {patron}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
