/* eslint-disable no-unused-expressions */

function pageHeader(title) {
  return `
    <head>
      <link rel="stylesheet" href="/styles/styles.css" />
    </head>
    <div class='title'>
    <h1 class="title"><a href="/">Home</a></h1>
    <h1>${title}</h1>
    </div>
  `;
}

function nav(nav) {
  return `
    <a href="/users">${nav}</a>
  `;
}

function userInfo(usersArr) {
  return `
    <ul>
      ${usersArr
        .map(user => {
          return `<li>
                      <a href="/users/${user.id}">${user.name}</a>
                    </li>`;
        })
        .join('')}
    </ul>
  `;
}

function userDetail(user) {
  return `
    <div class="user-details">${user.name}</div>
  `;
}


module.exports = { pageHeader, nav, userInfo, userDetail };
