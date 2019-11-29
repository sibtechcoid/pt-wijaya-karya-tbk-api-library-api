"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../qpass/object/business/create/request/body/boolean/type");
const type_2 = require("../../../../../access/create/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map