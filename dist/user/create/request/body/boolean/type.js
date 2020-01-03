"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-number/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.nama)) {
        return false;
    }
    if (!type_2.default(value.user)) {
        return false;
    }
    if (!type_2.default(value.singkatan)) {
        return false;
    }
    if (!type_2.default(value.telepon) && value.telepon !== null) {
        return false;
    }
    if (!type_2.default(value.email) && value.email !== null) {
        return false;
    }
    if (!type_2.default(value.password)) {
        return false;
    }
    if (!type_3.default(value.jabatan) && value.jabatan !== null) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map