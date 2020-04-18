"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-number/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let create = {
        ke: type_2.default,
        kuisioner: type_2.default,
        nilai: type_2.default,
        audit: type_2.default,
    };
    return structure_1.default(value, create);
}
exports.default = Type;
