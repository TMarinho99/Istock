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
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            value: {
                type: Sequelize.FLOAT,
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
