import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

export default {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found ' });
        }

        if (!(await user.checkpassword(password))) {
            return res.status(401).json({ error: 'Password does not match ' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    },
};
