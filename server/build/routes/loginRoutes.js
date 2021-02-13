"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/protected', requireAuth, function (req, res) {
    res.send("Welcome to the protected route");
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("<div>\n        <div>You are logged in</div>\n        <a href=\"/logout\">Logout</a>\n      </div>");
    }
    else {
        res.send("<div>\n        <div>You are logged out</div>\n        <a href=\"/login\">Login</a>\n      </div>");
    }
});
