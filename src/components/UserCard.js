import React from 'react';
import './UserCard.css';

function UserCard({ firstName, lastName, email }) {
  return (
    <div className="card-container">
      <p className="firstName">{firstName}</p>
      <p className="lastName">{lastName}</p>
      <p className="email">{email}</p>
    </div>
  );
}

export default UserCard;
