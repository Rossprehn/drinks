const database = require("./database-connection")

module.exports = {
  list(table){
    return database(table).select()
  },
  read(id, table){
    return database(table)
      .select()
      .where("id", id)
      .first()
  },
  create(item, table){
    return database(table)
      .insert(item)
      .returning("*")
      .then(record => record[0])
  },
  update(id, item, table){
    return database(table)
      .update(item)
      .where("id", id)
      .returning("*")
      .then(record => record[0])
  },
  delete(id, table){
    return database(table).delete().where("id", id)
  },
  getDrinkRecipes (){
    return database("recipes")
      .join("drinks", "drinks.id", "=", "recipes.drink_id")
      .select("recipes.id", {drink_id: "drinks.id"}, "drinks.name", "drinks.ingredients", "drinks.image", "recipes.recipe")
  }
}
