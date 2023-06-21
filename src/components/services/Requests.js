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

export const getParticipants = (values) => {
  const options = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.get(`http://localhost:8800/api/battles/participants`, options)
}   

export const getBattleById = (id) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return axios.get(`http://localhost:8800/api/battles/battle/${id}`, options)
}

export const vote = async (values, battleId, participantId) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(`http://localhost:8800/api/battles/vote/${battleId}/${participantId}`, values, options)
}