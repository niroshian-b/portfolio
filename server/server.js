const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//console.log that the server is running
app.listen(port, () => console.log(`listening on port ${port}`));

//create a GET route
app.get('/', (req, res) => {
	res.status(200).send({
		status: 200,
		message: 'Success! The server is running',
	});
});
