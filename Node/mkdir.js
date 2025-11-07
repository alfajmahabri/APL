//fs.mkdir(path, mode, callback)

const fs = require('fs');
const path = require('path');

fs.mkdir('./Folder',() => {
  console.log('Directory created successfully!');
});

