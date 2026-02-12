import { Calendar, ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function NewsSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const news = [
    {
      id: 1,
      title: 'Kashmir Day Celebration',
      date: 'February 10, 2024',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Events'
    },
    {
      id: 2,
      title: 'Community Welfare Program Launch',
      date: 'January 25, 2024',
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Programs'
    },
    {
      id: 3,
      title: 'Medical Camp Success',
      date: 'January 15, 2024',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Healthcare'
    }
  ];

  return (
    <section id="news" className={`py-20 px-4 theme-transition ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-emerald-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold font-['Plus_Jakarta_Sans'] mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>News & Articles</h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Stay updated with our latest initiatives and community activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <div
              key={article.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer hover:-translate-y-2 animate-slide-up shadow-lg ${isDark ? 'bg-slate-800 hover:shadow-2xl' : 'bg-white hover:shadow-2xl'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className={`flex items-center gap-2 text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className={`text-xl font-bold font-['Plus_Jakarta_Sans'] mb-4 group-hover:text-emerald-500 transition-colors theme-transition line-clamp-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-emerald-500 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
