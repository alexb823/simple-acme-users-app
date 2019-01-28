const userData = [
  {name: 'Moe', id: 1},
  {name: 'Larry', id: 2},
  {name: 'Curly', id: 2}
]


function userList() {
  return [...userData];
}

function userId(user) {
  return user.id*1;
}

module.exports = {userList, userId};
