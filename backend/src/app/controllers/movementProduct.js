import Product from '../models/Product';

export default {
    async amount(req, res) {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.status(400).json({ error: 'Product not found' });
        }

        product.amount += req.body.amount;
        await product.save();

        return res.json(product.amount);
    },
};
