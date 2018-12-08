let fs = require('fs');

let content = "hello wolrd!";
fs.writeFile('public/index.html', content, function(err) {
  if (err) { return console.log(err); }
  console.log("site generated!");
});


