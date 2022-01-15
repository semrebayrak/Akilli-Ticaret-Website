import AppConfig from '../config.json';
import axios from 'axios';

export const getService = (url, setAuthroziation = true) => new Promise((resolve, reject) => {
    url = AppConfig.serviceUrl + url;
    console.log("daa")
    var config = {};
    if (setAuthroziation) {
        config.headers = {
            'Authorization': 'Basic '+btoa('user:123456'), 
            "GUID": "A3A7-CD3A-FEB6-15A3",
        
        }
        
    }
   
    axios.get(url, config)
   .then(response => {console.log(response); resolve(response.data)})
   .catch(err => { reject(err); });

});



