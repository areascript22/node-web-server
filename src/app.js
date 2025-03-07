import {envs}  from './config/env.js';
import{ startServer} from './server/server.js';

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
