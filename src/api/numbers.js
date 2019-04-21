import client from './client';

const endpoint = '/numbers';
export function getNumbers(order) {
  const endpointWithQuery = order ? `${endpoint}?order=${order}` : endpoint;
  return client.get(endpointWithQuery)
    .then(res => res.data.data);
}

export function generateNumbers(noOfNumbers) {
  return client.post(endpoint, { noOfNumbers })
    .then((res) => res.data.data);
}