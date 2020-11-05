const express = require(express);
const app = express();
const port = 8080;
const twilio = require('twilio');

app.get("/", (req, res) => {
	try {
	var client = new twilio('ACdf115ef41e62b54f3eaedb5e0d7435a2');
	client.messages.create({
		to: req.params.phn,
		from: `+91123456789`,
		body: `Please visit again`,
	})

	res.status(200).send('SMS Sent');}
	catch (err) {
		res.status(500).send('mssg not sent');
	}
})

app.listen(port, () => {
	console.log("app listening on port {port}");
})