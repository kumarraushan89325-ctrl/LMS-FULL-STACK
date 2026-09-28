 const http = require('http')

 const server= http.createServer((req,res) => {
  console.log(req.url,req.method,req.headers);
  if (req.url ==='/') {
     res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>raushan kumar</head></title>');
  res.write('<body><h1>welcome to Home </h1></body>');
  
  res.write('</html>');
  return res.end();

  }else if (req.url === '/products') {
  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>raushan kumar</head></title>');
  res.write('<body><h1>welcome to the my products </h1></body>');
  
  res.write('</html>');
 return res.end();

  }



  res.setHeader('content-type','text/html');
  res.write('<html>');
  res.write('<head><title>raushan kumar</head></title>');
  res.write('<body><h1> IoT stands for Internet of Things.</h1></body>');
  
  res.write('</html>');
  return res.end();
 });

 const PORT = 3002;
 server.listen(PORT, ()=>{
  console.log('server running on adress http://localhost:${PORT}')
 });

