"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-string/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.name !== undefined) {
        if (!type_2.default(value.name)) {
            return false;
        }
    }
    if (value.user !== undefined) {
        if (!type_2.default(value.user)) {
            return false;
        }
    }
    if (value.abbreviation !== undefined) {
        if (!type_2.default(value.abbreviation)) {
            return false;
        }
    }
    if (value.phone !== undefined) {
        if (!type_2.default(value.phone)) {
            return false;
        }
    }
    if (value.email !== undefined) {
        if (!type_2.default(value.email)) {
            return false;
        }
    }
    if (value.password !== undefined) {
        if (!type_2.default(value.password)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map