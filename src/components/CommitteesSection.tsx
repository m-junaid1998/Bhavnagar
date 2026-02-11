import { Building2, Heart, Zap, BookOpen, Users, DollarSign, Scale, Trophy, Briefcase, Shield, GraduationCap, Radio } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function CommitteesSection() {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const committees = [
    { name: 'Qabarastan Committee', icon: Building2, description: 'Cemetery management and services' },
    { name: 'Medical Aid Committee', icon: Heart, description: 'Healthcare assistance programs' },
    { name: 'Qurbani Committee', icon: Shield, description: 'Religious ceremony coordination' },
    { name: 'Fund Collection', icon: DollarSign, description: 'Fundraising initiatives' },
    { name: 'Investigation Committee', icon: Briefcase, description: 'Cases and grievances' },
    { name: 'Education Committee', icon: GraduationCap, description: 'Scholarship programs' },
    { name: 'Media Committee', icon: Radio, description: 'Communications & PR' },
    { name: 'Sports Committee', icon: Trophy, description: 'Sports activities' },
    { name: 'Financial Assistance', icon: DollarSign, description: 'Emergency relief' },
    { name: 'IT Committee', icon: Zap, description: 'Technology services' },
    { name: 'Rehabilitation', icon: Heart, description: 'Recovery programs' },
    { name: 'Conciliation Board', icon: Scale, description: 'Dispute resolution' },
  ];

  return (
    <section id="committees" className={`py-20 px-4 theme-transition ${isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-emerald-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold font-['Plus_Jakarta_Sans'] mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Our Committees</h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Dedicated teams working towards community welfare and development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committees.map((committee, index) => {
            const Icon = committee.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 transition-all duration-300 border group cursor-pointer hover:-translate-y-1 animate-scale-in ${isDark ? 'bg-slate-800 border-slate-700 hover:border-emerald-400' : 'bg-white border-gray-100 hover:border-emerald-300'}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className={`text-lg font-bold font-['Plus_Jakarta_Sans'] mb-2 group-hover:text-emerald-500 transition-colors theme-transition ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {committee.name}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{committee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
