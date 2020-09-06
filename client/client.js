let socket = require('socket.io-client');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("이름을 입력하세요 : ", name => {
    
    socket = socket.connect(`http://localhost:3000?name=${name}`);
    
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

