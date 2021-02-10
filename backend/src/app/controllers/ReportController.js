import { parseISO } from 'date-fns';
import Report from '../models/Report';
import Product from '../models/Product';
import File from '../models/File';

export default {
    async index(req, res) {
        const { page = 1 } = req.query;
        const { product_id } = req.body;

        if (!product_id) {
            return res.status(400).json({ error: 'Product not found' });
        }

        const reports = await Report.findAll({
            where: { product_id },
            attributes: ['date', 'amount', 'input', 'output'],
            include: {
                model: Product,
                as: 'products',
                attributes: ['name', 'value', 'description'],
                include: {
                    model: File,
                    as: 'image',
                    attributes: ['path', 'url'],
                },
            },
            order: ['date'],
            limit: 30,
            offset: (page - 1) * 30,
        });

        return res.json(reports);
    },

    async store(req, res) {
        const existProduct = await Product.findByPk(req.body.product_id);

        if (!existProduct) {
            return res.status(400).json({ error: 'Product does not exist' });
        }

        const { date, product_id, amount, input, output } = req.body;

        const report = await Report.create({
            product_id,
            date: parseISO(date),
            amount,
            input,
            output,
        });

        return res.json(report);
    },
};
