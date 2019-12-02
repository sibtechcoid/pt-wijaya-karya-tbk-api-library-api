"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-number/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.user)) {
        return false;
    }
    if (!type_2.default(value.position)) {
        return false;
    }
    // if(!IsNumber(value.project)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map