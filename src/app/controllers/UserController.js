import { v4 } from 'uuid'
import User from '../models/User'
import * as Yup from 'yup'

class UserController {
    // Controller method for handling user creation
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password_hash: Yup.string().required().min(6),
            admin: Yup.boolean(),
        })
        // Validate request body against the schema
        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: "make sure your data is correct" })
        }

        // Destructure relevant fields from the request body
        const { name, email, password_hash, admin } = request.body

        // Create a new user using the User model
        const user = await User.create({
            id: v4(), // Generate a UUID for the user
            name,
            email,
            password_hash,
            admin,
        })
        // Return a JSON response with the user details
        return response.status(201).json({ id: user.id, name, email, admin })
    }
}
// Export an instance of the UserController
export default new UserController()


