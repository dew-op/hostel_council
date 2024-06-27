import React from 'react';
import Card from './Card';

const cards = [
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
    {
        name: 'Aditya Sindhu',
        img: '/images/img1.svg',
        position: 'General Secretary',
        org: 'Hostel Council',
    },
];

const Members = () => {
    return (
        <div className='min-h-screen w-full px-20 py-20 bg-white flex flex-col justify-center gap-10 items-center'>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 text-left mr-auto">
                    <img src="/images/members.svg" className="h-10 m-auto" alt="members-logo" />
                    <h1 className="font-lato font-extrabold text-4xl">Members</h1>
                    <img src="/images/black_line.svg" className="h-5 m-auto" alt="members-logo" />
                </div>
                <p className="font-lato text-xl mr-auto">
                    Meet Your Student Council Representatives, General Secretaries  .
                </p>
            </div>
            <div className="flex flex-wrap justify-center w-full items-center gap-x-8 gap-y-10">
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
