"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-string/boolean/type");
const type_3 = require("t-number/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.nomer)) {
        return false;
    }
    if (!array_of_1.default(value.project, type_3.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map