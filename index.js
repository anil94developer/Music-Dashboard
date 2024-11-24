const express = require("express")
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const cron = require('node-cron');

const adminRoutes = require("./routes/admin.routes")

//sub admin
const authRoutes = require("./routes/auth.routes")
const releaseRoutes = require("./routes/release.routes");
const artistRoutes = require("./routes/artist.routes");
const supportRoutes = require("./routes/support.routes"); 
const bankRoutes = require("./routes/bank.routes");
const walletRoutes = require("./routes/wallet.route");
const permissionsRoutes = require("./routes/permission.routes");





app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
cron.schedule('0 * * * *', async () => {
  console.log('Running a task every hour');
  await authModel.cronForOneHour()
});

// Schedule a task to run every day at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running a task every day at midnight');
  await authModel.cronForOneDay()
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

dotenv.config();
app.use(cors());


// app.use("/auth/createSecure", adminRoutes)
app.use("/auth", authRoutes);
app.use("/release", releaseRoutes);
app.use("/artist", artistRoutes);
app.use("/support", supportRoutes);
app.use("/bank", bankRoutes);
app.use("/wallet", walletRoutes); 
app.use("/",permissionsRoutes);




const server = new http.createServer({}, app);
server.listen(8002, () => { console.log(`Server Started Listening on port 8002`) });