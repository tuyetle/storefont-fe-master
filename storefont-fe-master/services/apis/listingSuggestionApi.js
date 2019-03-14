// import axios from 'axios';
import mockData from '#/mockdata/SearchProperties';
import escapeRegexCharacters from '~/utils/regexHelper';

export function getListingSuggestionApi(keyword) {
  // TODO: call real API instead of mock data
  const escapedValue = escapeRegexCharacters(keyword.trim());

  if (escapedValue === '') {
    return {
      data: [],
    };
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');
  const result = mockData.map(section => ({
    title: section.title,
    type: section.type,
    properties: section.properties.filter(property => regex.test(property.resultText)),
  })).filter(section => section.properties.length > 0);

  const p = new Promise((resolve) => {
    resolve({
      data: result,
    });
  });

  return p;
}

export default getListingSuggestionApi;
