import React from 'react';
import './UserCard.css';

function UserCard({ firstName, lastName, email }) {
  return (
    <div className="card-container">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
