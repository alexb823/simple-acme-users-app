/* eslint-disable no-unused-expressions */
const { userId } = require('./userData');

function pageHeader() {
  let html = `
    <head>
      <link rel="stylesheet" href="styles.css" />
    </head>
  `;
  return html;
}

function nav(title) {
  let html = `
    <h1 class="title"><a href="/">Home</a></h1>
    <a href="/users">${title}</a>
  `;
  return html;
}

function userInfo(usersArr) {
  let html = `
    <ul>
      ${usersArr
        .map(user => {
          return `<li>
                      <a href="/users/${userId(user)}">${user.name}</a>
                    </li>`;
        })
        .join('')}
    </ul>
  `;
  return html;
}

function user(userName) {
  let html = `
    <div class="user-details">${userName}</div>
  `;
  return html;
}


module.exports = { pageHeader, nav, userInfo, user };
