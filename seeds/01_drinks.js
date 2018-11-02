
exports.seed = function(knex, Promise) {
  return knex('drinks')
    .del()
    .then(function () {
      return knex('drinks').insert([
        {
          id: 1,
          name: "Manhattan",
          ingredients: "2 oz Bourbon or rye, 1 oz Sweet vermouth, 2 dashes Angostura bitter, 1 dashOrange bitters",
          image: "https://i.imgur.com/9yYdZHs.jpg"
        },
        {
          id: 2,
          name: "Old Fashioned",
          ingredients: "1⁄2 tsp White sugar, 3 dashes Angostura bitters, 1 dash Orange Bitters, 6 1⁄4 oz Cold water, 1 Brown sugar cube",
          image: "https://i.imgur.com/DKOLw8k.jpg"
        },
        {
          id: 3,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        }
      ])
    })
  .then(() => {
    return knex.raw('ALTER SEQUENCE drinks_id_seq RESTART WITH 4;')
  })
}
