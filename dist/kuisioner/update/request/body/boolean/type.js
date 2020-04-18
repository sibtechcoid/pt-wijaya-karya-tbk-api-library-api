"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_3 = require("@dikac/t-enum/boolean/type");
const group_1 = require("../../../../../anggota/jabatan/group/group");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: (v) => undefinable_1.default(v, positive_1.default),
        pertanyaan: (v) => undefinable_1.default(v, type_2.default),
        dari: (v) => undefinable_1.default(v, (v) => type_3.default(v, group_1.default)),
    };
    //
    // if(!TypeId(value)) {
    //
    //     return false;
    // }
    //
    // if(value.nomer !== undefined) {
    //
    //     if(!IsString(value.nomer)) {
    //
    //         return false;
    //     }
    // }
    //
    // if(value.audit !== undefined) {
    //
    //     if(!ArrayOf(value.audit, Positive)) {
    //
    //         return false;
    //     }
    // }
    //
    // if(value.lampiran !== undefined) {
    //
    //     if(!ArrayOf(value.lampiran, IsString)) {
    //
    //         return false;
    //     }
    // }
    return structure_1.default(value, sort);
}
exports.default = Type;
