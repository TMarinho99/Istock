module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            barcode: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            value: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            expiration_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            count_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('products');
    },
};
