const axios = require('axios')

axios.get('http://localhost:8080/user/123').then(resp =>{
    console.log("Datos del servidor", resp.data)
})