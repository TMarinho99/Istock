import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                barcode: Sequelize.STRING,
                description: Sequelize.STRING,
                value: Sequelize.FLOAT,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'image_id', as: 'image' });
    }
}

export default Product;
