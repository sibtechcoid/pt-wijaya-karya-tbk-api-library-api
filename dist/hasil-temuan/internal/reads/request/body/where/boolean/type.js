"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        jadwalRinci: (v) => undefinable_1.default(v, positive_1.default),
        deactivate: (v) => undefinable_1.default(v, type_2.default)
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
