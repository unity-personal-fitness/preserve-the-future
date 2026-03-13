{/* Our Projects */}
<div>
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Projects</h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-8">
    We currently operate focused initiatives in three key areas of western Jamaica:
  </p>

  <div className="space-y-8">

    {/* Montego Bay */}
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="https://i.ibb.co/WQc35xN/image00014.jpg"
          alt="Montego Bay project"
          className="w-full h-64 md:h-auto object-cover"
        />

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Montego Bay</h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Emergency relief and housing reconstruction efforts focusing on shelter,
            essential supplies, and rebuilding infrastructure for families affected
            by natural disasters.
          </p>

          {setCurrentPage && (
            <button
              onClick={() => {
                setCurrentPage('projects');
                window.scrollTo(0, 0);
              }}
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              View Project Details →
            </button>
          )}
        </div>
      </div>
    </div>

    {/* Westmoreland */}
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="https://i.ibb.co/YvKyqsF/image00012.jpg"
          alt="Westmoreland project"
          className="w-full h-64 md:h-auto object-cover order-2 md:order-1"
        />

        <div className="p-8 flex flex-col justify-center order-1 md:order-2">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Westmoreland</h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Community recovery programs centered on education and economic development,
            restoring schools, supporting local businesses, and creating job training opportunities.
          </p>

          {setCurrentPage && (
            <button
              onClick={() => {
                setCurrentPage('projects');
                window.scrollTo(0, 0);
              }}
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              View Project Details →
            </button>
          )}
        </div>
      </div>
    </div>

    {/* St Elizabeth */}
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src="https://i.ibb.co/Q3PJydMk/image00020.jpg"
          alt="St. Elizabeth project"
          className="w-full h-64 md:h-auto object-cover"
        />

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">St. Elizabeth</h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Comprehensive resilience building through disaster preparedness,
            healthcare recovery, and sustainable livelihood initiatives.
          </p>

          {setCurrentPage && (
            <button
              onClick={() => {
                setCurrentPage('projects');
                window.scrollTo(0, 0);
              }}
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              View Project Details →
            </button>
          )}
        </div>
      </div>
    </div>

  </div>
</div>