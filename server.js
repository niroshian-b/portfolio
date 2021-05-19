const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = express.Router();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

//check if dotenv failed
if (dotenv.error) {
	throw dotenv.error;
}

//Create nodemailer transporter object
let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: process.env.MAIL_USERNAME,
		pass: process.env.MAIL_PASSWORD,
		clientId: process.env.OAUTH_CLIENTID,
		clientSecret: process.env.OAUTH_CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
	},
});

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

//create a test GET route
router.get('/test', (req, res) => {
	res.status(200).send({
		status: 200,
		message: 'Success! The server is running',
	});
});

router.post('/email/send', (req, res) => {
	const name = req.body.sender;
	const email = req.body.email;
	const message = req.body.message;
	const content = `name: ${name} \n email: ${email} \n message: ${message} `;

	const mail = {
		from: email,
		to: 'niroshian.b@gmail.com',
		subject: 'New Message from Portfolio Contact Form',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			console.log('Error: ', err);
			res.status(500).json({ status: 500 });
		} else {
			console.log('email sent successfully');
			res.status(200).json({
				status: 200,
				message: 'mail sent successfully',
			});
		}
	});
});

app.listen(port, () => console.log(`listening on port ${port}`));
