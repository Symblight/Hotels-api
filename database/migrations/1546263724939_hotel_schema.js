'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HotelSchema extends Schema {
  up () {
    this.create('hotels', (table) => {
      table.increments()
      table.string('title').nullable()
      table.string('description').nullable()
      table.integer('rating').nullable()
      table.string('url_image').nullable()
      table.integer('id_city').unsigned().references('id').inTable('cities')
      table.float('cost').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('hotels')
  }
}

module.exports = HotelSchema
