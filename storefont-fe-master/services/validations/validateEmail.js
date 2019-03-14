function validateEmail(email) {
  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(email);
}

export default validateEmail;
