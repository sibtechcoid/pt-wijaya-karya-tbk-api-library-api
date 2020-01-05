"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_1 = require("../../../../../../id/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_2 = require("@dikac/t-boolean/type");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
const type_3 = require("@dikac/t-string/boolean/type");
const type_4 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_4.default(value)) {
        return false;
    }
    let sort = {
        //created    : (v) => Undefinable(v, ModeType),
        id: type_1.default,
        auditProgram: (v) => undefinable_1.default(v, finite_1.default),
        parent: (v) => undefinable_1.default(v, finite_1.default),
        judul: (v) => undefinable_1.default(v, type_2.default),
        // id         : (v) => Undefinable(v, ModeType),
        bobot: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => finite_1.default(p))),
        point: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => finite_1.default(p))),
        nama: (v) => undefinable_1.default(v, type_3.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map