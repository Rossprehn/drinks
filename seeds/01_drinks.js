
exports.seed = function(knex, Promise) {
  return knex('drinks')
    .del()
    .then(function () {
      return knex('drinks').insert([
        {
          id: 1,
          name: "Manhattan",
          ingredients: "2 oz Bourbon or rye, 1 oz Sweet vermouth, 2 dashes Angostura bitter & 1 dashOrange bitters",
          image: "https://i.imgur.com/9yYdZHs.jpg"
        },
        {
          id: 2,
          name: "Old Fashioned",
          ingredients: "1⁄2 tsp White sugar, 3 dashes Angostura bitters, 1 dash Orange Bitters, 6 1⁄4 oz Cold water & 1 Brown sugar cube",
          image: "https://i.imgur.com/DKOLw8k.jpg"
        },
        {
          id: 3,
          name: "Boulevardier",
          ingredients: "1 oz Campari, 1 oz Sweet vermouth & 1 1⁄4 ozBulleit Rye Whiskey",
          image: "https://i.imgur.com/25KVgl1.jpg"
        },
        {
          id: 4,
          name: "Margarita",
          ingredients: "2 oz Blanco tequila, 1 oz Fresh lime juice, 1⁄2 oz Orange liqueur & 1⁄2 oz Agave syrup",
          image: "https://i.imgur.com/8Vc6taM.jpg"
        },
        {
          id: 5,
          name: "Paloma",
          ingredients: "Tequila 2 oz, 1/2 oz Fresh lime juice, Pinch of salt (to taste) Grapefruit & soda to top",
          image: "https://i.imgur.com/CsmLoPS.jpg"
        },
        {
          id: 6,
          name: "Tequila Limeade",
          ingredients: "1⁄2 oz Light agave nectar, 8 sprigs Cilantro leaves, plus a full sprig for garnish, 2 slices Fresh jalapeño, 1 1⁄2 oz Cazadores tequila blanco, 3⁄4 oz Fresh lime juice & 12 oz Club soda",
          image: "https://i.imgur.com/mSGJgEN.jpg"
        },
        {
          id: 7,
          name: "Sparkler",
          ingredients: "1 oz Don Julio blanco tequila, splash Simple syrup & 5 oz Champagne",
          image: "https://i.imgur.com/cPegWKC.jpg"
        },
        {
          id: 8,
          name: "Dragones Sunset",
          ingredients: "1 3⁄4 oz Casa Dragones blanco tequila, 1⁄4 oz Yellow Chartreuse, 1⁄2 oz Carrot juice, 1⁄2 o Orange juice & 1 Egg white",
          image: "https://i.imgur.com/v1oJxLX.jpg"
        },
        {
          id: 9,
          name: "Ascot",
          ingredients: "1 oz Ultimat vodka, 1 oz Pierre Ferrand Ambre Cognac, 1⁄2 oz Carpano Antica formula vermouth & 1⁄2 oz Dolin dry vermouth",
          image: "https://i.imgur.com/jiVVCuU.jpg"
        },
        {
          id: 10,
          name: "Cosmopolitan",
          ingredients: "1 1⁄2 oz Citrus vodka, 1 oz Cointrea, 1⁄2 oz Fresh lime juice & 1 dash Cranberry juice",
          image: "https://i.imgur.com/LFnhotn.jpg"
        },
        {
          id: 11,
          name: "Kamikaze",
          ingredients: "2 oz Vodka, 3⁄4 oz Orange liqueur & 3⁄4 ozFresh lime juice",
          image: "https://i.imgur.com/hnGTm5h.jpg"
        },
        {
          id: 12,
          name: " Greyhound",
          ingredients: "1 1⁄2 oz Vodka, Grapefruit juice & 1 Lemon or lime wedge",
          image: "https://i.imgur.com/5803uDx.jpg"
        },
        {
          id: 13,
          name: "Cape Codder",
          ingredients: "1 1⁄2 oz Vodka, Cranberry juice & Lime wedge",
          image: "https://i.imgur.com/9SDX4F1.jpg"
        },
        {
          id: 14,
          name: "Gimlet",
          ingredients: "2 1⁄2 oz Vodka, 1⁄2 oz Fresh lime juice & 1⁄2 oz Simple syrup",
          image: "https://i.imgur.com/iMiGcyT.jpg"
        },
        {
          id: 15,
          name: "Appletini",
          ingredients: "1 1⁄4 oz Vodka, 1 oz Calvados, 1 1⁄4 oz Fresh Granny Smith apple juice, 1⁄4 oz Fresh lemon juice & 1⁄4 oz Simple syrup",
          image: "https://i.imgur.com/dIzSlfM.jpg"
        },
        {
          id: 16,
          name: "Midnight Oil",
          ingredients: "1 1⁄2 oz Mount Gay Black Barrel rum, 3⁄4 oz Stumptown cold-brew coffee, 1⁄4 oz Domaine de Canton ginger liqueur, 1⁄4 oz Giffard Banane du Brésil liqueur &3 dashes Vanilla extract",
          image: "https://i.imgur.com/yR2Dvyv.jpg"
        },
        {
          id: 17,
          name: "Clarita",
          ingredients: "2 oz Bacardí Gran Reserva Maestro de Ron eight-year-old rum, 1⁄3 oz Amontillado sherry, 1 barspoon Crème de cacao, 2 dashes Absinthe & 1 dash Saline solution",
          image: "https://i.imgur.com/uR7FjB1.jpg"
        },
        {
          id: 18,
          name: "Rye Bandit",
          ingredients: "2 oz Bourbon, 1 oz Amaro Delle Sirene & 1 oz Luna Amara bitter",
          image: "https://i.imgur.com/N2er9Tw.jpg"
        },
        {
          id: 19,
          name: "Commander in Chief",
          ingredients: "1⁄2 oz Redbreast 12-year-old Irish whiskey, 1 oz Green Spot Irish whiskey, 1⁄2 oz Lemorton Pommeau de Normandie brandy, 1⁄2 tsp Giffard apricot brandy, 1⁄2 oz Fusion verjus blanc, 1⁄2 tsp Passion fruit syrup & 2 dashes Angostura bitters",
          image: "https://i.imgur.com/68iAZ7s.jpg"
        },
        {
          id: 20,
          name: "Crimson King",
          ingredients: "1 oz Rittenhouse rye, 3⁄4 oz Campari, 1⁄2 oz Punt e Mes, 1⁄4 oz Cherry Heering & 1 barspoonSt. George NOLA coffee liqueur",
          image: "https://i.imgur.com/x7SRWFe.jpg"
        },
        {
          id: 21,
          name: "Scottish Breakfast",
          ingredients: "1 oz Ardbeg Ten Years Old scotch, 1 1⁄2 oz Pür Likör spice blood orange liqueur, 1⁄2 oz Fresh lime juice, 1⁄2 oz  Apple butter & 3 dashes Fee Brothers Aztec chocolate bitters",
          image: "https://i.imgur.com/7DbcSzl.jpg"
        },
        {
          id: 22,
          name: "French 75",
          ingredients: "1.5 oz Bluecoat American Dry Gin, .75 oz Fresh lemon juice, .25 oz Simple syrup & 2 oz Champagne",
          image: "https://i.imgur.com/9UqMQ8d.jpg"
        },
        {
          id: 23,
          name: "Mango Brava Daiquiri",
          ingredients: "2 oz Mango-Infused Rum, 1⁄2 oz Lime juice & 1⁄2 oz Simple syrup",
          image: "https://i.imgur.com/DRR9kTW.jpg"
        },
        {
          id: 24,
          name: "Cosmo Rita",
          ingredients: "1 1⁄2 oz Sauza Gold Tequila, 1 oz Cranberry juice, 1⁄2 oz DeKuyper Triple Sec & 1⁄2 oz Fresh lime juice",
          image: "https://i.imgur.com/7DNrnFQ.jpg"
        },
        {
          id: 25,
          name: "Savory Margarita",
          ingredients: "1 1⁄2 oz Milagro Reposado Tequila, 1 oz Fresh red bell pepper juice, 1 oz Fresh lime juice, 3⁄4 oz Honey syrup & 1 handful Fresh cilantro",
          image: "https://i.imgur.com/qAMN1qx.jpg"
        },
        {
          id: 26,
          name: "Boulevardier",
          ingredients: "1 cup Seedless watermelon, cut into 1-inch cubes, 1⁄4 oz Agave syrup, 1 1⁄2 oz Don Julio blanco tequila & 1⁄2 oz Fresh lime juice",
          image: "https://i.imgur.com/bool1w5.jpg"
        }
      ])
    })
  .then(() => {
    return knex.raw('ALTER SEQUENCE drinks_id_seq RESTART WITH 27;')
  })
}
