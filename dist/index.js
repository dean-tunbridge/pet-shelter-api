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
// GET //
app.get('/', (req, res) => {
    res.json(pets_1.pets);
});
// GET BY ID //
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const pet = pets_1.pets.find((pet) => pet.id.toString() === id);
    pet ? res.json(pet) : res.status(404).json({ message: 'Invalid ID' });
});
// GET BY SPECIES //
app.get('/', (req, res) => {
    const { species, adopted } = req.query;
    let filterPets = pets_1.pets;
    if (species) {
        filterPets = filterPets.filter((pet) => pet.species.toLowerCase() === pet.species.toLowerCase());
    }
    if (adopted) {
        filterPets = filterPets.filter((pet) => pet.adopted === JSON.parse(adopted));
    }
    res.json(filterPets);
});
// ERROR //
app.use((req, res) => {
    res.status(404).json({ message: 'No route found' });
});
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});
