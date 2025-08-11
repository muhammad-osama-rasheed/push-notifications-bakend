const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const {
  sendEveryMinuteNotification,
} = require("./src/controllers/FirebaseController");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const firebaseRoute = require("./src/routes/FirebaseRoute");
app.use("/api/firebase", firebaseRoute);

// CRON job to send notification every minute uncomment and check

// cron.schedule("* * * * *", async () => {
//   await sendEveryMinuteNotification();
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
