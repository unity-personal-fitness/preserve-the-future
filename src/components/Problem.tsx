import { CloudRain, Home, Users, AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Impact of Hurricane Melissa
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              In the month of October 2025, Hurricane Melissa devastated western Jamaica, leaving thousands
              of families without homes, livelihoods, or access to basic necessities. Communities
              that once thrived now face the long road to recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 border border-gray-100 overflow-hidden relative group" style={{backgroundImage: 'linear-gradient(145deg, rgba(16, 185, 129, 0.45) 0%, rgba(5, 150, 105, 0.45) 100%), url("https://static01.nyt.com/images/2025/10/29/multimedia/29wea-melissa-jamaican-devastation-01-fpqj/29wea-melissa-jamaican-devastation-01-fpqj-articleLarge.jpg?quality=75&auto=webp&disable=upscale")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 to-emerald-50/10 group-hover:from-gray-50/5 group-hover:to-emerald-50/5 transition-all" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/90 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Housing Devastation</h3>
                <p className="text-white/95 leading-relaxed">
                  Thousands of homes destroyed or severely damaged, displacing entire families and
                  leaving them vulnerable to the elements and uncertainty.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-gray-100 overflow-hidden relative group" style={{backgroundImage: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(217, 119, 6, 0.45) 100%), url("https://images.pexels.com/photos/3683519/pexels-photo-3683519.jpeg?auto=compress&cs=tinysrgb&w=600")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 to-amber-50/10 group-hover:from-gray-50/5 group-hover:to-amber-50/5 transition-all" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/90 rounded-xl flex items-center justify-center mb-4">
                  <AlertCircle className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Food & Water Insecurity</h3>
                <p className="text-white/95 leading-relaxed">
                  Critical infrastructure damage disrupted access to clean water and food supplies,
                  affecting the health and wellbeing of entire communities.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-gray-100 overflow-hidden relative group" style={{backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.45) 0%, rgba(5, 150, 105, 0.45) 100%), url("https://cdn.abcotvs.com/dip/images/18089899_103025-cc-ap-jamaica-melissa-img.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 to-emerald-50/10 group-hover:from-gray-50/5 group-hover:to-emerald-50/5 transition-all" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/90 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Community Disruption</h3>
                <p className="text-white/95 leading-relaxed">
                  Schools, medical facilities, and local businesses were forced to close, disrupting
                  education, healthcare, and economic stability.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-gray-100 overflow-hidden relative group" style={{backgroundImage: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(217, 119, 6, 0.45) 100%), url("https://convoyofhope.org/wp-content/uploads/2025/10/AP_Hurricane-Melissa_APTOPIX_Jamaica_Extreme_Weather_25303755842768-scaled.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 to-amber-50/10 group-hover:from-gray-50/5 group-hover:to-amber-50/5 transition-all" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/90 rounded-xl flex items-center justify-center mb-4">
                  <CloudRain className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Ongoing Vulnerability</h3>
                <p className="text-white/95 leading-relaxed">
                  Without proper resources and support, families remain at risk with limited ability
                  to prepare for future storms and rebuild sustainably.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-2xl p-6 max-w-2xl">
              <p className="text-lg text-gray-800 leading-relaxed">
                <span className="font-bold text-emerald-700">But there is hope.</span> With your support,
                we're helping families rebuild their lives with dignity, resilience, and the resources
                they need to thrive once again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
