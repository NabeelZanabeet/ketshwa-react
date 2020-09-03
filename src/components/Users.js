import React from 'react';
import UserCard from './UserCard';
import './Users.css';
import { loader } from '../assets';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          {loading && <img className="loader" alt="loader" src={loader} />}
          {error && <p className="error-text">Error :(</p>}
          {data?.users &&
            data.users.map(({ id, firstName, lastName, email }) => (
              <UserCard
                key={id}
                id={id}
                email={email}
                firstName={firstName}
                lastName={lastName}
              />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Users;
