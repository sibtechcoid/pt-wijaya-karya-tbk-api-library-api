"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../qpass/boolean/type");
const type_2 = require("../../../../internal/boolean/type");
const type_3 = require("t-object/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.qpass, type_1.default)) {
        return false;
    }
    if (!array_of_1.default(value.internal, type_2.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map