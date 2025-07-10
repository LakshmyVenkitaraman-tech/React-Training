import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';
import img4 from './img4.webp';

const ProfileCard = () => {
  const [showDetails, setShowDetails] = useState(false);

  const user = {
    name: "Max Verstappen",
    bio: "4× F1 World Champion",
    Team: "Oracle Red Bull Racing",
    image: img4,
    age: 27,
    email: "max@example.com",
    location: "Monaco",
    nationality: " Dutch",
    hobbies: [" Sim Racing", " Karting", " Traveling"]
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-2xl w-96 text-center transition-all duration-300 hover:shadow-blue-300">
      <img
        src={user.image}
        alt={user.name}
        className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-md"
      />
      <h2 className="text-3xl font-extrabold text-gray-800">{user.name}</h2>
      <p className="text-blue-600 font-medium mt-1">{user.bio}</p>
      <span className="inline-block mt-2 bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
        {user.Team}
      </span>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <ProfileDetails
          email={user.email}
          location={user.location}
          team={user.Team}
          age={user.age}
          nationality={user.nationality}
          hobbies={user.hobbies}
        />
      )}
    </div>
  );
};

export default ProfileCard;
