"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        dari: compatible_1.default,
        sampai: compatible_1.default,
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
