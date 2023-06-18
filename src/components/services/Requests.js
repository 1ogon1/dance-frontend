import axios from "axios"
//import of env file and replase baseURL

export const postUserLogin = (values) => {
    const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    return axios.post(`http://localhost:8800/api/auth/login`, values, options)
}   

export const checkRole = (values) => {
  const options = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.get(`http://localhost:8800/api/users/me`, options)
}   

export const addParticipants = (values) => {
  const options = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.post(`http://localhost:8800/api/battles/addParticipants`, values, options)
}

