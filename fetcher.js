const fs = require('fs');
const request = require('request');


let args = process.argv.splice(2);

const url = args[0];
const path = args[1];

const fetcher = function (url, path) {
  request(`${url}`, (error, response, body) => {
    if (error || !url) {
      console.log(error);
    } else {
      fs.writeFile(`${path}`, body, err => {
        if (!path) {
          console.log("No valid path selected");
          return;
        }
        console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
        if (err) {
          console.log(err);
          return;
        }
      });
    }
  });
};

fetcher(url, path);