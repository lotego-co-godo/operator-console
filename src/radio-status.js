import axios from 'axios';

const radioEndpoint = '/radios';

/**
 * @returns {Promise<RadioStatus[]>}
 */
export async function fetchRadioStatus() {
  const response = await axios.get(radioEndpoint);

  return response.data;
}
