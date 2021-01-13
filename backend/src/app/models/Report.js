import Sequelize, { Model } from 'sequelize';

class Report extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                amount: Sequelize.INTEGER,
                expiration_date: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Product, {
            foreignKey: 'product_id',
            as: 'products',
        });
    }
}

export default Report;
