import { Star, Building2, MapPin } from 'lucide-react';

export default function PremiumJobs() {
  const premiumJobs = [
    { id: 1, title: 'Deputy Manager - Sales and Marketing', company: 'Aisha Steel Mill Limited', location: 'Lahore' },
    { id: 2, title: 'Assistant Manager - Sales', company: 'Aisha Steel Mill Limited', location: 'Rawalpindi' },
    { id: 3, title: 'Product Manager Agri', company: 'The Bank of Punjab', location: 'Lahore' },
    { id: 4, title: 'Operations Coordinator', company: 'Tech Solutions', location: 'Karachi' },
    { id: 5, title: 'Branch Manager', company: 'U Microfinance Bank', location: 'Multiple Cities' },
    { id: 6, title: 'Senior Executive - IT', company: 'Digital Services Ltd', location: 'Islamabad' },
  ];

  return (
    <section className="mb-16">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border-2 border-amber-200 shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-amber-500 rounded-xl">
            <Star className="w-6 h-6 text-white fill-current" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Premium Select Jobs</h2>
            <p className="text-gray-600 mt-1">Exclusive opportunities from top employers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {premiumJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-amber-100 hover:border-amber-300 cursor-pointer group"
            >
              <h3 className="font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                {job.title}
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-4 h-4" />
                  <span className="line-clamp-1">{job.company}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all hover:scale-105 transform shadow-lg">
            View All Premium Jobs
          </button>
        </div>
      </div>
    </section>
  );
}
