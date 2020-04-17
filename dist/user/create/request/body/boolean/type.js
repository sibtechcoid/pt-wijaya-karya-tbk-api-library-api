"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const positive_1 = require("@dikac/t-number/boolean/positive");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        nama: type_2.default,
        user: type_2.default,
        singkatan: type_2.default,
        password: type_2.default,
        telepon: (v) => nullable_1.default(v, type_2.default),
        jabatanWika: (v) => nullable_1.default(v, type_2.default),
        nip: (v) => nullable_1.default(v, type_2.default),
        email: (v) => nullable_1.default(v, type_2.default),
        jabatan: (v) => nullable_1.default(v, positive_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
