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
        },
        {
           id: 4,
          recipe: "Add all the ingredients into a shaker with ice, and shake until chilled. Strain into the prepared rocks glass over fresh ice. Garnish with a lime wheel and kosher salt (optional).",
          drink_id: 4
        },
        {
           id: 5,
          recipe: " Add the tequila, lime juice and salt into a highball glass over ice. Top off with the grapefruit soda and stir. Garnish with a lime wheel.",
          drink_id: 5
        },
        {
           id: 6,
          recipe: "Combine agave nectar, cilantro leaves and jalapeño slices in a shaking tin. Muddle gently. Add tequila, lime juice, and ice. Shake and double strain into a collins or highball glass filled with ice. Top with club soda. Garnish with fresh sprig of cilantro.",
          drink_id: 6
        },
        {
           id: 7,
          recipe: "Add all the ingredients to a Champagne flute. Garnish with a strawberry slice.",
          drink_id: 7
        },
        {
           id: 8,
          recipe: "Add all the ingredients into shaker and dry-shake (no ice). Add ice and shake.Fine-strain into a chilled coupe.",
          drink_id: 8
        },
        {
           id: 9,
          recipe: "Add all the ingredients to a mixing glass and fill with ice. Stir, and strain into a chilled coupe glass.",
          drink_id: 9
        },
        {
           id: 10,
          recipe: "Add all the ingredients into a shaker with ice and shake. Strain into a chilled cocktail glass. Garnish with a lime wedge.",
          drink_id: 10
        },
        {
           id: 11,
          recipe: "Add all the ingredients into a shaker with ice, and shake thoroughly until well-chilled. Double-strain into two shot glasses.(Makes 2 shots)",
          drink_id: 11
        },
        {
           id:  12,
          recipe: "Add the vodka into a Collins glass with ice. Top with the juice and stir. Garnish with a lemon or lime wedge.",
          drink_id: 12
        },
        {
           id: 13,
          recipe: "Add the vodka to a highball glass filled with ice. Top with cranberry juice and stir until chilled. Squeeze the lime wedge over the glass and drop it into the drink.",
          drink_id: 13
        },
        {
           id: 14,
          recipe: "Add all the ingredients into a shaker with ice and shake. Strain into a chilled cocktail glass. Garnish with a lime wheel.",
          drink_id: 14
        },
        {
           id: 15,
          recipe: "Add crushed ice to a cocktail glass and set aside to chill. Add all the ingredients into a shaker with cubed ice, and shake for about 10 seconds. Empty the ice from the cocktail glass, and double-strain the mixture into it. Garnish with a skewered brandied cherry and 3 Granny Smith apple slices.",
          drink_id: 15
        },
        {
           id: 16,
          recipe: "Combine all of the ingredients in a shaker with ice and shake. Strain into a coupe, and garnish with a skewered bruleed banana slice.",
          drink_id: 16
        },
        {
           id: 17,
          recipe: "Combine all the ingredients into a mixing glass with ice and stir until well-chilled. Strain into a chilled coupe. Garnish with three drops of olive oil.",
          drink_id: 17
        },
        {
           id: 18,
          recipe: "Add all of the ingredients in a mixing glass with ice and stir. Pour into a rocks glass over ice, and garnish with an orange twist.",
          drink_id: 18
        },
        {
           id: 19,
          recipe: "Add all ingredients into a mixing glass with ice and stir until chilled. Strain into a Nick & Nora glass. Garnish with a lemon twist.",
          drink_id: 19
        },
        {
           id: 20,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 20
        },
        {
           id: 21,
          recipe: "Combine all the ingredients in a shaker with ice, and shake until appropriately diluted and chilled. Fine-strain into a chilled coupe glass, and garnish with 1 or 2 dehydrated lime wheels floating on top.",
          drink_id: 21
        },
        {
           id: 22,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 22
        },
        {
           id: 23,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 23
        },
        {
           id: 24,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 24
        },
        {
           id: 25,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 25
        },
        {
           id: 26,
          recipe: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in.",
          drink_id: 26
        }
        ])
      })
      .then(() => {
      return knex.raw('ALTER SEQUENCE recipes_id_seq RESTART WITH 4;')
    })
}
