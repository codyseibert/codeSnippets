'use strict'

/*
|--------------------------------------------------------------------------
| LanguageSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class LanguageSeeder {
  async run () {
    Factory.model('App/Models/Language').createMany(5)
  }
}
module.exports = LanguageSeeder
