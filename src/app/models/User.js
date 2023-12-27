import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        modelName: 'User', // Add this line to explicitly set the model name
      },
    );
    return this; // Add this line to return the model after initialization
  }
}

export default User;