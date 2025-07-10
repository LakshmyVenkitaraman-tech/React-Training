import React from 'react';

const ProfileDetails = ({ email, location, team, age, nationality, hobbies }) => {
  return (
    <div className="mt-6 bg-white p-4 rounded-xl text-left text-sm shadow-md border border-gray-200 space-y-3">
      <p><strong>Email:</strong> <span className="text-blue-700">{email}</span></p>
      <p><strong>Location:</strong> <span className="text-gray-700">{location}</span></p>
      <p><strong>Team:</strong> <span className="text-red-700">{team}</span></p>
      <p><strong>Age:</strong> <span className="text-gray-700">{age}</span></p>
      <p><strong>Nationality:</strong> <span className="text-gray-700">{nationality}</span></p>
      <p><strong>Hobbies:</strong> <span className="text-gray-700">{hobbies.join(', ')}</span></p>
    </div>
  );
};

export default ProfileDetails;
