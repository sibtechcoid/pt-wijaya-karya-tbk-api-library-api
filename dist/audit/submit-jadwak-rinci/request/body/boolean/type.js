"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const structure_1 = require("@dikac/t-object/boolean/structure");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: finite_1.default,
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
