const app = require('../src/app');
const debug = require ('debug')('produto:server');
const http = require ('http');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
//server.on ('error'.onError);
//server.on('listening', onListening)

//server.listen(port)
//server.on ('error', onError);
//server.on ('onListening', onListening)

console.log('API FUNCIONANDOOO ' + port)



function normalizePort(val){
const port = parseInt(val,10);
if (isNaN(port)){
    return val;
}

if (port >=0){
    return port;
}

return false;

}
