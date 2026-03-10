import { Quote, Award, CheckCircle } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Communities & Partners
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our commitment to transparency, accountability, and results has earned the trust
              of thousands of families and leading organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
              <Quote className="w-10 h-10 text-emerald-600 mb-4" />
              <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
                "After losing everything in Hurricane Melissa, we didn't know where to turn. Preserve
                the Future Foundation gave us more than just shelter and supplies—they gave us hope
                and helped us rebuild our lives with dignity."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-bold">MC</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Maria Chen</div>
                  <div className="text-sm text-gray-600">Savanna-la-Mar, Jamaica</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 border border-amber-100 shadow-sm">
              <Quote className="w-10 h-10 text-amber-600 mb-4" />
              <p className="text-lg text-gray-800 italic leading-relaxed mb-4">
                "Volunteering with this foundation was life-changing. Seeing the direct impact of our
                work and the resilience of these communities inspired me beyond measure. This organization
                truly makes every resource count."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold">JT</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">James Thompson</div>
                  <div className="text-sm text-gray-600">Volunteer, Toronto</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="h-20 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-gray-400 font-semibold text-sm">Partner Logo</span>
              </div>
              <div className="h-20 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-gray-400 font-semibold text-sm">Partner Logo</span>
              </div>
              <div className="h-20 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-gray-400 font-semibold text-sm">Partner Logo</span>
              </div>
              <div className="h-20 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-gray-400 font-semibold text-sm">Partner Logo</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-gray-900 mb-1">Registered Nonprofit</div>
                <div className="text-sm text-gray-700">Fully registered and compliant with all regulations</div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex items-start gap-4">
              <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-gray-900 mb-1">Transparent Reporting</div>
                <div className="text-sm text-gray-700">Regular financial and impact reports published</div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-bold text-gray-900 mb-1">Community-Led</div>
                <div className="text-sm text-gray-700">Programs designed with community input and leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
