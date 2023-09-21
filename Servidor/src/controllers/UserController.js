import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserController = {
	validateToken: async (req, res) => {
		try {
			//token JWT a ser validado
			const { token } = req.body;
			//timestamp atual em segundos
			const decodedToken = jwt.verify(token, "secret");
			const currentTimestamp = Math.floor(Date.now() / 1000);

			if (decodedToken.exp < currentTimestamp) {
				//token expirado
				return res.status(200).json({ isValid: false });
			}
			//token válido
			return res.json({ isValid: true });
		} 
		catch (error) {
			console.log(error);
			return res.json("Token inválido: \n", { error });
		}
	},

	loginUser: async (req, res) => {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ where: { email } });

			if (!user) {
				return res.status(404).json({ error: "Usuário não encontrado" });
			}

			if (!bcrypt.compareSync(password, user.dataValues.password)) {
				return res.json({ error: "Email ou senha incorretos!" });
			}

			const token = jwt.sign({ email: email }, "secret", {
				subject: String(user.id),
				expiresIn: "1d",
			});

			return res.json({ token });
		} 
		catch (err) {
			return res.json({ err });
		}
	},

	insertUser: async (req, res) => {
		try {
			const { email, password } = req.body;
			const hash = bcrypt.hashSync(password, 8);

			const user = await User.create({
				email: email,
				password: hash,
			});
			return res.send(user);
		} 
		catch (error) {
			return res.json({ error });
		}
	},

	allUsers: async (req, res) => {
		try {
			console.log("entrou na função allUsers");

			const user = await User.findAll({});
			return res.send(user);
		} 
		catch (error) {
			return res.json("usários não encontrados", { error });
		}
	},
};
export default () => UserController;
