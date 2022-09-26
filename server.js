require('dotenv').config();
const express = require('express');
const app     = express();

const indexRouter = require('./controllers/index');
const accountsRouter = require('./controllers/accounts');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/', indexRouter);
app.use('/accounts', accountsRouter);

app.listen(process.env.PORT, function (err) {
    if (err) {
        console.log('something went wrong', err);
    } else {
        console.log('listening on port ' + process.env.PORT);
    }
});