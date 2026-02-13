import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar as CalendarIcon, Info, Clock } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { 
  format, startOfMonth, endOfMonth, startOfWeek, 
  endOfWeek, eachDayOfInterval, isSameMonth, isSameDay 
} from "date-fns";

export interface EventItem {
  date: string;
  month: string;
  year: string;
  time: string;
  title: string;
  fullDate: string;
  location: string;
  image: string;
}

// --- 1. LIST VIEW (Responsive Fix) ---
export const ListView = ({ events = [] }: { events: EventItem[] }) => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <div className="space-y-4 md:space-y-6 animate-fade-in">
      {events.length === 0 ? (
        <div className={`flex flex-col items-center justify-center p-8 md:p-12 rounded-[32px] border-2 border-dashed transition-all ${
          isDark ? "bg-[#1e293b]/30 border-[#334155] text-[#94a3b8]" : "bg-slate-50 border-slate-200 text-slate-500"
        }`}>
          <Info size={40} className="mb-4 opacity-20" />
          <p className="font-bold text-center">There are no upcoming events.</p>
        </div>
      ) : (
        <>
          <h2 className={`text-xl md:text-2xl font-black mb-6 md:mb-8 ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>
            Upcoming Events
          </h2>
          {events.map((event, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={`${event.date}-${idx}`} 
              className={`flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-6 rounded-[24px] md:rounded-[32px] border transition-all ${
                isDark ? "bg-[#1e293b] border-[#475569] hover:border-emerald-500/50" : "bg-white border-[#e2e8f0] shadow-sm hover:shadow-md"
              }`}
            >
              {/* Date Section */}
              <div className="flex md:flex-col items-center justify-between md:justify-center md:min-w-[80px] border-b md:border-b-0 md:border-r border-slate-700/30 pb-3 md:pb-0 md:pr-4">
                <div className="text-left md:text-center">
                  <span className={`block text-[10px] uppercase font-black tracking-tighter ${isDark ? "text-emerald-500" : "text-emerald-600"}`}>{event.month}</span>
                  <span className={`block text-3xl md:text-4xl font-black leading-none ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>{event.date}</span>
                </div>
                <span className={`text-[10px] font-bold ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{event.year}</span>
              </div>

              {/* Info Section */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <Clock size={12} className="text-emerald-500" />
                    <p className={`text-[10px] font-bold ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{event.time}</p>
                </div>
                <h3 className={`text-lg md:text-2xl font-black mb-2 ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>{event.title}</h3>
                <p className={`text-[10px] font-black uppercase tracking-widest flex items-start gap-2 ${isDark ? "text-[#cbd5e1]" : "text-[#475569]"}`}>
                  <MapPin size={14} className="text-emerald-500 shrink-0" /> {event.location}
                </p>
              </div>

              {/* Image Section */}
              <div className={`w-full md:w-64 h-32 md:h-40 rounded-2xl overflow-hidden border ${isDark ? "border-[#475569]" : "border-[#e2e8f0]"}`}>
                 <img src={event.image} alt="event" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
};

// --- 2. MONTH VIEW (Responsive Fix) ---
export const MonthView = ({ currentDate, events = [], onDateClick }: any) => {
  const { mode } = useTheme();
  const isDark = mode === "dark";
  const monthStart = startOfMonth(currentDate);
  const calendarDays = eachDayOfInterval({
    start: startOfWeek(monthStart),
    end: endOfWeek(endOfMonth(monthStart)),
  });

  return (
    <div className={`border rounded-3xl overflow-hidden ${isDark ? "bg-[#1e293b] border-[#475569]" : "bg-white border-[#e2e8f0]"}`}>
      <div className={`grid grid-cols-7 border-b ${isDark ? "border-[#475569] bg-[#334155]" : "border-[#e2e8f0] bg-slate-50"}`}>
        {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
          <div key={idx} className={`py-3 md:py-4 text-center text-[9px] md:text-[10px] font-black ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {calendarDays.map((day, i) => {
          const dStr = format(day, "d");
          const mStr = format(day, "MMM");
          const yStr = format(day, "yyyy");
          const dayEvent = events.find((e: EventItem) => e.date === dStr && e.month === mStr && e.year === yStr);

          return (
            <div 
              key={i} 
              onClick={() => onDateClick(day)} 
              className={`h-20 md:h-32 p-1 border-r border-b relative cursor-pointer flex flex-col items-center justify-center ${
                isDark ? "border-[#475569]" : "border-[#e2e8f0]"
              } ${!isSameMonth(day, monthStart) ? "opacity-10 pointer-events-none" : "hover:bg-emerald-500/5"}`}
            >
              <div className="flex-1 flex items-center justify-center">
                <span className={`text-xs md:text-sm font-bold w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all ${
                  isSameDay(day, new Date()) 
                    ? "bg-emerald-500 text-white shadow-lg" 
                    : (isDark ? "text-[#f1f5f9]" : "text-[#0f172a]")
                }`}>
                  {dStr}
                </span>
              </div>
              <div className="h-6 md:h-8 w-full flex flex-col items-center justify-end pb-1 md:pb-2">
                {dayEvent && (
                  <>
                    <div className="w-6 md:w-16 h-0.5 md:h-1 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981] mb-0.5" />
                    <p className="hidden md:block text-[7px] font-black text-emerald-500 truncate px-1 text-center w-full uppercase leading-none">
                      {dayEvent.title}
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- 3. DAY VIEW ---
export const DayView = ({ date, events = [] }: { date: Date, events: EventItem[] }) => {
  const { mode } = useTheme();
  const isDark = mode === "dark";
  const dayEvents = events.filter(e => 
    e.date === format(date, "d") && e.month === format(date, "MMM") && e.year === format(date, "yyyy")
  );

  return (
    <div className="animate-fade-in">
      {dayEvents.length === 0 ? (
        <div className={`border-2 border-dashed rounded-[32px] py-16 text-center ${isDark ? "bg-[#1e293b]/50 border-[#475569]" : "bg-slate-50 border-[#e2e8f0]"}`}>
          <CalendarIcon size={40} className={`mx-auto mb-4 ${isDark ? "text-[#475569]" : "text-[#cbd5e1]"}`} />
          <p className={`font-bold text-sm px-4 ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>No events for {format(date, "MMMM d, yyyy")}.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="h-6 w-1 bg-emerald-500 rounded-full"></div>
             <h2 className={`text-lg font-black uppercase tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
               Schedule: {format(date, "MMM d")}
             </h2>
          </div>
          <ListView events={dayEvents} />
        </div>
      )}
    </div>
  );
};