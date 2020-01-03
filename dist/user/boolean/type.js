"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.nama)) {
        return false;
    }
    if (!type_2.default(value.email)) {
        return false;
    }
    if (!type_2.default(value.singkatan)) {
        return false;
    }
    if (!type_2.default(value.telepon)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map