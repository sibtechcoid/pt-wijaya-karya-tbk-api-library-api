"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../qpass/place/business/create/request/business/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    //
    // if(!ArrayOf(value.levels, IsNumber)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map