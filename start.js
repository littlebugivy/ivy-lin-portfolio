const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('/app/css'))
app.use(express.static('/app/img'))
app.use(express.static('/app/js'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+ '/app/index.html'))
})

function returnPublicFile(req, res) {
    var url = require('url').parse(req.url);
    console.log('get ' + req.url + ' -> ' + url.pathname);
    res.sendFile(__dirname + '/app' + url.pathname);
  };
  
  app.get('/*.html', returnPublicFile);
  app.get('/*.png', returnPublicFile);
  app.get('/*.jpg', returnPublicFile);
  app.get('/css/*.css', returnPublicFile);
  app.get('/js/*', returnPublicFile);
  app.get('/partials/*', returnPublicFile);
  app.get('/lib/*', returnPublicFile);
  app.get('/semantic-ui/*', returnPublicFile);

//   app.get('/semantic-ui/*', function(req,res){
//     var url = require('url').parse(req.url);
//     console.log('get ' + req.url + ' -> ' + url.pathname);
//       res.sendFile(__dirname + '/node_modules/semantic-ui/*')
//   })

app.listen(3000, () => console.log('Example app listening on port 3000!'))