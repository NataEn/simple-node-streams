//run node serverSendingFile.js in the terminal and in your browser go to localhost:3030
//you should see the content of the file myNotes.txt printed out
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.readFile(__dirname + "/files/myNotes.txt", (err, data) => {
    res.write(data);
    res.end();
  });
});
server.listen(3030);
