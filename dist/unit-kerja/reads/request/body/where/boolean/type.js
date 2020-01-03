"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const finite_1 = require("@dikac/t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        deactivate: (v) => undefinable_1.default(v, type_3.default),
        nama: (v) => undefinable_1.default(v, type_2.default),
        singkatan: (v) => undefinable_1.default(v, type_2.default),
        alamat: (v) => undefinable_1.default(v, type_2.default),
        jenisUsaha: (v) => undefinable_1.default(v, finite_1.default),
        levelUsaha: (v) => undefinable_1.default(v, finite_1.default),
        jenisUnit: (v) => undefinable_1.default(v, finite_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map