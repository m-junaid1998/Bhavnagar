import { FileText, Users, Copy, ArrowRight } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";

export default function ServicesGrid() {
  const navigate = useNavigate();
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const services = [
    {
      id: 1,
      title: "Census Form",
      btnText: "Fill Census", 
      description: "Complete your census online for accurate community data collection",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      delay: 0,
      path: "/census-form",
    },
    {
      id: 2,
      title: "Fresh Membership",
      btnText: "Join Membership", 
      description: "Join or renew membership online for exclusive community benefits",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      delay: 100,
      path: "/membership-registration",
    },
    {
      id: 3,
      title: "Duplicate Card",
      btnText: "Get Duplicate Card", 
      description: "Easily request a replacement card online within 24 hours",
      icon: Copy,
      color: "from-orange-500 to-red-500",
      delay: 200,
      path: "/duplicate-card",
    },
  ];


  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="services"
      className={`py-20 px-4 theme-transition ${isDark ? "bg-slate-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2
            className={`text-4xl md:text-5xl font-bold font-['Plus_Jakarta_Sans'] mb-4 ${isDark ? "text-slate-100" : "text-slate-900"}`}
          >
            Quick Online Services
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            Access our essential services online anytime, anywhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleNavigation(service.path)}
                className={`group rounded-2xl p-8 border transition-all duration-300 cursor-pointer transform hover:-translate-y-2 animate-slide-up ${isDark ? "bg-slate-700 border-slate-600 hover:border-emerald-400" : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-emerald-300"}`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div
                  className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className={`text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-3 ${isDark ? "text-slate-100" : "text-slate-900"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-6 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                >
                  {service.description}
                </p>

              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 shadow-lg flex items-center justify-center gap-2">
  {service.btnText}
  <ArrowRight size={18} />
</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}