const validate = require('validate.js');

const constraints = {
  email: {
    email: {
      message: ',Wrong format',
    },
  },
};

export const validateEmail = (email) => {
  let result = validate({ email }, constraints);
  if (result && result.email && result.email.length) return result.email[0];
  else return '';
};
