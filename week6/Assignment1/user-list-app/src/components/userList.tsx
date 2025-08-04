import React from 'react';


interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
{users.map((user) => (<li key={user.id}><strong>{user.name}</strong> - {user.email}</li>))}
    </ul>
    </div>
  );
};

export default UserList;