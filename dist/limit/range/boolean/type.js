"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const infinite_1 = require("@dikac/t-number/boolean/infinite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.page)) {
        return false;
    }
    if (!infinite_1.default(value.amount) && !finite_1.default(value.page)) {
        return false;
    }
    return true;
}
exports.default = Type;
