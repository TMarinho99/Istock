import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                barcode: Sequelize.STRING,
                description: Sequelize.STRING,
                value: Sequelize.FLOAT,
                amount: Sequelize.INTEGER,
                expiration_date: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );
    }
}

export default Product;
