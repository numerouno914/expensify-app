const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

//use public directory to serve up all static assets
app.use(express.static(publicPath));

// * for all unmatched paths, should return index.html. react handles routing
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


//to start up production server
app.listen(port, () => {
  console.log('server is running on port 3000!');
});