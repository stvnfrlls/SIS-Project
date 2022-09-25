const express = require('express');
const app     = express();

const indexRouter = require('./routes/index');
const accountsRouter = require('./routes/accounts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', indexRouter);
app.use('/accounts', accountsRouter);

app.listen(process.env.PORT);