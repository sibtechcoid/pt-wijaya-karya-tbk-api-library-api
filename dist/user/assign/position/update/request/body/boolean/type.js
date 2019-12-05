"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-number/boolean/type");
const type_2 = require("t-object/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value.access)) {
        return false;
    }
    if (!type_1.default(value.user)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map