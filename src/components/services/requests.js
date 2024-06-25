import axios from "axios"
// const baseUrl = "https://web-production-38ca.up.railway.app/api"
const baseUrl = "http://localhost:3000/api"

export const postUserLogin = (values) => {
    const options = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    return axios.post(`${baseUrl}/auth/login`, values, options)
}   

export const checkRole = () => {
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

export const getParticipants = () => {
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
  return await axios.post(`${baseUrl}/battles/phoenixPower/` + JSON.parse(participantId), options, options)
}

export const getBattlesEvent =async () => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.get(`${baseUrl}/battles/event`, options)
}

export const setWinner = async (values, battleId) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(`${baseUrl}/battles/setWinner/` + battleId, JSON.stringify(values), options)
}

export const resetBattle = async (values, battleId) => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('Bearer')}`,
      'Content-Type': 'application/json',
    },
  };
  return await axios.post(`${baseUrl}/battles/reset/` + battleId, JSON.stringify(values), options)
}


