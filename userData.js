const userData = [
  {name: 'Moe', id: 1},
  {name: 'Larry', id: 2},
  {name: 'Curly', id: 3}
]


function userList() {
  return [...userData];
}

module.exports = {userList};
