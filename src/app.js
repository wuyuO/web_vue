import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

let app = express();
let router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

router.get('',(req,res,next) => {
  res.end('Hello World!!!');
});

app.use('',router);

app.listen(4000,() => {
  console.log('server listening at port 4000 ...');
})