"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-enum/boolean/type");
const type_4 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_5 = require("../../../../../type/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        deactivate: (v) => undefinable_1.default(v, type_4.default),
        nama: (v) => undefinable_1.default(v, type_2.default),
        singkatan: (v) => undefinable_1.default(v, type_2.default),
        tipe: (v) => undefinable_1.default(v, (v) => type_3.default(v, type_5.default)),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
