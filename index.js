const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();

app.set('port', 5000);
app.use(bodyParser.json());

app.get('/', function(req, response){
    response.send('Holas Mundo!');
})

app.get('/webhook', function(req, response){
    if(req.query['hub.verify_token'] === 'cristianismo_token'){
        response.send(req.query['hub.challenge']);
    } else {
        response.send('En Cristianismo Digital no tienes permisos.')
    }
})

app.listen(app.get('port'), function(){
    console.log('Nuestro servidor esta funcionando en el puerto', app.get('port'));
})