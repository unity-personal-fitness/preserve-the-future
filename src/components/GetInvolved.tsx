import { Heart, Handshake, Users } from 'lucide-react';

export default function GetInvolved() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              There are many ways to support our mission. Whether you donate, volunteer, or
              partner with us, you become part of the solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-emerald-300 to-emerald-500 relative overflow-hidden">
                <img src="https://www.foodfromtheheart.sg/images/uploads/Ready!%20Set!%20Donate%20Right!%202.png" alt="Donate" className="w-full h-full object-cover opacity-70" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 -mt-12 relative z-10 border-4 border-white shadow-md">
                <Heart className="w-8 h-8 text-emerald-600" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your financial contribution provides immediate relief and long-term support. Every
                dollar makes a difference in rebuilding lives and communities.
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>One-time or monthly donations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Memorial or tribute gifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Corporate matching programs</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition-colors">
            <a href="https://gofund.me/1773eea41" target="_blank"> Donate Now </a>
              </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-amber-300 to-amber-500 relative overflow-hidden">
                <img src="https://images.ctfassets.net/pdf29us7flmy/STWIeKU4PudCChhz55jsd/ae29a51cb79d38d829bb6fced9017c22/resized.jpeg?w=1440&q=100&fm=avif" alt="Volunteer" className="w-full h-full object-cover opacity-70" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 -mt-12 relative z-10 border-4 border-white shadow-md">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Share your time, skills, and expertise to directly support recovery efforts. From
                construction to education, there's a role for everyone.
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>On-the-ground rebuilding projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Remote support and fundraising</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Professional skills and mentorship</span>
                </li>
              </ul>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold transition-colors">
                Become a Volunteer
              </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-emerald-300 to-emerald-500 relative overflow-hidden">
                <img src="https://www.mimedialabs.com/catalog/view/theme/default/assets/image/partner/partner-banner.jpg" alt="Partnership" className="w-full h-full object-cover opacity-70" />
              </div>
              <div className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 -mt-12 relative z-10 border-4 border-white shadow-md">
                <Handshake className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner With Us</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Organizations, businesses, and NGOs can amplify our impact through strategic
                partnerships and collaborative initiatives.
              </p>
              <ul className="space-y-2 mb-8 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Corporate sponsorships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>NGO collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Resource sharing and expertise</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition-colors">
                Explore Partnerships
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
