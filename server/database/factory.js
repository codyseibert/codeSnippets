'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Language', (faker) => {
  return {
    language: faker.string({ length: 25, pool: 'vueadonis' })
  }
})
Factory.blueprint('App/Models/Snippet', (faker) => {
  return {
    code: faker.string({ length: 225, pool: 'vueadonis' }),
    languageId: faker.integer({ min: 1, max: 5 })
  }
})
/**
  Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: faker.username()
    }
  })
*/
