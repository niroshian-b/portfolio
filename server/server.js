const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');
const router = express.Router();
const port = process.env.PORT || 5000;
const app = express();

const transport = {
	host: 'smtp-mail.outlook.com',
	port: 587,
	auth: {
		user: creds.USER,
		pass: creds.PASS,
	},
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		//console.log that the server is running
		console.log('Server is ready to take messages');
	}
});

app.use(cors());
app.use(express.json());
app.use('/', router);

//create a test GET route
router.get('/test', (req, res) => {
	res.status(200).send({
		status: 200,
		message: 'Success! The server is running',
	});
});

router.post('/email/send', (req, res, next) => {
	const name = req.body.sender;
	const email = req.body.email;
	const message = req.body.message;
	const content = `name: ${name} \n email: ${email} \n message: ${message} `;

	const mail = {
		from: name,
		to: creds.USER,
		subject: 'New Message from Portfolio Contact Form',
		text: content,
	};

	transporter.sendMail(
		(mail,
		(err, data) => {
			if (err) {
				res.status(500).json({
					status: 500,
					error: 'nodemailer failed to send email',
				});
			} else {
				res.status(200).json({
					status: 200,
					message: 'Success! Email sent!',
				});
			}
		})
	);
});

app.listen(port, () => console.log(`listening on port ${port}`));
