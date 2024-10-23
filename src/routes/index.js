const express = require('express');
const loginRoutes = require('./login.routes');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/v1/login',
        route: loginRoutes,
    },
    // {
    //     path: '/v1/release',
    //     route: releaseRoutes,
    // },
];


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;