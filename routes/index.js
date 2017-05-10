var express = require('express')
var router = express.Router()

var db = require('../db')
var development = require('../knexfile').development
var knex = require('knex')(development)

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', function (req, res) {
  var id = req.params.id
  knex('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .where({ 'users.id': id })
    .then(function (users) {
      var user = users[0]

      res.render('profiles', user)
    })
})

router.get('/add', (req, res) => {
    res.render('add')
  })

  router.post('/add', (req, res) => {
    const conn = req.app.get('connection')
    const user = {
      name: req.body.name,
      email: req.body.email
    }

    db.addUser(user, conn)
      .then(addProfile)
      .then(redirect)
      .catch(returnError)

    function addProfile (insertedIds) {
      const profile = {
        age: req.body.age,
        user_id: insertedIds[0]
      }
      return db.addProfile(profile, conn)
    }

    function redirect () {
      res.redirect('/')
    }

    function returnError (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    }
  })

  router.post('/addblog', (req, res) => {
    const conn = req.app.get('connection')
    var id = req.params.id
    const user = {
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.id
    }

    db.addBlog(user, conn)
      .then(redirect)
      .catch(returnError)

    function redirect () {
      res.redirect('/')
    }

    function returnError (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    }
  })

  router.get('/posts/:id', function (req, res) {
    var id = req.params.id
    knex('posts')
      .join('users', 'posts.user_id', 'users.id')
      .where({ 'posts.user_id': id })
      .then(function (posts) {
        const postData = {
          posts: posts,
          name: posts[0].name
        }
        res.render('posts', postData)
        console.log(postData)
      })
  })


module.exports = router
