const html = require('html-template-tag');

function pageHeader(title) {
  return html`
    <head>
      <link rel="stylesheet" href="/styles/styles.css" />
    </head>
    <div class="title">
      <h1 class="title"><a href="/">Home</a></h1>
      <h1>${title}</h1>
    </div>
  `;
}

function nav(nav) {
  return html`
    <a href="/users">${nav}</a>
  `;
}

function userInfo(usersArr) {
  return `
    <ul>
      ${
        usersArr
          .map(user => {
            return html`
              <li><a href="/users/${user.id}">${user.name}</a></li>
            `;
          })
          .join('')
      }
    </ul>
  `;
}

function userDetail(user) {
  return html`
    <div class="user-details">${user.name}</div>
  `;
}

module.exports = { pageHeader, nav, userInfo, userDetail };
