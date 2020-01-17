"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/create/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    return true;
}
exports.default = Type;
