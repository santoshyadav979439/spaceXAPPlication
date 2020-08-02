import axios from 'axios';
const instance =axios.create({
    baseURL:"https://api.spaceXdata.com/v3/launches?limit=100"
});
//instance.defaults.headers.common["Access-Control-Allow-Origin"] ="*";
//instance.defaults.headers.common["Access-Control-Allow-Methods"] ="DELETE, POST, GET, OPTIONS";
//instance.defaults.headers.common["Access-Control-Allow-Headers"] ="Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";
 export default instance;