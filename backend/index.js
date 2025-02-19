const express = require('express');

const cors = require('cors');
const router = require('./routes/index');
const app = express();

//add json and url 编码请求体大小限制
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use(cors());
app.use(express.json()); // analyse json file

app.use('/api', router);

const PORT = 80; // this is for the web server, not json server. json server is at PORT 8000 see in package.json
// json server is for data

app.listen(PORT, function () {
  console.log('Server is running on http://localhost:80');
});

//use command npm run server as I have specified at package.json (3 lines in package.json are user defined)
//concurrently means run these two commands at the same time, see package.json
