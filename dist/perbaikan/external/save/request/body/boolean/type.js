"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_1 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let update = {
        id: (v) => undefinable_1.default(v, positive_1.default),
        audit: (v) => undefinable_1.default(v, positive_1.default),
    };
    return structure_1.default(value, update);
}
exports.default = Type;
