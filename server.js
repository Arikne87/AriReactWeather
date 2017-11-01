var express= require('express');

// Create the app
var app=express();
const PORT= process.env.PORT || 3000;
app.use(function (req, res, next) {

      if(req.header['x-forwarded-proto']==='http'){

          next();

      }else{
          res.redirect('http://'+req.hostname+req.url);
      }


        // Website you wish to allow to connect
       // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

        // Request methods you wish to allow
       /* res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();*/
    }
);
app.use( express.static('public'));s


app.listen(PORT,function(){
    
    console.log('Express server is up on port'+PORT);
});
