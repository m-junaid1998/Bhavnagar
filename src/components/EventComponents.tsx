import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar as CalendarIcon, Info, Clock } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { 
  format, startOfMonth, endOfMonth, startOfWeek, 
  endOfWeek, eachDayOfInterval, isSameMonth, isSameDay 
} from "date-fns";

// TypeScript Interface for Safety
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

// --- 1. LIST VIEW ---
export const ListView = ({ events = [] }: { events: EventItem[] }) => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  return (
    <div className="space-y-6 animate-fade-in">
      {events.length === 0 ? (
        <div className={`flex flex-col items-center justify-center p-12 rounded-[32px] border-2 border-dashed transition-all ${
          isDark ? "bg-[#1e293b]/30 border-[#334155] text-[#94a3b8]" : "bg-slate-50 border-slate-200 text-slate-500"
        }`}>
          <Info size={40} className="mb-4 opacity-20" />
          <p className="font-bold text-lg">There are no upcoming events.</p>
        </div>
      ) : (
        <>
          <h2 className={`text-2xl font-black mb-8 ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>
            Upcoming Events
          </h2>
          {events.map((event, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={`${event.date}-${idx}`} 
              id={`event-${event.date}-${event.month}-${event.year}`}
              className={`flex flex-col md:grow md:flex-row gap-8 p-6 rounded-[32px] border transition-all ${
                isDark ? "bg-[#1e293b] border-[#475569] hover:border-emerald-500/50" : "bg-white border-[#e2e8f0] shadow-sm hover:shadow-md"
              }`}
            >
              <div className="text-center min-w-[80px] flex flex-col justify-center border-r border-slate-700/50 pr-4">
                <span className={`block text-[10px] uppercase font-black tracking-tighter ${isDark ? "text-emerald-500" : "text-emerald-600"}`}>{event.month}</span>
                <span className={`block text-4xl font-black ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>{event.date}</span>
                <span className={`block text-[10px] font-bold ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{event.year}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-emerald-500" />
                    <p className={`text-xs font-bold ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{event.time}</p>
                </div>
                <h3 className={`text-2xl font-black mb-3 ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>{event.title}</h3>
                <p className={`text-xs font-black uppercase tracking-widest flex items-center gap-2 ${isDark ? "text-[#cbd5e1]" : "text-[#475569]"}`}>
                  <MapPin size={14} className="text-emerald-500" /> {event.location}
                </p>
              </div>
              <div className={`w-full md:w-64 h-40 rounded-2xl overflow-hidden border ${isDark ? "border-[#475569]" : "border-[#e2e8f0]"}`}>
                 <img src={event.image} alt="event" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
};

// --- 2. MONTH VIEW ---
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
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
          <div key={d} className={`py-4 text-center text-[10px] font-black tracking-widest ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>{d}</div>
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
              className={`h-28 md:h-32 p-2 border-r border-b relative cursor-pointer ${
                isDark ? "border-[#475569]" : "border-[#e2e8f0]"
              } ${!isSameMonth(day, monthStart) ? "opacity-10 pointer-events-none" : "hover:bg-emerald-500/5"}`}
            >
              <span className={`text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full ${
                isSameDay(day, new Date()) ? "bg-emerald-500 text-white shadow-lg" : (isDark ? "text-[#f1f5f9]" : "text-[#0f172a]")
              }`}>
                {dStr}
              </span>
              {dayEvent && (
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="w-full h-1 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981] mb-1" />
                  <p className="text-[7px] font-black text-emerald-500 truncate uppercase">{dayEvent.title}</p>
                </div>
              )}
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

  // Filter events for the selected day
  const dayEvents = events.filter(e => 
    e.date === format(date, "d") && 
    e.month === format(date, "MMM") && 
    e.year === format(date, "yyyy")
  );

  return (
    <div className="animate-fade-in">
      {dayEvents.length === 0 ? (
        <div className={`border-2 border-dashed rounded-[40px] py-20 text-center ${isDark ? "bg-[#1e293b]/50 border-[#475569]" : "bg-slate-50 border-[#e2e8f0]"}`}>
          <div className={`flex justify-center mb-4 ${isDark ? "text-[#475569]" : "text-[#cbd5e1]"}`}><CalendarIcon size={48} /></div>
          <p className={`font-bold ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>No events scheduled for {format(date, "MMMM d, yyyy")}.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
             <div className="h-8 w-1 bg-emerald-500 rounded-full"></div>
             <h2 className={`text-xl font-black uppercase tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                Schedule for {format(date, "MMMM d")}
             </h2>
          </div>
          <ListView events={dayEvents} />
        </div>
      )}
    </div>
  );
};