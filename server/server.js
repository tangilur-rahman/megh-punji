// external modules
const express = require("express");
const cookie = require("cookie-parser");
const path = require("path");
require("dotenv").config();

// internal modules
const bookingRouter = require("./router/bookingRouter");
const adminRouter = require("./router/adminRouter");
const cottageRouter = require("./router/cottageRouter");

// express server
const app = express();

// connection with mongodb
require("./Config/ConnectMongoDB");

// application-level middleware
app.use(express.json());
app.use(cookie());

// routers
app.use("/admin", adminRouter);
app.use("/booking", bookingRouter);
app.use("/cottage", cottageRouter);

// submit on remote server start
if (process.env.NODE_ENV == "production") {
	app.use(express.static("build"));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname + "/build/index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("client disconnected");
	});
}
// submit on remote server end

// listening port
const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
