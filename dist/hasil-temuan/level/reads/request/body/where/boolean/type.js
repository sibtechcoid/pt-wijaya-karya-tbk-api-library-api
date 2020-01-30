"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
const type_4 = require("../../../../../type/type");
const type_5 = require("@dikac/t-enum/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        levelUsaha: (v) => undefinable_1.default(v, finite_1.default),
        parent: (v) => undefinable_1.default(v, finite_1.default),
        deactivate: (v) => undefinable_1.default(v, type_3.default),
        judul: (v) => undefinable_1.default(v, type_3.default),
        bobot: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => finite_1.default(p))),
        point: (p) => undefinable_1.default(p, (p) => nullable_1.default(p, (p) => finite_1.default(p))),
        nama: (v) => undefinable_1.default(v, type_2.default),
        tipe: (v) => undefinable_1.default(v, (v) => type_5.default(v, type_4.default)),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
