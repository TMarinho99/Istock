import Product from '../models/Product';

export default {
    async index(req, res) {
        const products = await Product.findAll({
            attributes: [
                'id',
                'name',
                'description',
                'value',
                'amount',
                'expiration_date',
            ],
        });

        return res.json(products);
    },
    async store(req, res) {
        const { name, barcode } = req.body;

        const existProduct = await Product.findOne({ where: { name } });

        if (existProduct) {
            return res
                .status(400)
                .json({ error: 'Product name already registered ' });
        }

        const existProduct1 = await Product.findOne({ where: { barcode } });

        if (existProduct1) {
            return res
                .status(400)
                .json({ error: 'Product barcode already registered ' });
        }

        const {
            id,
            description,
            valur,
            amount,
            expiration_date,
        } = await Product.create(req.body);

        return res.json({
            id,
            name,
            description,
            valur,
            amount,
            expiration_date,
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