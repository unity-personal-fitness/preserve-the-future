import { Package, Building2, Users, GraduationCap } from 'lucide-react';

export default function Impact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creating Lasting Impact
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Every donation, every volunteer hour, and every partnership creates real, measurable
              change in the lives of families across western Jamaica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-300 to-emerald-500 relative overflow-hidden">
                <img src="https://images.pexels.com/photos/3962275/pexels-photo-3962275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Emergency Relief" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto -mt-12 relative z-10 border-4 border-white shadow-md">
                <Package className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Emergency Relief</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                Delivering food, water, medical supplies, and temporary shelter to families in crisis.
              </p>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">8,200+</div>
                <div className="text-sm text-gray-700 font-medium">Relief Packages Distributed</div>
              </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-300 to-amber-500 relative overflow-hidden">
                <img src="https://i.ibb.co/dwxjj3vF/image00022.jpg" alt="Housing Support" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto -mt-12 relative z-10 border-4 border-white shadow-md">
                <Building2 className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Housing Support</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                Rebuilding homes and infrastructure to restore safety, security, and dignity.
              </p>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">300+</div>
                <div className="text-sm text-gray-700 font-medium">Homes Rebuilt or Repaired</div>
              </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-300 to-emerald-500 relative overflow-hidden">
                <img src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Community Programs" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto -mt-12 relative z-10 border-4 border-white shadow-md">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Community Programs</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                Restoring community centers, small businesses, and essential services.
              </p>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">25</div>
                <div className="text-sm text-gray-700 font-medium">Community Projects Active</div>
              </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-300 to-amber-500 relative overflow-hidden">
                <img src="https://thekeystoneschool.wordpress.com/wp-content/uploads/2022/04/education-and-training.png" alt="Education & Training" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 mx-auto -mt-12 relative z-10 border-4 border-white shadow-md">
                <GraduationCap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Education & Training</h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6">
                Investing in education, skills training, and disaster preparedness programs.
              </p>
              <div className="bg-amber-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">1,200+</div>
                <div className="text-sm text-gray-700 font-medium">Students & Adults Trained</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
