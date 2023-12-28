import Sequelize, { Model } from 'sequelize';

class Products extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.INTEGER,
                category: Sequelize.STRING,
                path: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'Products'
            }
        )
    }
}

export default Products