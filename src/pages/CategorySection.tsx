import { Code, Megaphone, Palette, TrendingUp, Wrench, GraduationCap } from 'lucide-react';

export default function CategorySection() {
  const categories = [
    { name: 'Technology', icon: Code, count: '2,450 Jobs', color: 'bg-blue-500' },
    { name: 'Marketing', icon: Megaphone, count: '1,830 Jobs', color: 'bg-pink-500' },
    { name: 'Design', icon: Palette, count: '1,240 Jobs', color: 'bg-purple-500' },
    { name: 'Sales', icon: TrendingUp, count: '3,120 Jobs', color: 'bg-green-500' },
    { name: 'Engineering', icon: Wrench, count: '1,680 Jobs', color: 'bg-orange-500' },
    { name: 'Education', icon: GraduationCap, count: '980 Jobs', color: 'bg-cyan-500' },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
        <p className="text-xl text-gray-600">Explore jobs in your field of interest</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 cursor-pointer group"
            >
              <div className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                {category.name}
              </h3>

              <p className="text-gray-600 font-medium">{category.count}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
