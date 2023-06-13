import React from 'react';
import SuiteCard from './SuiteCard';
import img1 from '../../Assets/fine.jpg'
import './Rooms.css';


const SuitesPage = () => {
    const suites = [
        {
            id: 1,
            title: 'Luxury Suite',
            description: 'Experience the epitome of luxury in our spacious and elegant suite.',
            imageUrl: img1,
            amminities: {
                1: "Free Wifi",
                2: "Room Service",
                3: "something else",

            }
        },
        {
            id: 2,
            title: 'Deluxe Suite',
            description: 'Indulge in comfort and style in our deluxe suite with modern amenities.',
            imageUrl: img1,
            amminities: {
                1: "Free Wifi",
                2: "Room Service",
                3: "something else",

            }

        },
        // Add more suite objects as needed
    ];

    return (
        <div className="suites-page">
            <h2 className="section-title">Suites</h2>
            <div className="suite-cards">
                {suites.map(suite => (
                    <SuiteCard key={suite.id} suite={suite} />
                ))}
            </div>
        </div>
    );
};

export default SuitesPage;
