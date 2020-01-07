"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        //created    : (v) => Undefinable(v, ModeType),
        //auditProgram    : (v) => Undefinable(v, FiniteType),
        //parent    : (v) => Undefinable(v, FiniteType),
        deactivate: (v) => undefinable_1.default(v, type_3.default),
        //judul : (v) => Undefinable(v, BooleanType),
        // id         : (v) => Undefinable(v, ModeType),
        // bobot    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => FiniteType(p))),
        //point    : (p) => Undefinable<number|null>(p, (p) : p is number|null => Nullable<number>(p, (p) : p is number => FiniteType(p))),
        nama: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map