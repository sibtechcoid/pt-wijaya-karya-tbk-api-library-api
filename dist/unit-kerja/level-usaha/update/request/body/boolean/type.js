"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../jenis-unit/update/request/body/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.jenisUnit !== undefined) {
        if (!finite_1.default(value.jenisUnit)) {
            return false;
        }
    }
    // if(value.jenisUsaha !== undefined) {
    //
    //     if(!IsFinite(value.jenisUsaha)) {
    //
    //         return false;
    //     }
    // }
    return true;
}
exports.default = Type;
