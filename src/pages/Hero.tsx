import { Search, MapPin, Briefcase } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  locationQuery: string;
  setLocationQuery: (value: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery, locationQuery, setLocationQuery }: HeroProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-teal-600 to-cyan-500">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">JobPortal</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-teal-100 transition-colors font-medium">Find Jobs</button>
            <button className="text-white hover:text-teal-100 transition-colors font-medium">Post a Job</button>
            <button className="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-teal-50 transition-all hover:scale-105 transform">Sign In</button>
          </div>
        </div>
      </nav>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Job
            <span className="block text-teal-100 mt-2">Start Your Career Today</span>
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto">
            Discover thousands of job opportunities from top companies. Your next career move starts here.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="City or region"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all hover:scale-105 transform shadow-lg">
              Search Jobs
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-blue-50 text-sm mb-3">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Marketing', 'Development', 'Design', 'Sales', 'Engineering'].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm hover:bg-white/30 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </header>
  );
}
