import axios from 'axios';

const apiCreate = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export const imagesApi = async searchParams => {
  // console.log(searchParams);
  return await apiCreate.get('', {
    params: {
      key: '37915985-2ab767cc021bd303dee7a6ad2',
      per_page: 12,
      orientation: 'horizontal',
      image_type: 'photo',
      ...searchParams,
    },
  });
};
