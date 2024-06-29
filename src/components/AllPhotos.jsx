import React from 'react';

const AllPhotos = () => {
    const images = [
        'images/image5.svg',
        'images/image3.svg',
        'images/image4.svg',
        'images/image2.svg',
        'images/image5.svg',
        'images/image3.svg',
        'images/image4.svg',
        'images/image2.svg',
        'images/image5.svg',
        'images/image3.svg',
        'images/image4.svg',
        'images/image2.svg',
        'images/image5.svg',
        'images/image3.svg',
        'images/image4.svg',
        'images/image2.svg',
        'images/image5.svg',
        'images/image3.svg',
        'images/image4.svg',
        'images/image2.svg',
        'images/image1.svg',
    ];

    return (
        <div className="max-w-screen-xl p-2 mx-auto sm:p-4">
            <h1 className="mt-4 mb-5 text-3xl font-semibold text-center text-gray-800 sm:text-4xl sm:mb-6 lg:text-5xl lg:mb-8">
                Photo Gallery
            </h1>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={image}
                            alt={`All photo ${index + 1}`}
                            className="object-cover w-full h-64 transition-transform transform rounded-lg shadow-lg hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPhotos;
