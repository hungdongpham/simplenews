// production server for the build package
const PORT = process.env.PORT || 8080;

const config = require('../config/paths')
const express = require('express');
const path = require('path');

const rootDir = config.appBuild;

console.log(`creating static server for path ${rootDir}/`);

const app = express();

app.use(express.static(rootDir));
app.use('/web',express.static(rootDir));

app.get('*', function(req, res) {
  res.sendFile(path.join( rootDir, '/index.html'));
});

app.listen(PORT);
console.log(`serving listening on ${PORT}`);