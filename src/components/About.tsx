interface AboutProps {
  setCurrentPage?: (page: string) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  return (
    <section className="min-h-screen bg-white">
      <div className="relative h-[400px] md:h-[550px] overflow-hidden">
        <img
          src="https://i.ibb.co/YvKyqsF/image00012.jpg"
          alt="Preserve The Future Team"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About Preserve The Future
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Building resilient communities in western Jamaica through compassion, partnership, and sustained commitment
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our Mission
          </h1>

          <div className="prose prose-lg max-w-4xl space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed">
              At Preserve The Future, we are dedicated to empowering communities in western Jamaica through comprehensive disaster relief, community development, and sustainable livelihood initiatives. We believe that every community deserves the opportunity to thrive, and we work tirelessly to provide the resources, support, and partnerships needed to rebuild and recover.
            </p>

            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Vision</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision resilient, thriving communities in western Jamaica where families have access to safe housing, quality education, economic opportunities, and healthcare. Communities that are prepared for natural disasters and equipped with the tools to build a sustainable future for generations to come.
              </p>
            </div>

            <div className="my-12">
              <img
                src="https://i.ibb.co/Q7s7Ws5y/image00011.jpg"
                alt="Community engagement and support"
                className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8"
              />
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe in working alongside communities, respecting their voices, and ensuring their needs guide every initiative we undertake.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our programs focus on long-term solutions that empower communities to build resilience and support themselves for the future.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We operate with openness and accountability so supporters and communities clearly see the impact of our work.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We work with local partners, organizations, and institutions to maximize the reach and effectiveness of our programs.
                  </p>
                </div>

              </div>
            </div>

            {/* Our Work */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since our inception, we have been committed to making a tangible difference in western Jamaica. Our work encompasses:
              </p>

              <ul className="space-y-4">

                <li className="flex gap-4">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Relief & Housing</h4>
                    <p className="text-gray-700">
                      Rapid response to natural disasters, providing shelter, essential supplies, and infrastructure reconstruction.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Education & Skills Development</h4>
                    <p className="text-gray-700">
                      Supporting schools, providing job training, and creating educational opportunities for young people.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Economic Development</h4>
                    <p className="text-gray-700">
                      Supporting local businesses, creating employment opportunities, and building sustainable livelihoods.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Healthcare & Resilience</h4>
                    <p className="text-gray-700">
                      Supporting disaster preparedness, healthcare recovery, and building community resilience.
                    </p>
                  </div>
                </li>

              </ul>
            </div>

            {/* Join Mission */}
            <div className="bg-emerald-50 rounded-xl p-8 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Whether through volunteering your time, making a donation, or partnering with us, you can be part of meaningful change in western Jamaica.
              </p>

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                <a
                  href="https://gofund.me/1773eea41"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Involved
                </a>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}