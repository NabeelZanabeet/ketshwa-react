import React from 'react';
import './UserCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  paper: {
    padding: 10,
    margin: 15,
  },
}));

function UserCard({ id, firstName, lastName, email }) {
  const classes = useStyles();
  return (
    <Grid key={id} item>
      <Paper className={classes.paper}>
        <p className="firstName">{firstName}</p>
        <p className="lastName">{lastName}</p>
        <p className="email">{email}</p>
      </Paper>
    </Grid>
  );
}

export default UserCard;
