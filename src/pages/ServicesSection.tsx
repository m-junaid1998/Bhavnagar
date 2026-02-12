import { FileText, Award, Rocket } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Rocket className="w-8 h-8 text-teal-600" />
          <h2 className="text-4xl font-bold text-gray-900">Boost Your Job Hunt</h2>
        </div>
        <p className="text-xl text-gray-600">Get professional help to stand out from the crowd</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free CV Review</h3>
              <p className="text-gray-600">
                Does your CV pass the 10-second test? Get free professional feedback from our experts and improve your chances of getting shortlisted.
              </p>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-[1.02] transform">
            Get Free Review
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 group">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-teal-100 rounded-xl group-hover:bg-teal-200 transition-colors">
              <Award className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">CV Writing Service</h3>
              <p className="text-gray-600">
                Our CV experts know what recruiters are looking for. Get your CV optimized with the most searched keywords and increase views by up to 50%.
              </p>
            </div>
          </div>

          <button className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-all hover:scale-[1.02] transform">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
