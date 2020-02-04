"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_1 = require("../../../../update-profile/request/body/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.jabatan !== undefined) {
        if (!finite_1.default(value.jabatan) && value.jabatan !== null) {
            return false;
        }
    }
    if (!positive_1.default(value.id)) {
        return false;
    }
    return true;
}
exports.default = Type;
