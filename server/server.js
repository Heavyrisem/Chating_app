const server = require('http').createServer();
const io = require('socket.io')(server);
const PORT = 8877;


io.on("connection", client => {

    io.emit('join', `${client.handshake.query.name} 님이 접속했습니다.`);
    client.on("disconnect", () => {
        io.emit('left', `${client.handshake.query.name} 님이 접속을 종료했습니다.`);
    });

    client.on("message", str => {
        client.broadcast.emit('message', str);
    });

});


server.listen(PORT);