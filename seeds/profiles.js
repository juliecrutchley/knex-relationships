exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901, age: 10}),
        knex('profiles').insert({user_id: 99902, age: 15}),
        knex('profiles').insert({user_id: 99903, age: 12}),
        knex('profiles').insert({user_id: 99904, age: 73}),
        knex('profiles').insert({user_id: 99905, age: 56}),
        knex('profiles').insert({user_id: 99906, age: 25}),
        knex('profiles').insert({user_id: 99907, age: 29}),
        knex('profiles').insert({user_id: 99908, age: 31}),
        knex('profiles').insert({user_id: 99909, age: 41}),
        knex('profiles').insert({user_id: 99910, age: 26}),
        knex('profiles').insert({user_id: 99911, age: 27}),
        knex('profiles').insert({user_id: 99912, age: 35}),
        knex('profiles').insert({user_id: 99913, age: 37}),
        knex('profiles').insert({user_id: 99914, age: 45}),
        knex('profiles').insert({user_id: 99915, age: 65}),
        knex('profiles').insert({user_id: 99916, age: 74}),
        knex('profiles').insert({user_id: 99917, age: 45}),
        knex('profiles').insert({user_id: 99918, age: 30}),
        knex('profiles').insert({user_id: 99919, age: 40}),
        knex('profiles').insert({user_id: 99920, age: 67}),
        knex('profiles').insert({user_id: 99921, age: 63}),
        knex('profiles').insert({user_id: 99922, age: 31}),
        knex('profiles').insert({user_id: 99923, age: 39}),
        knex('profiles').insert({user_id: 99924, age: 19}),
        knex('profiles').insert({user_id: 99925, age: 55}),
        knex('profiles').insert({user_id: 99926, age: 66})
      ])
    })
}
