import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
    // Method for handling user login/authentication

    async store(request, response) {
        // Validation schema using Yup for the request body
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })

        const checkValidPasswordorEmail = () => {
            return response.status(401).json({ messege: 'make sure your email or password' })
        }

        if (!(await schema.isValid(request.body))) checkValidPasswordorEmail()

        const { email, password } = request.body

        const user = await User.findOne({
            where: { email }
        })

        if (!user) checkValidPasswordorEmail()


        if (!(await user.checkPassword(password))) checkValidPasswordorEmail()


        return response.json({
            id: user.id,
            email,
            name: user.name,
            admin: user.admin
        })
    }

}

export default new SessionController()