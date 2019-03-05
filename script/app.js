const express = require("express")
const app = express()
const queries = require("./queries")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

app.get("/drinks", (request, response) => {
  queries
    .list("drinks")
    .then(drinks => {
      response.json({ drinks })
    })
    .catch(console.error)
})

app.get("/recipes", (request, response) => {
  queries
    .list("recipes")
    .then(recipes => {
      response.json({ recipes })
    })
    .catch(console.error)
})

app.get("/comments", (request, response) => {
  queries
    .list("comments")
    .then(comments => {
      response.json({ comments })
    })
    .catch(console.error)
})

app.get("/drinks/:id", (request, response) => {
  queries
    .read(request.params.id, "drinks")
    .then(drinks => {
      drinks ? response.json({ drinks }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.get("/comments/:id", (request, response) => {
  queries
    .read(request.params.id, "comments")
    .then(comments => {
      comments ? response.json({ comments }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.get("/recipes/:id", (request, response) => {
  queries
    .read(request.params.id, "recipes")
    .then(recipes => {
      recipes ? response.json({ recipes }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.post("/comments", (request, response) => {
  queries
    .create(request.body, "comments")
    .then(comments => {
      response.status(201).json({ comments })
    })
    .catch(console.error)
})

app.post("/drinks", (request, response) => {
  queries
    .create(request.body, "drinks")
    .then(drinks => {
      response.status(201).json({ drinks })
    })
    .catch(console.error)
})

app.post("/recipes", (request, response) => {
  queries
    .create(request.body, "recipes")
    .then(recipes => {
      response.status(201).json({ recipes })
    })
    .catch(console.error)
})

app.put("/comments/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "comments")
    .then(comments => {
      response.json({ comments })
    })
    .catch(console.error)
})

app.put("/drinks/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "drinks")
    .then(drinks => {
      response.json({ drinks })
    })
    .catch(console.error)
})

app.put("/recipes/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "recipes")
    .then(recipes => {
      response.json({ recipes })
    })
    .catch(console.error)
})

app.delete("/comments/:id", (request, response, next) => {
  queries
    .delete(request.params.id, "comments")
    .then(() => {
      response.sendStatus(204)
    })
    .catch(next)
})

app.get("/", (request, response, next) => {
  queries
    .getDrinkRecipes()
    .then(recipes => {
      response.json({ recipes })
    })
    .catch(next)
})

app.post("/charge", (request, response, next) => {
  charge(
    parseInt(request.body.amount) * 100,
    request.body.service,
    request.body.token
  )
    .then(charge => {
      response.json({ charge })
    })
    .catch(next)
})

// function charge(amount, service, token){
//   return new Promise((resolve, reject) => {
//     stripe.charges.create(
//       {
//         amount: amount,
//         currency: "usd",
//         description: service,
//         source: token
//       },
//       (error, charge) => {
//         if(error){
//           reject(error)
//         } else {
//           resolve(charge)
//         }
//       }
//     )
//   })
// }

// app.use((req, res, next) => {
//   const err = new Error("Not Found")
//   err.status = 404
//   next(err)
// })

// // error handler
// app.use((err, req, res, next) => {
//   res.status(err.status || 500)
//   res.json({
//     message: err.message,
//     error: req.app.get("env") === "development" ? err.stack : {}
//   })
// }
// )

module.exports = app
