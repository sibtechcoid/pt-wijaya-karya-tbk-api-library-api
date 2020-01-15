"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const finite_1 = require("@dikac/t-number/boolean/finite");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const type_1 = require("../../../../../../id/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: (v) => undefinable_1.default(v, finite_1.default),
        audit: (v) => undefinable_1.default(v, finite_1.default),
        level: (v) => undefinable_1.default(v, finite_1.default),
        selesai: (v) => undefinable_1.default(v, compatible_1.default),
        mulai: (v) => undefinable_1.default(v, compatible_1.default),
        fungsi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, finite_1.default)),
        auditor: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, finite_1.default)),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map