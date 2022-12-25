const fs = require("fs");


// read file

// 1.  fs.readFile  -> takes path  and encoding callback funciton
// fs.readFile("test.json", "utf8", function(err, data) {
//   if (err) {
//     console.error(err)
//     return;
//   }
//   console.log(data);
// })

// synchronus version
// const data = fs.readFileSync("test.json", "utf8",)

// console.log(data);

// const http = require("http");
// const port = 3000;
// const server = http.createServer((req, res) => {});

// server.listen(port, () => {
//   console.log("server listening on port");
// });

//? node js streams with example

// create a readable stream

let data = ""
const stream = fs.createReadStream("input.txt")

stream.setEncoding("utf8")

stream.on("data",(chunk)=>{
  data += chunk;
})


stream.on("end",()=>{
  console.log(data);
})