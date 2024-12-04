import React from 'react';
import { useNavigate } from 'react-router-dom';

const Suppliereventuser = () => {
  const navigate = useNavigate();

  // Example data for events
  const events = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
      name: 'Community Feast',
      food: 'Vegetarian Dishes',
      location: 'Downtown Hall, City A',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
      name: 'Charity Food Drive',
      food: 'Packed Lunches',
      location: 'Community Center, City B',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
      name: 'Homeless Shelter Support',
      food: 'Soup and Bread',
      location: 'Shelter #4, City C',
    },
  ];

  const handleAddEvent = () => {
    navigate('/addevent'); // Redirect to the Add Event page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Upcoming Events</h1>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Event Cards */}
        {events.map((event) => (
          <div
            key={event.id}
            className="p-6 bg-yellow-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Event Details */}
            <h2 className="text-xl font-bold text-gray-800">{event.name}</h2>
            <p className="text-gray-600 mt-2">
              <strong>Food:</strong> {event.food}
            </p>
            <p className="text-gray-600 mt-1">
              <strong>Location:</strong> {event.location}
            </p>
          </div>
        ))}

        {/* Add Event Card */}
        <div
          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg border-dashed border-4 border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300"
          onClick={handleAddEvent}
        >
          <span className="text-6xl text-gray-400">+</span>
        </div>
      </div>
    </div>
  );
};

export default Suppliereventuser;
