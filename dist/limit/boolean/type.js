"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../range/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.limit !== undefined) {
        if (!type_2.default(value.limit)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
