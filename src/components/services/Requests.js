import axios from "axios"
const baseUrl = "http://localhost:8800/api"

export const postUserLogin = (values) => {
    const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    return axios.post(`${baseUrl}/auth/login`, values, options)
}   

export const checkRole = (values) => {
  const options = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.get(`${baseUrl}/users/me`, options)
}   

export const addParticipants = (values) => {
  const options = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.post(`${baseUrl}/battles/addParticipants`, values, options)
}

export const getParticipants = (values) => {
  const options = {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.get(`${baseUrl}/battles/participants`, options)
}   

export const getBattleById =async (id) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.get(`${baseUrl}/battles/battle/${id}`, options)
}

export const vote = async (values, battleId, participantId) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(`${baseUrl}/battles/vote/${battleId}/${participantId}`, values, options)
}

export const phoenixPower = async (participantId) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(`${baseUrl}/battles/activatePhoenix/` + JSON.parse(participantId), options, options)
}
