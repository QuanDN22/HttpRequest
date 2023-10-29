const data = [
	{
		deviceId: "8a0fc66a61a959f6",
		qrCodeId: "a652d57094b7590b0dea115b156c07098abdea87",
		qrCodeValue: "P22498244182551944",
	},
	{
		deviceId: "61a959f68a0fc66a",
		qrCodeId: "115b156c07098abdea87a652d57094b7590b0dea",
		qrCodeValue: "182551944P22498244",
	},
];
const router = (app) => {
	app.get("/", (request, response) => {
		response.send({
			message: "Node.js and Express REST API",
		});
	});
    app.get("/data", (request, response) => {
        response.send(data);
    });
};
export default router;