"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../jenis-unit/create/request/body/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.jenisUnit)) {
        return false;
    }
    //    to be deprecated
    // if(!IsFinite(value.jenisUsaha)) {
    //
    //     return false;
    // }
    //
    return true;
}
exports.default = Type;
