function validatePhone(phone) {
  const re = /^\d{4} \d{3} \d{3,4}$/;
  return re.test(phone);
}

export default validatePhone;
