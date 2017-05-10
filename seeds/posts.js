exports.seed = function (knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        knex('posts').insert({user_id: 99901, title: '10', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99901, title: '15', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99903, title: '12', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99904, title: '73', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99905, title: '56', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99906, title: '25', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99907, title: '29', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99908, title: '31', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99909, title: '41', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99910, title: '26', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99911, title: '27', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99912, title: '35', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99913, title: '37', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99914, title: '45', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99915, title: '65', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99916, title: '74', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99917, title: '45', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99918, title: '30', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99919, title: '40', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99920, title: '67', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99921, title: '63', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99922, title: '31', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99923, title: '39', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99924, title: '19', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99925, title: '55', content: 'there is some random content here'}),
        knex('posts').insert({user_id: 99926, title: '66', content: 'there is some random content here'})
      ])
    })
}
