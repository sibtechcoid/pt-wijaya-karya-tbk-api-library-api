"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/create/boolean/type");
const type_2 = require("../../../../../../singkatan/create/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    // if(!ArrayOf(value.levels, IsNumber)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map