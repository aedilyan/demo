import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(express.static('src'));

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
    res.json([
        {id: 1, name:'Jon'},
        {id: 2, name:'kate'}
    ]);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});