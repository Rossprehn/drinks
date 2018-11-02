exports.up = function(knex, Promise){
  return knex.schema.createTable("instructions", table => {
    table.increments("id").primary()
    table.text("instruction")
    table.integer("drink_id").references("drinks.id")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("instructions")
}
