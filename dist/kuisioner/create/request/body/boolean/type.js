"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-enum/boolean/type");
const group_1 = require("../../../../../anggota/jabatan/group/group");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.pertanyaan)) {
        return false;
    }
    if (!type_3.default(value.dari, group_1.default)) {
        return false;
    }
    //
    // if(!EnumType(value.untuk, Group)) {
    //
    //     return false;
    // }
    // if(value.untuk === value.dari) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;