"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pet = { name: 'Pixel', species: 'cat', adopted: true, age: 9 };
const app = (0, express_1.default)();
const PORT = 8000;
//GET
app.get('/', (req, res) => {
    res.json(pet);
});
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});
