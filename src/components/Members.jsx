import React from 'react';
import Card from './Card';

const cards = [
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Affairs',
    },
    {
        name: 'Gaurav Kumar',
        img: '/images/img2.svg',
        position: 'Deputy General Secretary - PG Boys',
        org: 'Hostel Affairs',
    },
    {
        name: 'Nitish Kumar',
        img: '/images/img3.svg',
        position: 'Deputy General Secretary - UG Boys',
        org: 'Hostel Affairs',
    },
    {
        name: 'Anet Maria P',
        img: '/images/img4.svg',
        position: 'Deputy General Secretary - Girls',
        org: 'Hostel Affairs',
    },
    {
        name: 'Ankur Singh',
        img: '/images/img5.svg',
        position: 'General Secretary - PG',
        org: 'Academic Affairs',
    },
    {
        name: 'Sanchit Chaba',
        img: '/images/img6.svg',
        position: 'General Secretary - UG',
        org: 'Academic Affairs',
    },
    {
        name: 'Sankalp Raj',
        img: '/images/img7.svg',
        position: 'General Secretary',
        org: 'Technical Affairs',
    },
    {
        name: 'Ankit Dhaka',
        img: '/images/img8.svg',
        position: 'General Secretary',
        org: 'Sports Affairs',
    },
    {
        name: 'Mayank Chauhan',
        img: '/images/img9.svg',
        position: 'General Secretary',
        org: 'Cultural Affairs',
    },
    {
        name: 'Ishaan Jain',
        img: '/images/img10.svg',
        position: 'General Secretary',
        org: 'Entrepreneurship Affairs',
    },
];

const Members = () => {
    return (
        <div id="Members" className='min-h-screen w-full px-8 lg:px-20 py-20 bg-white flex flex-col justify-center gap-6 lg:gap-10 items-center'>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 text-left mr-auto">
                    <img src="/images/members.svg" className="h-7 lg:h-10 m-auto" alt="members-logo" />
                    <h1 className="font-lato font-extrabold text-3xl lg:text-4xl">Members</h1>
                    <img src="/images/black_line.svg" className="h-2 lg:h-5 m-auto" alt="members-logo" />
                </div>
                <p className="font-lato text-md text-left lg:text-xl mr-auto">
                    Meet Your Student Council Representatives, General Secretaries  .
                </p>
            </div>
            <div className="flex flex-wrap justify-center w-full mt-4 px-8 lg:px-0 gap-4 md:gap-8 lg:gap-10">
              {cards.map(({ name, img, position, org }, index) => (
                <Card
                  key={index}
                  name={name}
                  img={img}
                  position={position}
                  org={org}
                />
              ))}
            </div>
        </div>
    );
};

export default Members;
