import axios from 'axios';

export const performRequest = async <T>({ query = '', variables = {} }): Promise<{ data: T }> => {
  const response = await axios.post('https://graphql.datocms.com/', {
    query,
    variables,
  }, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return response.data;
}
