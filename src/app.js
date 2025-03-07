const {envs} = require('./config/env');
const { startServer}  = require('./server/server');

const main = ()=>{
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH,
    });
}

//funcion acnostica autoconvocada
//Acnostica porque no tiene nombre
//Autocaonfvicada porque la ejecutamos con los parenteisis al ultimo
(async ()=>{
    main()
})()
