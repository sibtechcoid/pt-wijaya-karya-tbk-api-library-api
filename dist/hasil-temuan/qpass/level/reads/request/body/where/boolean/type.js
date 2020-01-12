"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        //created    : (v) => Undefinable(v, ModeType),
        auditProgram: (v) => undefinable_1.default(v, finite_1.default),
        parent: (v) => undefinable_1.default(v, finite_1.default),
        deactivate: (v) => undefinable_1.default(v, type_3.default),
        judul: (v) => undefinable_1.default(v, type_3.default),
        // id         : (v) => Undefinable(v, ModeType),
        bobot: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => finite_1.default(p))),
        point: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => finite_1.default(p))),
        nama: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map