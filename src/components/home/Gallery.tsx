import React, { useState } from 'react';

const carImages = [
  'assets/car-image/car1.jpg',
  'assets/car-image/car2.jpg',
  'assets/car-image/car3.jpg',
  'assets/car-image/car4.jpg',
  'assets/car-image/car5.jpg',
  'assets/car-image/car6.jpg',
  'assets/car-image/car7.jpg',
  'assets/car-image/car8.jpg',
  'assets/car-image/car9.jpg',
  'assets/car-image/car10.jpg',
  'assets/car-image/car11.jpg',
  'assets/car-image/car12.jpg',
  'assets/car-image/car13.jpg',
  'assets/car-image/car14.jpg',
  'assets/car-image/car15.jpg',
  'assets/car-image/car16.jpg',
  'assets/car-image/car17.jpg',
  'assets/car-image/car18.jpg',
  'assets/car-image/car19.jpg',
  'assets/car-image/car20.jpg',
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-xuan-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-xuan-primary">
          CÁC HÌNH ẢNH DÒNG XE PHỤC VỤ
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Xe Hợp Đồng Xuân Thủy tự hào cung cấp đa dạng các dòng xe từ 4 đến 16 chỗ 
          với chất lượng cao và dịch vụ chuyên nghiệp.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {carImages.slice(0, 20).map((image, index) => (
            <div 
              key={index} 
              className="img-hover-zoom shadow-soft"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`Car ${index + 1}`}
                className="w-full h-48 object-cover cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-screen">
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={closeLightbox}
              aria-label="Close"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
