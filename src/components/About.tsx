interface AboutProps { setCurrentPage?: (page: string) => void; } export default function About({ setCurrentPage }: AboutProps) { return ( <section className="min-h-screen bg-white">
    <div className="relative h-[400px] md:h-[550px] overflow-hidden"> <img src="https://i.ibb.co/YvKyqsF/image00012.jpg" alt="Preserve The Future Team" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white"> About Preserve The Future </h1>
                <p className="text-xl text-gray-100 max-w-2xl mx-auto"> Building resilient communities in western Jamaica through compassion, partnership, and sustained commitment </p>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"> Our Mission </h1>
            <div className="prose prose-lg max-w-4x1 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4"> </h2>
                    <p className="text-lg text-gray-700 leading-relaxed"> At Preserve The Future, we are dedicated to empowering communities in western Jamaica through comprehensive disaster relief, community development, and sustainable livelihood initiatives. We believe that every community deserves the opportunity to thrive, and we work tirelessly to provide the resources, support, and partnerships needed to rebuild and recover. </p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Vision</h1>
                    <p className="text-lg text-gray-700 leading-relaxed"> We envision resilient, thriving communities in western Jamaica where families have access to safe housing, quality education, economic opportunities, and healthcare. Communities that are prepared for natural disasters and equipped with the tools to build a sustainable future for generations to come. </p>
                </div>
                <div className="my-12"> <img src="https://i.ibb.co/Q7s7Ws5y/image00011.jpg" alt="Community engagement and support" className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8" /> </div>
                <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Card 1 */}
    <div className="relative h-[320px] rounded-3xl overflow-hidden group">
      <img
        src="https://images.unsplash.com/photo-1593113598332-cd59a93c6132"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-700/70"></div>

      <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
        <div className="bg-white/90 text-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 font-bold">
          C
        </div>

        <h3 className="text-2xl font-bold mb-3">Community-Driven</h3>

        <p className="text-gray-100 leading-relaxed">
          We work alongside communities, ensuring their voices guide our initiatives and recovery efforts.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative h-[320px] rounded-3xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-amber-600/70"></div>

      <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
        <div className="bg-white/90 text-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 font-bold">
          S
        </div>

        <h3 className="text-2xl font-bold mb-3">Sustainability</h3>

        <p className="text-gray-100 leading-relaxed">
          Our programs focus on long-term solutions that empower communities to build sustainable futures.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative h-[320px] rounded-3xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-700/70"></div>

      <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
        <div className="bg-white/90 text-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 font-bold">
          T
        </div>

        <h3 className="text-2xl font-bold mb-3">Transparency</h3>

        <p className="text-gray-100 leading-relaxed">
          We operate with openness and accountability so supporters clearly see the impact of their contributions.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative h-[320px] rounded-3xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-amber-600/70"></div>

      <div className="relative z-10 p-8 flex flex-col justify-end h-full text-white">
        <div className="bg-white/90 text-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 font-bold">
          C
        </div>

        <h3 className="text-2xl font-bold mb-3">Collaboration</h3>

        <p className="text-gray-100 leading-relaxed">
          We partner with organizations and communities to maximize the reach and effectiveness of our work.
        </p>
      </div>
    </div>

  </div>
</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6"> Since our inception, we have been committed to making a tangible difference in western Jamaica. Our work encompasses: </p>
                    <ul className="space-y-4">
                        <li className="flex gap-4"> <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                            <div>
                                <h4 className="font-semibold text-gray-900">Emergency Relief & Housing</h4>
                                <p className="text-gray-700">Rapid response to natural disasters, providing shelter, essential supplies, and infrastructure reconstruction.</p>
                            </div>
                        </li>
                        <li className="flex gap-4"> <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                            <div>
                                <h4 className="font-semibold text-gray-900">Education & Skills Development</h4>
                                <p className="text-gray-700">Supporting schools, providing job training, and creating educational opportunities for young people.</p>
                            </div>
                        </li>
                        <li className="flex gap-4"> <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                            <div>
                                <h4 className="font-semibold text-gray-900">Economic Development</h4>
                                <p className="text-gray-700">Supporting local businesses, creating employment opportunities, and building sustainable livelihoods.</p>
                            </div>
                        </li>
                        <li className="flex gap-4"> <span className="text-emerald-600 font-bold text-xl flex-shrink-0">•</span>
                            <div>
                                <h4 className="font-semibold text-gray-900">Healthcare & Resilience</h4>
                                <p className="text-gray-700">Supporting disaster preparedness, healthcare recovery, and building community resilience.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8"> We currently operate focused initiatives in three key areas of western Jamaica: </p>
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="grid md:grid-cols-2 gap-6"> <img src="https://i.ibb.co/WQc35xN/image00014.jpg" alt="Montego Bay project" className="w-full h-64 md:h-auto object-cover" />
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Montego Bay</h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed"> Emergency relief and housing reconstruction efforts focusing on shelter, essential supplies, and rebuilding infrastructure for families affected by natural disasters. </p> {setCurrentPage && ( <button onClick={()=> { setCurrentPage('projects'); window.scrollTo(0, 0); }} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2" > View Project Details → </button> )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="grid md:grid-cols-2 gap-6"> <img src="https://i.ibb.co/YvKyqsF/image00012.jpg" alt="Westmoreland project" className="w-full h-64 md:h-auto object-cover order-2 md:order-1" />
                                <div className="p-8 flex flex-col justify-center order-1 md:order-2">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Westmoreland</h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed"> Community recovery programs centered on education and economic development, restoring schools, supporting local businesses, and creating job training opportunities. </p> {setCurrentPage && ( <button onClick={()=> { setCurrentPage('projects'); window.scrollTo(0, 0); }} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2" > View Project Details → </button> )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="grid md:grid-cols-2 gap-6"> <img src="https://i.ibb.co/Q3PJydMk/image00020.jpg" alt="St. Elizabeth project" className="w-full h-64 md:h-auto object-cover" />
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">St. Elizabeth</h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed"> Comprehensive resilience building through disaster preparedness, healthcare recovery, and sustainable livelihood initiatives. </p> {setCurrentPage && ( <button onClick={()=> { setCurrentPage('projects'); window.scrollTo(0, 0); }} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2" > View Project Details → </button> )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-8 mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6"> Whether through volunteering your time, making a donation, or partnering with us, you can be part of meaningful change in western Jamaica. Together, we can build stronger, more resilient communities that thrive for generations to come. </p> <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"> <a href="https://gofund.me/1773eea41" target="_blank" rel="noopener noreferrer"> Get Involved </a> </button>
                </div>
            </div>
        </div>
    </div>
</section> ); }