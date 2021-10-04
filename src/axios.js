import axios from "axios";

const instance = axios.create({
         baseURL: 'http://localhost:5001/challenge-1dcd6/us-central1/api', // THE API (cloud function) URL
        withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          } 
      })
export default instance;
