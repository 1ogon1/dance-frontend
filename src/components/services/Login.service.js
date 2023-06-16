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