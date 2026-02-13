import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { format, addMonths, subMonths, addDays, subDays } from "date-fns";
import { DayView, MonthView, ListView, EventItem } from "../components/EventComponents";

const Events: React.FC = () => {
  const { view = "list" } = useParams();
  const navigate = useNavigate();
  const { mode } = useTheme();
  const isDark = mode === "dark";
  
  // Initial date set to Feb 13, 2026
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 13));
  const [searchQuery, setSearchQuery] = useState("");

  const dummyEvents: EventItem[] = [
    { 
        date: "13", 
        month: "Feb", 
        year: "2026", 
        time: "9:00 am - 11:25 pm", 
        title: "DAY 3 (DFL-3)", 
        fullDate: "February 13, 2026", 
        location: "AIRFIELD KMC SPORTS COMPLEX, KARACHI", 
        image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=500" 
    },
    { 
        date: "27", 
        month: "Feb", 
        year: "2026", 
        time: "9:00 am - 11:25 pm", 
        title: "DAY 1 (DFL-3)", 
        fullDate: "February 27, 2026", 
        location: "AIRFIELD KMC SPORTS COMPLEX, KARACHI", 
        image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=500" 
    },
  ];

  const filteredEvents = useMemo(() => {
    return (dummyEvents || []).filter(event => 
      event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleDateClick = (date: Date) => {
    setCurrentDate(date); // Update current date when clicking a calendar day
    const d = format(date, "d");
    const m = format(date, "MMM");
    const y = format(date, "yyyy");
    const hasEvent = dummyEvents.find(e => e.date === d && e.month === m && e.year === y);

    if (hasEvent) {
      navigate("/events/list");
      setTimeout(() => {
        const id = `event-${hasEvent.date}-${hasEvent.month}-${hasEvent.year}`;
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } else {
        navigate("/events/day"); // Agar event nahi bhi hai tab bhi day view pe le jaye
    }
  };

  const handlePrev = () => {
    if (view === "month") setCurrentDate(subMonths(currentDate, 1));
    else setCurrentDate(subDays(currentDate, 1));
  };

  const handleNext = () => {
    if (view === "month") setCurrentDate(addMonths(currentDate, 1));
    else setCurrentDate(addDays(currentDate, 1));
  };

  return (
    <div className={`min-h-screen py-10 pt-24 px-4 md:px-12 transition-all duration-500 ${isDark ? "bg-[#0f172a]" : "bg-[#f8fafc]"}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className={`flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 p-6 rounded-[32px] border transition-all ${isDark ? "bg-[#1e293b] border-[#475569]" : "bg-white border-[#e2e8f0] shadow-xl"}`}>
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#94a3b8]" size={20} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for events..." 
              className={`w-full pl-14 pr-6 py-4 rounded-2xl border-2 outline-none transition-all font-bold text-sm ${isDark ? "bg-[#0f172a] border-[#475569] text-white focus:border-emerald-500" : "bg-slate-50 border-[#e2e8f0] focus:border-emerald-500"}`} 
            />
          </div>

          <div className={`flex p-1.5 rounded-2xl border ${isDark ? "bg-[#0f172a] border-[#475569]" : "bg-slate-100 border-[#e2e8f0]"}`}>
            {["List", "Month", "Day"].map((tab) => (
              <button key={tab} onClick={() => navigate(`/events/${tab.toLowerCase()}`)} className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${view === tab.toLowerCase() ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-[#64748b] dark:text-[#94a3b8]"}`}>
                {tab}
              </button>
            ))}
          </div>

          <button className={`flex items-center gap-2 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg ${isDark ? "bg-emerald-600 text-white" : "bg-[#0f172a] text-white"}`}>
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* NAVIGATION CONTROLS */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button onClick={handlePrev} className={`p-3 rounded-xl border transition-colors ${isDark ? "bg-[#1e293b] border-[#475569] text-white hover:bg-slate-700" : "bg-white border-[#e2e8f0] hover:bg-slate-50"}`}><ChevronLeft size={24} /></button>
              <button onClick={handleNext} className={`p-3 rounded-xl border transition-colors ${isDark ? "bg-[#1e293b] border-[#475569] text-white hover:bg-slate-700" : "bg-white border-[#e2e8f0] hover:bg-slate-50"}`}><ChevronRight size={24} /></button>
            </div>
            <h1 className={`text-3xl font-black tracking-tight ${isDark ? "text-[#f1f5f9]" : "text-[#0f172a]"}`}>
              {view === "day" ? format(currentDate, "MMMM d, yyyy") : format(currentDate, "MMMM yyyy")}
            </h1>
          </div>
          <button onClick={() => setCurrentDate(new Date())} className="px-6 py-2 bg-emerald-500/10 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">Today</button>
        </div>

        {/* CONTENT RENDERER */}
        <div className="mb-16">
          {view === "list" && <ListView events={filteredEvents} />}
          {view === "month" && <MonthView currentDate={currentDate} events={filteredEvents} onDateClick={handleDateClick} />}
          {view === "day" && <DayView date={currentDate} events={filteredEvents} />}
        </div>
      </div>
    </div>
  );
};

export default Events;