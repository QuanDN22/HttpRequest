// Import packages and set the port
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import express from "express";
const port = 3002;
const app = express();

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

routes(app);

// Start the server
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});

