"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pets_1 = require("./data/pets");
const app = (0, express_1.default)();
const PORT = 8000;
app.use((0, cors_1.default)());
//GET
app.get('/', (req, res) => {
    res.json(pets_1.pets);
});
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});
