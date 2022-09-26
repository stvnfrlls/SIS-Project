require('dotenv').config();
const express = require('express');
const app     = express();

const indexRouter = require('./routes/index');
const accountsRouter = require('./routes/accounts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', indexRouter);
app.use('/accounts', accountsRouter);

app.listen(process.env.PORT, function (err) {
    if (err) {
        console.log('something went wrong', err);
    } else {
        console.log('listening on port ' + process.env.PORT);
    }
});