exports.up = function(knex, Promise){
  return knex.schema.createTable("recipes", table => {
    table.increments("id").primary()
    table.text("recipe")
    table.integer("drink_id").references("drinks.id")
  })
}

exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("recipes")
}
