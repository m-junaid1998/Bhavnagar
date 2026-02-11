import { useState, useEffect } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { useTheme } from "../hooks/useTheme"; // Theme hook import kiya

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const { mode } = useTheme(); // Theme mode access kiya
  const isDark = mode === "dark";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="contact"
      className={`py-16 theme-transition transition-colors duration-300 ${
        isDark
          ? "bg-slate-900"
          : "bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 font-['Plus_Jakarta_Sans'] ${
              isDark ? "text-slate-100" : "text-slate-800"
            }`}
          >
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-4 rounded-full" />
        </div>

        {/* Centered Form with 850px Max-Width */}
        <div className="flex justify-center">
          <div
            className={`w-full max-w-[850px] transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              className={`rounded-3xl shadow-2xl p-8 md:p-12 border theme-transition ${
                isDark
                  ? "bg-slate-800 border-slate-700 shadow-emerald-900/10"
                  : "bg-white border-gray-100"
              }`}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className={`text-xs font-bold uppercase tracking-wider ml-1 ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full px-5 py-3.5 rounded-2xl border transition-all outline-none ${
                        isDark
                          ? "bg-slate-900/50 border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-emerald-500/20"
                          : "bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/10"
                      }`}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`text-xs font-bold uppercase tracking-wider ml-1 ${
                        isDark ? "text-slate-400" : "text-gray-500"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className={`w-full px-5 py-3.5 rounded-2xl border transition-all outline-none ${
                        isDark
                          ? "bg-slate-900/50 border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-emerald-500/20"
                          : "bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/10"
                      }`}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className={`text-xs font-bold uppercase tracking-wider ml-1 ${
                      isDark ? "text-slate-400" : "text-gray-500"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className={`w-full px-5 py-4 rounded-2xl border transition-all outline-none resize-none ${
                      isDark
                        ? "bg-slate-900/50 border-slate-700 text-slate-100 focus:border-emerald-500 focus:ring-emerald-500/20"
                        : "bg-gray-50/50 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/10"
                    }`}
                    placeholder="How can we help you today?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-700 shadow-xl shadow-emerald-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </div>
              </form>

              {/* Minimal Footer Contact Info */}
              <div
                className={`mt-10 pt-8 border-t flex flex-wrap justify-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] ${
                  isDark
                    ? "border-slate-700 text-slate-400"
                    : "border-gray-100 text-gray-400"
                }`}
              >
                <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                  <Phone size={16} className="text-emerald-500" />
                  <span>021-34932744</span>
                </div>
                <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                  <Mail size={16} className="text-emerald-500" />
                  <span>info@bhavnagar.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
