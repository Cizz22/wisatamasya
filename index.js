const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/public'));
app.listen(process.env.port || 3000);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });


