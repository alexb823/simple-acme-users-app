const express = require('express');
const morgan = require('morgan');
const { pageHeader, nav, userInfo, user } = require('./htmlElements');
const { userList } = require('./userData');

const app = express();
app.use(morgan('dev'));
app.use('/styles', express.static('styles'));

//Home page
app.get('/', (req, res) => {
  res.send(
    `
      <html>
      ${pageHeader()}
        <body>
        ${nav('Users')}
        </body>
      </html>
    `
  );
});

//User List Page
app.get('/users', (req, res) => {
  const users = userList();
  res.send(
    `
    <html>
    ${pageHeader()}
      <body>
      ${nav('Users')}
      ${userInfo(users)}
      </body>
    </html>
  `
  );
});

//Moe page
app.get('/users/1', (req, res) => {
  res.send(
    `
    <html>
    ${pageHeader()}
      <body>
      ${nav('Users')}
      ${user('Moe')}
      </body>
    </html>
  `
  );
});

//Larry page
app.get('/users/2', (req, res) => {
  res.send(
    `
    <html>
    ${pageHeader()}
      <body>
      ${nav('Users')}
      ${user('Larry')}
      </body>
    </html>
  `
  );
});

//Curly page
app.get('/users/2', (req, res) => {
  res.send(
    `
    <html>
    ${pageHeader()}
      <body>
      ${nav('Users')}
      ${user('Curly')}
      </body>
    </html>
  `
  );
});

//For local server
// const PORT = 1337;
// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

//For cloud 9 server
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server has started')
})





