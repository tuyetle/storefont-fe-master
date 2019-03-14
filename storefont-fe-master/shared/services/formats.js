const { formatDate, formatPrice } = require('./formats.es5');

export { formatDate };
export { formatPrice };

export function displayMoney(number) {
  return `${number.toFixed(2)} đ`;
}

export default {
  // displayDate,
  displayMoney,
};
