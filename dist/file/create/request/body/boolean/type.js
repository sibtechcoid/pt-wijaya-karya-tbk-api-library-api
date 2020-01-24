"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!value.data) {
        return false;
    }
    return true;
}
exports.default = Type;
