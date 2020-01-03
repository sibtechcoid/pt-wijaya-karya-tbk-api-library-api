"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/create/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.auditProgram)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map