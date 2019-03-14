function validatePassword(password) {
  const re = /.{6,}$/;
  return re.test(password);
}

export default validatePassword;
