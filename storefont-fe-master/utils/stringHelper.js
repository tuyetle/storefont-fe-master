export default function stringifyValue(value) {
  const valueType = typeof value;
  if (valueType === 'string') {
    return value;
  } else if (valueType === 'object') {
    return JSON.stringify(value);
  } else if (valueType === 'number' || valueType === 'boolean') {
    return String(value);
  }
  return '';
}
