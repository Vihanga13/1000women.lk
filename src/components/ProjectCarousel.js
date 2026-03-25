import React, { useEffect, useState } from 'react';

const ProjectCarousel = ({ projectName, images = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  const current = images[index];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gradient">Projects</h3>
          <div className="w-24 h-1 bg-gradient-orange mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative bg-gray-50 rounded-3xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:flex-1 flex items-center justify-center p-6 bg-white">
              <img
                src={encodeURI(current)}
                alt={`${projectName} ${index + 1}`}
                className="w-full max-h-96 object-contain"
              />
            </div>

            <div className="md:w-80 p-6 flex flex-col gap-4">
              <h4 className="text-2xl font-bold">{projectName}</h4>
              <p className="text-gray-600">Image {index + 1} of {images.length}</p>
              <div className="flex gap-2 items-center mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full ${i === index ? 'bg-orange-primary' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
