"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import TypeAccess from "../../../../../access/create/request/body/boolean/type";
const type_1 = require("../../../../../../name/create/boolean/type");
const type_2 = require("../../../../../../abbreviation/create/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    // if(!TypeAccess(value.access)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map