app_path ='../www';

app.use('/',express.static(path.join(__dirname,app_path)))

app.get('*',(req,res)=>res.sendFile(path.join(__dirname,app_path + '/index.html')))