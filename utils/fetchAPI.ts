import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url: string) => {
  try {
    const { data, status, statusText } = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '9ad3d05bc6msh2de6399730db8dfp104631jsnc5bc8683c336',
      },
    });

    if (status !== 200) {
      throw new Error(statusText);
    }

    return data;
  } catch (er) {
    console.error(er);
  }
};
