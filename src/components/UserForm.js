import React, { useState } from 'react';
import './UserForm.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { gql, useMutation } from '@apollo/client';

const CREAT_USER = gql`
  mutation CreatUser($firstName: String!, $lastName: String!, $email: String!) {
    creatUser(
      input: { firstName: $firstName, lastName: $lastName, email: $email }
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;

const useStyles = makeStyles(() => ({
  input: {
    padding: 10,
    margin: 5,
    width: 250,
  },
}));

function UserForm() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const onCompleted = () => {
    window.location.reload();
  };
  const onError = () => {
    alert('Oops, Something went wrong!');
  };
  const [creatUser] = useMutation(CREAT_USER, { onCompleted, onError });

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = () => {
    creatUser({ variables: { id: 'ss', firstName, lastName, email } }).then();
  };

  return (
    <div className="form-container">
      <p className="title"> Create User </p>
      <TextField
        id="filled-basic"
        required
        className={classes.input}
        label="First Name"
        variant="filled"
        onChange={onChangeFirstName}
      />
      <TextField
        id="filled-basic"
        required
        className={classes.input}
        label="Last Name"
        variant="filled"
        onChange={onChangeLastName}
      />
      <TextField
        id="filled-basic"
        required
        className={classes.input}
        label="Email"
        variant="filled"
        onChange={onChangeEmail}
      />
      <Button
        variant="contained"
        className={classes.input}
        color="primary"
        href=""
        endIcon={<Icon>send</Icon>}
        disabled={!(firstName && lastName && email)}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
export default UserForm;
