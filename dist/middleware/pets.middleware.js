"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateID = void 0;
const validateID = (req, res, next) => {
    const { id } = req.params;
    let numRegex = /^\d+$/;
    if (!numRegex.test(id)) {
        res.status(400).json({ message: 'Pet ID must be a number' });
    }
    else {
        next();
    }
};
exports.validateID = validateID;
