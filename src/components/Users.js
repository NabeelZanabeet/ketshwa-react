import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserCard from './UserCard';
import './Users.css';

function Users() {
  return (
    <div className="users-container">
      <Query
        query={gql`
          {
            users {
              id
              firstName
              lastName
              email
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return data.users.map(({ id, firstName, lastName, email }) => (
            <UserCard
              key={id}
              email={email}
              firstName={firstName}
              lastName={lastName}
            />
          ));
        }}
      </Query>
    </div>
  );
}

export default Users;
