const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });


