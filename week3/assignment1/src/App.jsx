import React, { useState } from 'react';
import img4 from './img4.webp';

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const user = {
    name: "Max Verstappen",
    bio: "4× F1 World Champion",
    Team: "Oracle Red Bull Racing",
    image: img4,
    age: 27,
    email: "max@example.com",
    location: "Monaco",
    nationality: "Dutch",
    hobbies: ["Sim Racing", "Karting", "Traveling"],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
   <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-2xl w-96 text-center ">
  <img src={user.image} alt={user.name} className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 shadow-md"/>
  <h2 className="text-3xl font-extrabold text-gray-800">{user.name}</h2>
  <p className="text-blue-600 font-medium mt-1">{user.bio}</p>
  <span className="inline-block mt-2 text-red-700 text-xs px-3 py-1 rounded-full uppercase  font-semibold">{user.Team} </span>
<button onClick={() => setShowDetails(!showDetails)} className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg">
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="mt-6 bg-white p-4 rounded-xl text-left text-sm shadow-md border border-gray-200 space-y-3">
            <p><strong>Email:</strong> <span className="text-blue-700">{user.email}</span></p>
            <p><strong>Location:</strong> <span className="text-gray-700">{user.location}</span></p>
            <p><strong>Team:</strong> <span className="text-red-700">{user.Team}</span></p>
            <p><strong>Age:</strong> <span className="text-gray-700">{user.age}</span></p>
            <p><strong>Nationality:</strong> <span className="text-gray-700">{user.nationality}</span></p>
            <p><strong>Hobbies:</strong> <span className="text-gray-700">{user.hobbies.join(', ')}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
