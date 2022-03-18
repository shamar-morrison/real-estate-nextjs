import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchAPI = async (url: string) => {
  try {
    const { data, status, statusText } = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API!,
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
