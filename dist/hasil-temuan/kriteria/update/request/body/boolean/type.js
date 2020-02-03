"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/update/boolean/type");
const type_2 = require("../../../../../../id/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    return true;
}
exports.default = Type;
