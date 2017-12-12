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
  app.get('/*.gif', returnPublicFile);
  app.get('/css/*.css', returnPublicFile);
  app.get('/js/*', returnPublicFile);
  app.get('/partials/*', returnPublicFile);
  app.get('/lib/*', returnPublicFile);
  app.get('/semantic-ui/*', returnPublicFile);

app.use(express.Router());
app.use(function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});


app.listen(8000, () => console.log('Example app listening on port 8000!'))