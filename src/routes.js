import { Router } from "express"

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Server Started " })

})
export default routes