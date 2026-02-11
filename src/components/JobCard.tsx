import { MapPin, Briefcase, Clock, DollarSign, Star } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  featured?: boolean;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 cursor-pointer transform hover:-translate-y-1">
      {job.featured && (
        <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold mb-3">
          <Star className="w-4 h-4 fill-current" />
          <span>Featured</span>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
        {job.title}
      </h3>

      <p className="text-gray-600 font-medium mb-4">{job.company}</p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>{job.posted}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
          <Briefcase className="w-3 h-3" />
          {job.type}
        </span>

        <button className="text-teal-600 font-semibold text-sm group-hover:text-teal-700 transition-colors">
          View Details →
        </button>
      </div>
    </div>
  );
}
