const   express = require('express'),
        path = require('path'),
        sass = require('node-sass-middleware'),
        morgan = require('morgan');

const app = express();

// app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false,
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api',require('./api/routes'))

app.get('/', (req,res) => res.render("index"));
app.get('/:id', (req,res) => res.render("detail", {postId: req.params.id}));

app.listen(process.env.PORT || 4000 , process.env.IP, function () {
    console.log('Test blog up')
  })