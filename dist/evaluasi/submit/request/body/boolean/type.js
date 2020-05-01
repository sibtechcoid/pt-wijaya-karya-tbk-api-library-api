"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_2 = require("@dikac/t-number/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let create = {
        untuk: type_2.default,
        audit: type_2.default,
    };
    return structure_1.default(value, create);
}
exports.default = Type;
