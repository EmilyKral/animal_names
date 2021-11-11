const http = require("http");

let cats = ["Nebraska", "Oakley", "Blue", "Lily"];
let dogs = ["Cleo", "Millie", "Sidney", "Tess"];
let unicorns = ["Charlie", "Pegasus", "Esmerelda", "Twilight Sparkle"];

function requestListener(req, res) {
	let body;
	let statusCode;

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, DELETE");

	switch (req.url) {
		case "/":
			body = { message: "Pick an animal" };
			break;
		case "/cats":
			body = { cats: cats };
			break;
		case "/dogs":
			body = { dogs: dogs };
			break;
		case "/unicorns":
			body = { unicorns: unicorns };
			break;
		default:
			statusCode = 404;
			body = { error: `Route ${req.url} does not exist` };
			break;
	}

	res.statusCode = statusCode || 200;
	body = body && JSON.stringify(body);
	res.end(body);
}

const server = http.createServer(requestListener);

const startServer = (port, host) => {
	server.listen(port, host, () => console.log(`visit http://${host}:${port}`));
};

const closeServer = cb => server.close(cb);

module.exports = { startServer, closeServer };
