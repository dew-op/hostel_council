import React, { useState } from "react";

const Noticeboard = () => {
    const allNotices = [
        {
            id: 1,
            title: "Heading",
            date: "March 06 2017",
            description: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa ...",
            fullDescription: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa in full detail.",
        },
        {
            id: 2,
            title: "Heading",
            date: "March 06 2017",
            description: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa ...",
            fullDescription: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa in full detail.",
        },
        {
            id: 3,
            title: "Heading",
            date: "March 06 2017",
            description: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa ...",
            fullDescription: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa in full detail.",
        },
        {
            id: 4,
            title: "Heading",
            date: "March 06 2017",
            description: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa ...",
            fullDescription: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa in full detail.",
        },
        {
            id: 5,
            title: "Heading",
            date: "March 06 2017",
            description: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa ...",
            fullDescription: "The following members attended the meeting: Dean SRIC; Dr D K Saxena; Prof D Singh, Dr S Manhas, Dr A Tariq, Dr D Lahiri, Dr P Jeevanandam, Mr Apurwa, Mr Aman and Mr Sankalp Asawa in full detail.",
        }
    ];

    const [visibleNotices, setVisibleNotices] = useState(3);
    const [expandedNotices, setExpandedNotices] = useState({});

    const handleViewMore = () => {
        setVisibleNotices((prev) => prev + 3);
    };

    const handleReadMore = (id) => {
        setExpandedNotices((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const handleViewLess = () => {
        setVisibleNotices(3);
    };
    return (
        <div id="Noticeboard" className="flex flex-col w-full min-h-screen gap-10 px-5 py-10 bg-white border-t border-b sm:px-7 lg:px-20">
            <div className="max-w-full lg:max-w-11/12 p-4">
                <header className="flex flex-col items-center justify-between mb-6 sm:flex-row">
                    {/* <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
                        <img src="/images/noticeboard.svg" className="h-10" alt="members-logo" />
                        <div className="flex items-center w-full">
                            <h1 className="text-2xl font-extrabold font-lato lg:text-4xl">Sac Noticeboard</h1>
                            <img src="/images/black_line.svg" className="h-5 ml-4" alt="black-line" />
                        </div>
                    </div> */}
                    <div className="flex gap-4 text-left mr-auto">                    
                        <img src="/images/noticeboard.svg" className="h-7 lg:h-10 m-auto" alt="members-logo" />
                        <h1 className="font-lato font-extrabold text-[1.7rem] lg:text-4xl">SAC Noticeboard</h1>
                        <img src="/images/black_line.svg" className="h-2 lg:h-5 m-auto" alt="white-line" />
                    </div>
                </header>

                <p className="font-lato text-md text-left lg:text-xl mr-auto">
                    Your One-Stop Hub for Student Council Updates and Announcements!
                </p>
                <div className="grid w-full grid-cols-1 mx-auto gap-y-12 md:gap-12 sm:gap-x-5 sm:gap-y-7 lg:gap-x-20 lg:gap-y-14 mt-11 sm:grid-cols-2 lg:w-11/12 xl:grid-cols-3">
                    {allNotices.slice(0, visibleNotices).map((notice) => (
                        <div key={notice.id} className="flex flex-col overflow-hidden text-left bg-white rounded-sm shadow-md " style={{ backgroundColor: '#F6F2F2' }}>
                            <div className="p-5 border-t-4 border-black">
                                <h2 className="mb-4 text-xl ">{notice.title}</h2>
                                <p className="mb-4 text-sm font-bold text-gray-900 font-poppins">{notice.date}</p>
                                <p className={`text-base leading-10 font-poppins ${expandedNotices[notice.id] ? '' : 'overflow-hidden text-ellipsis'}`}>
                                    {expandedNotices[notice.id] ? notice.fullDescription : notice.description}
                                </p>
                            </div>
                            <div className="p-5 mt-auto">
                                <button className="w-full px-4 py-2 text-white bg-black rounded-sm md:w-7/12" onClick={() => handleReadMore(notice.id)}>
                                    {expandedNotices[notice.id] ? 'READ LESS' : 'READ MORE'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleNotices < allNotices.length ? (
                    <div className="mt-8 text-left">
                        <button onClick={handleViewMore} className="text-lg text-blue-500">View More</button>
                    </div>
                ) : (
                    <div className="mt-8 text-left">
                        <button onClick={handleViewLess} className="text-lg text-blue-500">View Less</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Noticeboard;
