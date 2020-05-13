// this is an example of the better way to read and write file content
// useing fs.createReadStream function we read and write the file content as a stream
// and thus loading the file content chunk by chunk
//this is much better because we use less memory on the server (becuase we don't waite for the whole
//file to dowload) and as soon as we get some data comming we send it off to the client
// chunk by chunk, so the lag time between recieving a request from the client and sending a response is
// smaller.

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  //to send a file, uncomment this ti see how the file is being sent
  //const stream = fs.createReadStream(__dirname + "/files/longTextFile.txt");
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   stream.pipe(res);

  const mime = {
    html: "text/html",
    txt: "text/plain",
    css: "text/css",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    svg: "image/svg+xml",
    js: "application/javascript",
  };

  //When a client asks for that big file, we stream it one chunk at a time, which means we don’t buffer it in memory at all.
  //comment this to see how the file is being sent to th client
  const file = path.join(__dirname, "/files/puppy.jpg");
  const type = "image/jpeg";
  const s = fs.createReadStream(file);
  s.on("open", function () {
    res.setHeader("Content-Type", type);
    s.pipe(res);
  });
});
server.listen(3030);
