const express = require('express');
const path = require('path');

const startServer = (Options)=>{
    const {port, public_path = 'public'} = Options;
    const app = express();
    //Para poder usar middlewares se usa la palabra "use" (express)
    app.use(express.static(public_path)); //Contenido estatico que ponemos disponible para que se use
    app.get('*', (req, res)=>{
        const indexPath = path.join(__dirname + '../../../'+public_path+'/index.html');
        res.sendFile(indexPath);
    });

    app.listen(port,()=>{
        console.log('Web server listeninig on port: ', port);
    });
}

module.exports = {
    startServer
}