"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("t-number/boolean/finite");
const type_1 = require("../../../../../project/create/request/member/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.project)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map