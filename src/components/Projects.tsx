import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Montego Bay',
      description:
        'Emergency relief and housing reconstruction efforts in Montego Bay. Providing shelter, essential supplies, and rebuilding infrastructure to support families affected by natural disasters.',
      images: [
        'https://i.ibb.co/WQc35xN/image00014.jpg',
        'https://i.ibb.co/Y73WbqTK/image00003.jpg',
        'https://i.ibb.co/CspVp78R/image00001.jpg',
        'https://i.ibb.co/TxpHQNjy/image00002.jpg',
        'https://i.ibb.co/r2jSJBxN/image00010.jpg',
        'https://i.ibb.co/qLF6tjNZ/image00004.jpg',
        'https://i.ibb.co/ymYftHcW/image00019.jpg',
        'https://i.ibb.co/NdhCnWfk/image00017.jpg',
        'https://i.ibb.co/JjxshXcX/image00008.jpg',
        'https://i.ibb.co/gZ4ScnjS/image00016.jpg',
      ],
      focus: ['Emergency Relief', 'Housing', 'Infrastructure'],
    },
    {
      id: 2,
      name: 'Westmoreland',
      description:
        'Community recovery programs in Westmoreland focusing on education and economic development. Restoring schools, supporting local businesses, and creating job training opportunities.',
      images: [
        'https://i.ibb.co/Q7s7Ws5y/image00011.jpg',
        'https://i.ibb.co/YvKyqsF/image00012.jpg',
        'https://i.ibb.co/wF0dhCBk/image00009.jpg',
        'https://i.ibb.co/wF0dhCBk/image00009.jpg',
        'https://i.ibb.co/Q7WmKZCH/image00010.jpg',
        'https://i.ibb.co/qwsgxgn/image00002.jpg',
        'https://i.ibb.co/8ntcr8sg/image00004.jpg',
        'https://i.ibb.co/pFBCxqn/image00007.jpg',
        'https://i.ibb.co/4wv1fFBq/image00014.jpg',
        'https://i.ibb.co/XfhLGVg8/image00016.jpg',
        '',
        '',
      ],
      focus: ['Education', 'Economic Development', 'Community Centers'],
    },
    {
      id: 3,
      name: 'St. Elizabeth',
      description:
        'Building resilience through comprehensive support programs in St. Elizabeth. Integrating disaster preparedness, healthcare recovery, and sustainable livelihood initiatives.',
      images: [
        'https://i.ibb.co/Q3PJydMk/image00020.jpg',
      ],
      focus: ['Resilience Building', 'Healthcare', 'Sustainability'],
    },
  ];

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <section className="pb-20">

      {/* HERO */}
      <div className="relative h-[420px] md:h-[600px] overflow-hidden">
        <img
          src="https://i.ibb.co/cKf1xxpg/image00006.jpg"
          alt="Project team"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Projects
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Making a tangible difference in western Jamaica through focused,
              community-driven initiatives
            </p>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="container mx-auto px-6">
        <div className="space-y-24 bg-gray-50 rounded-2xl -mx-6 px-6 py-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">

                {/* TEXT */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {project.name}
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      Focus Areas:
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.focus.map((area) => (
                        <span
                          key={area}
                          className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openProjectModal(project.id)}
                    className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
                  >
                    View Project Details →
                  </button>
                </div>

                {/* IMAGE WITH OVERLAY */}
                <div>
                  <button
                    onClick={() => openProjectModal(project.id)}
                    className="relative w-full h-80 overflow-hidden rounded-xl bg-gray-200 shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm shadow-md">
                        View Gallery →
                      </span>
                    </div>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Get Involved</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-emerald-50">
            Help us expand our impact in these communities and beyond. Whether
            through volunteering, donations, or partnerships, your support makes
            a difference.
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
            <a
              href="https://gofund.me/1773eea41"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Our Projects
            </a>
          </button>
        </div>
      </div>

      {/* MODAL */}
      <ImageModal
        isOpen={isModalOpen}
        images={selectedProjectData?.images || []}
        projectName={selectedProjectData?.name || ''}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}