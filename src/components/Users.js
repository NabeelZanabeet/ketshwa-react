import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserCard from './UserCard';
import './Users.css';
import { loader } from '../assets';
import Grid from '@material-ui/core/Grid';

function Users() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
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
              if (loading) return <img alt="loader" src={loader} />;
              if (error) return <p className="error-text">Error :(</p>;
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
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Users;
