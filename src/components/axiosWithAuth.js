import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('swimliToken');

  return axios.create({
    headers: {
      Authorization: token
    }
  });
};