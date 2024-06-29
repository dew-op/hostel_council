import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';
const images = [
    { src: 'images/image5.svg', alt: 'Image 5' },
    { src: 'images/image3.svg', alt: 'Image 3' },
    { src: 'images/image2.svg', alt: 'Image 2' },
    { src: 'images/image1.svg', alt: 'Image 1' },
    { src: 'images/image4.svg', alt: 'Image 4' },
    { src: 'images/image3.svg', alt: 'Image 3' },
    { src: 'images/image2.svg', alt: 'Image 2' },
    { src: 'images/image1.svg', alt: 'Image 1' },
    { src: 'images/image3.svg', alt: 'Image 3' },
    { src: 'images/image2.svg', alt: 'Image 2' },
    { src: 'images/image1.svg', alt: 'Image 1' },
    { src: 'images/image3.svg', alt: 'Image 3' },
    { src: 'images/image2.svg', alt: 'Image 2' },
    { src: 'images/image1.svg', alt: 'Image 1' },
    { src: 'images/image4.svg', alt: 'Image 4' }
];

const ImageSlider = () => {
    return (
        <div className="w-full h-full px-5 py-12 text-white bg-black lg:py-16 sm:px-7 sm:py-14 lg:px-20 ">
            <header className="flex flex-col items-center justify-between mb-8 lg:flex-row">
                <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
                    <img src="/images/gallery.svg" className="h-10 " alt="gallery-logo" />
                    <div className="flex items-center w-full">
                        <h1 className="text-2xl font-extrabold font-lato md:text-3xl lg:text-4xl">Gallery</h1>
                        <img src="/images/whiteline.svg" className="h-5 ml-4 text-white" alt="white-line" />
                    </div>
                </div>
            </header>
            <p className="mb-12 text-lg text-left font-lato md:text-xl">
                Discover Beauty in Every Corner. Here's our College Campus Through a Serene lens.
            </p>
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1300: {
                        slidesPerView: 4,
                    },
                }}
                loop={true}
                navigation
                className="w-full overflow-hidden rounded-lg lg:w-10/12"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="slide">
                        <img src={image.src} alt={image.alt} className="object-cover w-full rounded-md h-96 sm:h-80 md:h-80 lg:h-96" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="mt-6 text-left">
                <Link to="/all-photos">
                    <button className="text-xl text-white font-lato ">
                        See all
                    </button>
                </Link>
            </div>
            <style jsx>{`
                .swiper-slide {
                    transition: transform 0.3s, filter 0.3s;
                }
                .swiper-slide-active {
                    transform: scale(1.2);
                    filter: none;
                }
                .swiper-slide:not(.swiper-slide-active) {
                    
                }
               .swiper-button-next, .swiper-button-prev {
    color: white;
    font-weight: 900; /* You can use values from 100 to 900 */
}
            `}</style>
        </div>
    );
};

export default ImageSlider;
