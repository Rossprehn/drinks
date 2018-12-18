
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
        },
        {
          id: 4,
          name: "Margarita",
          ingredients: "2 oz Blanco tequila, 1 oz Fresh lime juice, 1⁄2 oz Orange liqueur, 1⁄2 oz Agave syrup",
          image: "https://i.imgur.com/8Vc6taM.jpg"
        },
        {
          id: 5,
          name: "Paloma",
          ingredients: "Tequila 2 oz, 1/2 oz Fresh lime juice, Pinch of salt (to taste) Grapefruit soda, to top (Jarritos or Squirt work best)",
          image: "https://i.imgur.com/CsmLoPS.jpg"
        },
        {
          id: 6,
          name: "Tequila Limeade",
          ingredients: "1⁄2 oz Light agave nectar, 8 sprigs Cilantro leaves, plus a full sprig for garnish, 2 slices Fresh jalapeño, 1 1⁄2 oz Cazadores tequila blanco, 3⁄4 oz Fresh lime juice, 12 oz Club soda",
          image: "https://i.imgur.com/mSGJgEN.jpg"
        },
        {
          id: 7,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 8,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 9,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 10,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 11,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 12,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 13,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 14,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 15,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 16,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 17,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 18,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 19,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 20,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 21,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 22,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 23,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 24,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 25,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth, 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 26,
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
