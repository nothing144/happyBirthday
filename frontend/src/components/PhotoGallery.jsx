import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 p-3 bg-orange-100 rounded-full">
            <Camera className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Birthday Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing the beautiful moments of celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={image.id}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">{image.caption}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
          <Button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white"
            size="icon"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            onClick={goToPrevious}
            className="absolute left-4 z-50 bg-white/20 hover:bg-white/30 text-white"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={goToNext}
            className="absolute right-4 z-50 bg-white/20 hover:bg-white/30 text-white"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="max-w-5xl max-h-[90vh] mx-4">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-xl">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
