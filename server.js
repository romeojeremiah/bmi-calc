const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');

});

app.post('/index.html', function(req, res){
    const height = req.body.height;
    const weight = req.body.weight;

    const bmi = 703 * weight / (height * height);

    res.send(`Your BMI is ${bmi}!`)

});


app.listen(3000, function(){
    console.log('server started');
});