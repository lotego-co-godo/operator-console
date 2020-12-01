import axios from 'axios';

const radioEndpoint = '/radios';

/**
 * @returns {Promise<Radio[]>}
 */
export async function fetchRadioStatus() {
  const response = await axios.get(radioEndpoint);

  return response.data;
}
