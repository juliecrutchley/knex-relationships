
module.exports = {
  getUser,
  getUsers,
  addUser,
  addProfile,
  addBlog
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function addUser (user, connection) {
  return connection ('users')
    .insert(user)
}

function addProfile (profile, connection) {
  return connection ('profiles')
    .insert (profile)
}

function addBlog (blog, connection) {
  return connection ('posts')
    .insert (blog)
}
