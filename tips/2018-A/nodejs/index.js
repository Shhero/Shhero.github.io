const http = require('http');

const app = http.createServer(function (req, res) {
    console.log('--------Hello,前端请求我们的服务啦')



    //发送http头部
    //http 状态码200
    //内容类型 text/plain
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    //发送相应内容 Hello 51RGB
    res.end('-------Hello 51RGB-------');

})

//监听
app.listen(8080, function () {
    console.log('Start App On 8080');
})




