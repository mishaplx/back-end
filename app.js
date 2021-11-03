const fs = require("fs");
let arrConfigInput = process.argv[4];
if (arrConfigInput !== "-i") {
  process.stdout.write("Please, use -i for path input");
  process.exit();
}
let arrConfigOutput = process.argv[6];
if (arrConfigOutput !== "-o") {
  process.stdout.write("Please, use -o for path output");
  process.exit();
}
let pathInput = process.argv[5];
let pathOutput = process.argv[7];
console.log(pathInput);
console.log(pathOutput);
function C(str, n) {
  let out = "";
  let notAddinChifr = ["_", "-", " ", '"', ".", "'", "!", "?", "/", ","];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (notAddinChifr.indexOf(str[i]) !== -1) {
      out += notAddinChifr[notAddinChifr.indexOf(str[i])];
    } else {
      code = code + n;
      out += String.fromCharCode(code);
    }
  }
  return out;
}
function A(str) {
  let out = [];
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 97 && code <= 122) {
      code = 122 - Math.abs(97 - code);
      out.push(String.fromCharCode(code));
    } else if (code >= 65 && code <= 90) {
      code = 90 - Math.abs(65 - code);
      out.push(String.fromCharCode(code));
    }
  }
  return out;
}

if (process.argv[2] == "-c" || process.argv[2] == "--config") {
  const readSteam = fs.createReadStream(__dirname + "/input.txt", "utf-8");
  const writeSteam = fs.createWriteStream(__dirname + "/output.txt");
  readSteam.on("data", (chunk) => {
    let dataInput = C(chunk, 3);
    writeSteam.write(dataInput);
  });
  process.stdout.write("good job \n");
} else {
  process.stdout.write("Error, Please use -c or --config");
}
