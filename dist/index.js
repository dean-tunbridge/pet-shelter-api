"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pets = [
    { name: 'Pixel', species: 'cat', adopted: true, age: 9 },
    { name: 'Miso', species: 'cat', adopted: true, age: 6 },
    { name: 'Leonard', species: 'dog', adopted: false, age: 7 },
];
const app = (0, express_1.default)();
const PORT = 8000;
//GET
app.get('/', (req, res) => {
    res.json(pets);
});
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});
