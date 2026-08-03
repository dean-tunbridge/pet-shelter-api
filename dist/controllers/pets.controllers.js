"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetById = exports.getPets = void 0;
const pets_1 = require("../data/pets");
// GET PET VIA QUERY //
const getPets = (req, res) => {
    const { species, adopted, minAge, maxAge } = req.query;
    let filteredPets = pets_1.pets;
    // GET BY SPECIES //
    if (species) {
        filteredPets = filteredPets.filter((pet) => pet.species.toLowerCase() === species.toLowerCase());
    }
    // GET BY ADOPTED STATUS //
    if (adopted) {
        filteredPets = filteredPets.filter((pet) => pet.adopted === JSON.parse(adopted));
    }
    // GET PETS WITHIN SPECIFIED AGE RANGE //
    if (minAge) {
        filteredPets = filteredPets.filter((pet) => pet.age >= JSON.parse(minAge));
    }
    if (maxAge) {
        filteredPets = filteredPets.filter((pet) => pet.age <= JSON.parse(maxAge));
    }
    res.json(filteredPets);
};
exports.getPets = getPets;
// GET PET BY ID //
const getPetById = (req, res) => {
    const { id } = req.params;
    const pet = pets_1.pets.find((pet) => pet.id.toString() === id);
    pet ? res.json(pet) : res.status(404).json({ message: 'Invalid ID' });
};
exports.getPetById = getPetById;
