"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../validator/create");
function Create(method, path, validator) {
    let validator_ = new create_1.default(validator);
    let merged = Object.assign(method, path, validator_);
    merged.validate = validator_.validate;
    return merged;
}
exports.default = Create;
