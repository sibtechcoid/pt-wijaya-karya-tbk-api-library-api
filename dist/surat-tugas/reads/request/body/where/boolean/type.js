"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("@dikac/t-string/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        nomer: (v) => undefinable_1.default(v, type_3.default),
        audit: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, finite_1.default)),
        deactivate: (v) => undefinable_1.default(v, type_2.default)
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map