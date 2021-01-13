import { parseISO } from 'date-fns';
import Report from '../models/Report';
import Product from '../models/Product';

export default {
    async index(req, res) {
        const { product_id } = req.body;

        if (!product_id) {
            return res.status(400).json({ error: 'Product not found' });
        }

        const reports = await Report.findAll({
            where: { product_id },
            attributes: ['date', 'amount', 'expiration_date'],
            include: {
                model: Product,
                as: 'products',
                attributes: ['name', 'value', 'description'],
            },
        });

        return res.json(reports);
    },
    async store(req, res) {
        const existProduct = await Product.findByPk(req.body.product_id);

        if (!existProduct) {
            return res.status(400).json({ error: 'Product does not exist' });
        }

        const { date, product_id, amount, expiration_date } = req.body;

        const report = await Report.create({
            date: parseISO(date),
            product_id,
            amount,
            expiration_date,
        });

        return res.json(report);
    },
};
