"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./v1/index"));
const routes = (0, express_1.Router)();
// Heath check
routes.get('/api/healthz', (req, res) => {
    return res.json({ status: 'OK' });
});
routes.use('/', index_1.default);
exports.default = routes;
