import axios from "axios";

const instance = axios.create({
         baseURL: 'https://challenge-1dcd6-default-rtdb.europe-west1.firebasedatabase.app', // THE API (cloud function) URL
        withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          } 
      })
export default instance;


// 

// http://localhost:5001/challenge-1dcd6/us-central1/api