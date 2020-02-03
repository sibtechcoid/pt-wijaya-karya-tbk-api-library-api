"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const finite_1 = require("@dikac/t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        level: finite_1.default,
        audit: finite_1.default,
        hasil: finite_1.default,
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
