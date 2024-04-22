import axios from 'axios';

export type parmastype = {
  query: String,
  page: String ,
  num_pages:string
};

export const FrachPopularItem = (Parma:parmastype) => {
  const options = {
    params: {
      ...Parma,
    },
    headers: {
      'X-RapidAPI-Key': 'c714e6b613mshaa3311fbde2a4a5p1fe5a1jsn6debb0e84d70',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
  };
  const url =  'https://jsearch.p.rapidapi.com/search';
  return axios
    .get(url, options)
    .then(response => {

      return response.data.data;
    })
    .catch(error => {
      console.error(error);
    });
};
