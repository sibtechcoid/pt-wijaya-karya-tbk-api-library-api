"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        //created    : (v) => Undefinable(v, ModeType),
        deactivate: (v) => undefinable_1.default(v, type_3.default),
        // id         : (v) => Undefinable(v, ModeType),
        // updated    : (v) => Undefinable(v, ModeType),
        nama: (v) => undefinable_1.default(v, type_2.default),
        singkatan: (v) => undefinable_1.default(v, type_2.default),
        jenisUnit: (v) => undefinable_1.default(v, finite_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map