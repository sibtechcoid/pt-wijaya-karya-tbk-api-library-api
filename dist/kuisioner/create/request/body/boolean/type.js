"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_3 = require("@dikac/t-enum/boolean/type");
const group_1 = require("../../../../../anggota/jabatan/group/group");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let create = {
        pertanyaan: type_2.default,
        dari: (v) => type_3.default(v, group_1.default),
    };
    return structure_1.default(value, create);
}
exports.default = Type;
