import Product from '../models/Product';
import File from '../models/File';

export default {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.findAll({
            attributes: ['id', 'name', 'description', 'value'],
            include: {
                model: File,
                as: 'image',
                attributes: ['name', 'path', 'url'],
            },
            order: ['name'],
            limit: 20,
            offset: (page - 1) * 20,
        });

        return res.json(products);
    },
    async store(req, res) {
        const { name } = req.body;

        const existProduct = await Product.findOne({ where: { name } });

        if (existProduct) {
            return res
                .status(400)
                .json({ error: 'Product name already registered ' });
        }

        const existProduct1 = await Product.findOne({ where: { name } });

        if (existProduct1) {
            return res
                .status(400)
                .json({ error: 'Product already registered ' });
        }

        const { id, barcode, description, value } = await Product.create(
            req.body
        );

        return res.json({
            id,
            name,
            barcode,
            description,
            value,
        });
    },
    async update(req, res) {
        const product = await Product.findByPk(req.params.id);

        if (req.userId.admin === true) {
            return res.status(401).json({ error: 'Restricted access ' });
        }

        if (!product) {
            return res.status(400).json({ error: 'Product not exist' });
        }

        const {
            name,
            description,
            value,
            amount,
            expiration_date,
        } = await product.update(req.body);

        return res.json({
            name,
            description,
            value,
            amount,
            expiration_date,
        });
    },
    async delete(req, res) {
        const product = await Product.findByPk(req.params.id);

        if (req.userId.admin === true) {
            return res.status(401).json({ error: 'Restricted access ' });
        }

        if (!product) {
            return res.status(400).json({ error: 'Product not found' });
        }

        await product.destroy();

        return res.status(204).send();
    },
};
