exports.seed = function(knex, Promise) {
  return knex('recipes')
    .del()
    .then(function () {
      return knex('recipes').insert([
        {
            id: 1,
          recipe: "Add all the ingredients into a mixing glass with ice, and stir until well-chilled.Strain into a chilled coupe. Garnish with a brandied cherry.",
          drink_id: 1
        },
        {
           id: 2,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 2
        },
        {
           id: 3,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 3
        }
        ])
      })
      .then(() => {
      return knex.raw('ALTER SEQUENCE recipes_id_seq RESTART WITH 4;')
    })
}
