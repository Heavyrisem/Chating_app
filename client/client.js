let socket = require('socket.io-client');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const PORT = 8877;

rl.question("이름을 입력하세요 : ", name => {
    
    socket = socket.connect(`http://heavyrisem.kro.kr:${PORT}?name=${name}`);
    socket.on('connect_timeout', err => {
        console.log(err);
    });
    socket.on('connect_error', err => {
        console.log(err);
    });

    socket.on('join', str => { 
        console.log(str);
    });
    socket.on('left', str => {
        console.log(str);
    });
    socket.on('message', str => {
        console.log(str);
    });

    rl.on("line", string => {
        if (string == "") return;
        socket.emit("message", `${name}: ${string}`);
    });

});

