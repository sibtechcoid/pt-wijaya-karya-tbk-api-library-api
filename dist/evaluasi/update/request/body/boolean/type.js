"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_2 = require("@dikac/t-number/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        id: (v) => undefinable_1.default(v, positive_1.default),
        ke: (v) => undefinable_1.default(v, type_2.default),
        kuisioner: (v) => undefinable_1.default(v, type_2.default),
        nilai: (v) => undefinable_1.default(v, type_2.default),
        audit: (v) => undefinable_1.default(v, type_2.default),
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
