const path = require('path');
const express = require('express');
const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));
app.get('/api', (req, res, next)=> {
  res.send({ foo: 'FOOEY', bar: 'BARBIE' });
});

app.listen(process.env.PORT || 3000);
