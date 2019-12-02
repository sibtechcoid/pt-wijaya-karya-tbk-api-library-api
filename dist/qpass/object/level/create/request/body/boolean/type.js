"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../type/create/request/body/boolean/type");
const finite_1 = require("t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.type)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map