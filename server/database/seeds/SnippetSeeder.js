'use strict'

/*
|--------------------------------------------------------------------------
| SnippetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Snippet = use('App/Models/Snippet');

class SnippetSeeder {
  async run () {
    Factory.model('App/Models/Snippet').createMany(5)
  }
}

module.exports = SnippetSeeder
