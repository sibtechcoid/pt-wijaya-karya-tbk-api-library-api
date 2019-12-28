"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_1 = require("../../../../update-profile/request/body/boolean/type");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.position)) {
        return false;
    }
    if (!finite_1.default(value.id)) {
        return false;
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map