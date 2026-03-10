import { Target, CheckCircle } from 'lucide-react';

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed text-emerald-50">
              To empower individuals and families in western Jamaica with the resources, support,
              and opportunities they need to rebuild their lives with dignity and create a sustainable,
              resilient future for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Emergency Relief" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 border-b border-l border-r border-white/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-xl">Immediate Emergency Relief</h3>
                </div>
                <p className="text-emerald-50 leading-relaxed">
                  Providing essential supplies, temporary shelter, and critical resources to families
                  in urgent need.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                <img src="https://live-production.wcms.abc-cdn.net.au/18e29ff7aa4e48a8a9c86f10185e536c?impolicy=wcms_crop_resize&cropH=720&cropW=1080&xPos=0&yPos=45&width=862&height=575" alt="Housing Reconstruction" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 border-b border-l border-r border-white/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-xl">Housing Reconstruction</h3>
                </div>
                <p className="text-emerald-50 leading-relaxed">
                  Supporting families to rebuild safe, sturdy homes and restore community infrastructure
                  for long-term stability.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                <img src="https://twofacesofms.com/wp-content/uploads/2020/06/community.jpg" alt="Community Recovery" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 border-b border-l border-r border-white/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-xl">Community Recovery Programs</h3>
                </div>
                <p className="text-emerald-50 leading-relaxed">
                  Restoring local businesses, schools, and healthcare facilities to rebuild the social
                  and economic fabric of communities.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                <img src="https://moey.gov.jm/wp-content/uploads/2020/01/three-girls-smiling-in-school-uniform-barrett-town-jamaica-4268-opt-800x533-1.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-b-2xl p-6 border-b border-l border-r border-white/20">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-xl">Education & Future Resilience</h3>
                </div>
                <p className="text-emerald-50 leading-relaxed">
                  Investing in education, job training, and disaster preparedness to build stronger,
                  more resilient communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
