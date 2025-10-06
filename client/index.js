const axios = require('axios')
const url = require('url')

/*UNA PARA ANTES DE ENVIAR*/
axios.interceptors.request.use(
   (config) => {
    console.log("Antes de enviar el request", config)
    return config
   },
   (error) => {
     return Promise.reject(error)
   }
)

/*UNA PARA DESPUS QUE SE ENVIO*/
axios.interceptors.response.use(
    (response) =>{
    console.log('Llamada exitosa', response.data)
    return response
}, (error) =>{
    console.error("Error al hacer llamada",error)
})

//?DELETE
async function makeRequest() {
    const payload = {name: 'Juan', email:'jpmedinagonex1@gmial.com'}
    
    // //!ESTO ES LO MISMO QUE LO DE ABAJO
    // let config = {
    //     method:'delete',
    //     url:`http://localhost:8080/user/12345`,
    //     data: payload
    // }
    // const response = await axios(config);

    //!ESTO ES LO MISMO Q LO DE ARRIBA MEJOR USAR ESTO!!!
     const responde = await axios.delete('http://localhost:8080/user/12345', payload)

    console.log('Datos del servidor', responde.data)
}
makeRequest()

// //?PUT
// async function makeRequest() {
//     const payload = {name: 'Juan', email:'jpmedinagonex1@gmial.com'}
    
//     //!ESTO ES LO MISMO QUE LO DE ABAJO
//     let config = {
//         method:'put',
//         url:`http://localhost:8080/user/12345`,
//         data: payload
//     }
//     const response = await axios(config);

//     //!ESTO ES LO MISMO Q LO DE ARRIBA MEJOR USAR ESTO!!
     // const responde = await axios.put('http://localhost:8080/user/12345', payload)

//     console.log('Datos del servidor',response.data)
// }
// makeRequest()

// //?POST
// async function makeRequest() {
//     const payload = {name: 'Juan', email:'jpmedinagonex1@gmial.com'}
    
//     //!ESTO ES LO MISMO QUE LO DE ABAJO
//     let config = {
//         method:'post',
//         url:`http://localhost:8080/user`,
//         data: payload
//     }
//     const response = await axios(config);

//     //!ESTO ES LO MISMO Q LO DE ARRIBA MEJOR USAR ESTO!!!!!
     // const responde = await axios.post('http://localhost:8080/user', payload)

//     console.log('Datos del servidor',response.data)
// }
// makeRequest()

//? GET
// async function makeRequest() {
//     const payload = {name: 'Juan', email:'jpmedinagonex1@gmial.com'}
//     const params = new url.URLSearchParams(payload)
    
//     let config = {
//         method:'get',
//         url:`http://localhost:8080/user?${params}`
//     }
//     const response = await axios(config);
//     console.log('Datos del servidor',response.data)

//     //!ESTO ES LO MISMO Q LO DE ARRIBA MEJOR USAR ESTO!!!!!
//    const response = await axios.get(`http://localhost:8080/user?${params}`)

// }
// makeRequest()

//?USANDO AXIOS
// axios.get('http://localhost:8080/user/123').then(resp =>{
//     console.log("Datos del servidor", resp.data)
// })