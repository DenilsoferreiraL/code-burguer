import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        modelName: 'User', // Add this line to explicitly set the model name
      },
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10)
      }
    })
    return this; // Add this line to return the model after initialization
  }
}

export default User;