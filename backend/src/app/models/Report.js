import Sequelize, { Model } from 'sequelize';

class Report extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                amount: Sequelize.INTEGER,
                input: Sequelize.INTEGER,
                output: Sequelize.INTEGER,
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
