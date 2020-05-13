// in the termonal run this file with node and specify
//the file you want to read
// e.g. node fileReader files/myNotes.txt

const fs = require("fs");

const filePath = process.argv[2];
if (!filePath) {
  console.log("please provide a file to read from");
  process.exit(1);
}
//if path provided then read the file
//this is done in an async manner, but chunks are read sequencially
const readStream = fs.createReadStream(filePath);
readStream.on("data", (chunk) => {
  console.log("starting to read the file...");
  console.log(chunk.toString());
  console.log(`read ${chunk.toString().length} chars in the file`);
});
readStream.on("end", () => {
  console.log("finishe reading the file");
});
