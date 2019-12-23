"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("t-number/boolean/finite");
const type_1 = require("../../../../../../id/boolean/type");
const type_2 = require("../../../../../../name/update/boolean/type");
const type_3 = require("../../../../../../abbreviation/update/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
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
//# sourceMappingURL=type.js.map