exports.up = function(knex, Promise){
  return knex.schema.createTable("drinks", table => {
    table.increments("id").primary()
    table.text("name")
    table.text("ingredients")
    table.text("image")
  })
}


exports.down = function(knex, Promise){
  return knex.schema.dropTableIfExists("drinks")
}
