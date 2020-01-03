"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/create/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("@dikac/t-enum/boolean/type");
const type_3 = require("../../../../type/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!finite_1.default(value.bobot)) {
        return false;
    }
    if (!finite_1.default(value.point)) {
        return false;
    }
    if (!finite_1.default(value.auditProgram)) {
        return false;
    }
    if (!type_2.default(value.tipe, type_3.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map