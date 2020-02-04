"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!positive_1.default(value.code)) {
        return false;
    }
    if (!type_2.default(value.message)) {
        return false;
    }
    return true;
}
exports.default = Type;
