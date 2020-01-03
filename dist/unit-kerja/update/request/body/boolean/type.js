"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("../../../../../nama/update/boolean/type");
const type_4 = require("../../../../../singkatan/update/boolean/type");
const type_5 = require("../../../../../id/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_5.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (value.alamat !== undefined) {
        if (!type_2.default(value.alamat)) {
            return false;
        }
    }
    if (value.levelUsaha !== undefined) {
        if (!finite_1.default(value.levelUsaha)) {
            return false;
        }
    }
    if (value.jenisUnit !== undefined) {
        if (!finite_1.default(value.jenisUnit)) {
            return false;
        }
    }
    if (value.jenisUsaha !== undefined) {
        if (!finite_1.default(value.jenisUsaha)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map