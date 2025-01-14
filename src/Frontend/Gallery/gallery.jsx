import React, { useState } from "react";
import {files} from '../../constants/index'


const galleryImages = [
  { src: files.about_1, alt: "Luxurious hotel room", category: "Rooms" },
  { src: files.about_2, alt: "Double bed", category: "Rooms" },
  { src: files.birthday, alt: "Birthday hall", category: "Events" },
  { src: files.wedding, alt: "Relaxing wedding area", category: "Events" },
  { src: files.conference, alt: "Meeting Hall", category: "Events" },
  { src: files.image_1, alt: "Outdoor setting", category: "Events" },
  { src: files.other, alt: "Other hall", category: "Events" },
  { src: files.bg_4, alt: "Cozy hotel room", category: "Rooms" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState(null);

  const filteredImages = filter
    ? galleryImages.filter((img) => img.category === filter)
    : galleryImages;

  const categories = Array.from(new Set(galleryImages.map((img) => img.category)));

  return (
    <div className="container mt-4 mb-4 mx-auto px-4 py-16">
      <h2 className="text-[#293941] md:text-4xl text-xl font-bold text-center mb-8">Our Gallery</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${
            filter === null ? "bg-[#c59a63] text-white focus:outline-none" : "focus:outline-none bg-[#c2c3c7] text-[#293941]"
          }`}
          onClick={() => setFilter(null)}
        >
          All categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              filter === category ? "bg-[#c59a63] text-white focus:outline-none" : "focus:outline-none bg-[#c2c3c7] text-[#293941]"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-64"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="object-contain max-h-[90vh] w-full"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
