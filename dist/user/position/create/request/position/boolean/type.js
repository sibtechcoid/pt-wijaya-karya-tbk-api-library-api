"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../qpass/place/business/create/request/business/boolean/type");
const type_2 = require("../../../../../access/update/request/access/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.access)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map