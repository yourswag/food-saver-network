import React, { useState } from "react";

const Ngoeventuser = () => {
    // Dummy event data with name, location, and food item
    const [events] = useState([
        { id: 1, name: "Charity Gala", location: "west bengal", food: "Buffet", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Food Drive", location: "delhi", food: "Canned Goods", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Fundraiser Marathon", location: "mumbai", food: "Snacks & Drinks", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Community Cleanup", location: "chennai", food: "Refreshments", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Blood Donation Camp", location: "goa", food: "Energy Bars", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Education Workshop", location: "kerala", food: "Coffee & Pastries", image: "https://via.placeholder.com/150" },
    ]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Events You Might Be Interested In</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {events.map(({ id, name, location, food, image }) => (
                    <div
                        key={id}
                        className="border rounded-lg shadow-lg p-4 bg-yellow-500 hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-40 object-cover mb-4 rounded-lg"
                        />
                        <h2 className="text-lg font-semibold">{name}</h2>
                        <p className="text-black">Location: {location}</p>
                        <p className="text-black">Food: {food}</p>
                        {/* Use a standard HTML button instead of the PrimeReact Button */}
                        <button
                            className="w-full mt-4 p-button-rounded p-button-success bg-green-500 text-white p-2 rounded"
                        >
                            Interested
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ngoeventuser;
