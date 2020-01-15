"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const finite_1 = require("@dikac/t-number/boolean/finite");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let create = {
        auditor: (v) => array_of_1.default(v, finite_1.default),
        audit: finite_1.default,
        level: finite_1.default,
        selesai: compatible_1.default,
        mulai: compatible_1.default,
        fungsi: (v) => array_of_1.default(v, finite_1.default)
    };
    return structure_1.default(value, create);
}
exports.default = Type;
//# sourceMappingURL=type.js.map