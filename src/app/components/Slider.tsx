import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const SimpleSlider = () => {
    const items = [
        <div key="1" className="item">
            <Image
                src="/courses.webp"
                alt="Courses"
                width={582} 
                height={330}
            />
        </div>,
        <div key="2" className="item">
            <Image
                src="/enterprises.webp"
                alt="Enterprises"
                width={582} 
                height={330}
            />
        </div>,
        <div key="3" className="item">
            <Image
                src="/stages.webp"
                alt="Stages"
                width={582} 
                height={330}
            />
        </div>,
        <div key="4" className="item">
            <Image
                src="/teachers.webp"
                alt="Teachers"
                width={582} 
                height={330}
            />
        </div>
    ];

    return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableButtonsControls={true}
            disableDotsControls={false}
            mouseTracking={true}
            responsive={{
                0: { items: 1 },
                1024: { items: 1 }
            }}
        />
    );
};

export default SimpleSlider;