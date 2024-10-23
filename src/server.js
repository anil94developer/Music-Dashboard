const express = require('express');
const cors = require('cors');
const multer = require('multer');
const routes = require('./routes');
const CONSTANT = require('./utils/constant');
const app = express();

// SET STORAGE for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

// API routes
const cpUpload = upload.fields([{ name: 'file', maxCount: 20 }, { name: 'photo', maxCount: 20 }]);
app.use('/api', cpUpload, routes);

// Handle unknown API requests
app.use((req, res, next) => {
    console.log("Route not found: ", req.url);
    next();
});

app.listen(CONSTANT.NODE_PORT, () => {
    console.log(`Server running on port ${CONSTANT.NODE_PORT}`);
});

module.exports = app;
