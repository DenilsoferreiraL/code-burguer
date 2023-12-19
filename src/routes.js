const { Router } = require("express")

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Server Started" })

})
module.exports = routes