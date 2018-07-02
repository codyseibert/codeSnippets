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
const Database = use('Database')

class LanguageSeeder {
  async run () {
    const languages = await Database.table('languages')
    console.log(languages)
    Factory.model('App/Models/Language').createMany(5)
  }
}
module.exports = LanguageSeeder
