"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../business/create/request/business/boolean/type");
function Typez(value) {
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
exports.default = Typez;
//# sourceMappingURL=type.js.map