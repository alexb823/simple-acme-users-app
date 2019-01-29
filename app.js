const express = require('express');
const morgan = require('morgan');
const { pageHeader, nav, userInfo, userDetail } = require('./htmlElements');
const { userList } = require('./userData');
const users = userList();

const app = express();
app.use(morgan('dev'));
app.use('/styles', express.static('styles'));

//Home page
app.get('/', (req, res) => {
  res.send(
    `
      <html>
        ${pageHeader('Welcome!')}
        <body>
          ${nav('Users')}
        </body>
      </html>
    `
  );
});

//User List Page
app.get('/users', (req, res) => {
  res.send(
    `
      <html>
        ${pageHeader('Users List')}
        <body>
          ${nav('Users')} ${userInfo(users)}
        </body>
      </html>
    `
  );
});

//User info page
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id * 1);
  res.send(
    `
      <html>
        ${pageHeader(`Info for ${user.name}`)}
        <body>
          ${nav('Users')} ${userDetail(user)}
        </body>
      </html>
    `
  );
});

//For local server
const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

//For cloud 9 server
// app.listen(process.env.PORT, process.env.IP, () => {
//   console.log('Server has started')
// })
