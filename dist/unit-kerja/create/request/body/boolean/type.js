"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_3 = require("../../../../../nama/create/boolean/type");
const type_4 = require("../../../../../singkatan/create/boolean/type");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (!type_2.default(value.alamat)) {
        return false;
    }
    if (!finite_1.default(value.jenisUsaha)) {
        return false;
    }
    if (!nullable_1.default(value.levelUsaha, finite_1.default)) {
        return false;
    }
    if (!finite_1.default(value.jenisUnit)) {
        return false;
    }
    return true;
}
exports.default = Type;
