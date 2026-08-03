"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRouter = void 0;
const express_1 = __importDefault(require("express"));
const pets_controllers_1 = require("../controllers/pets.controllers");
const pets_middleware_1 = require("../middleware/pets.middleware");
// PET ROUTER //
exports.petRouter = express_1.default.Router();
// GET VIA QUERY //
exports.petRouter.get('/', pets_controllers_1.getPets);
// GET BY ID //
exports.petRouter.get('/:id', pets_middleware_1.validateID, pets_controllers_1.getPetById);
