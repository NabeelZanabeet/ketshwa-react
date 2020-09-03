import React from 'react';
import './UserCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { gql, useMutation } from '@apollo/client';

const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(input: { id: $id }) {
      id
      firstName
      lastName
      email
    }
  }
`;

const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#d2cdc0',
    padding: 10,
    margin: 15,
  },
}));

function UserCard({ id, firstName, lastName, email }) {
  const onCompleted = () => {
    window.location.reload();
  };

  const onError = () => {
    alert('Oops, Something went wrong!');
  };
  const [deleteUser] = useMutation(DELETE_USER, { onCompleted, onError });

  const onDelete = () => {
    deleteUser({
      variables: { id },
    }).then();
  };

  const classes = useStyles();
  return (
    <Grid key={id} item>
      <Paper className={classes.paper}>
        <div onClick={onDelete} style={{ color: 'red', alignSelf: 'flex-end' }}>
          <DeleteIcon />
        </div>
        <p className="firstName">{firstName}</p>
        <p className="lastName">{lastName}</p>
        <p className="email">{email}</p>
      </Paper>
    </Grid>
  );
}

export default UserCard;
