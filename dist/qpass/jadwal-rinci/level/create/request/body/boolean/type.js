"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../../name/create/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const type_2 = require("t-enum/boolean/type");
const type_3 = require("../../../../type/type");
function Typez(value) {
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
exports.default = Typez;
//# sourceMappingURL=type.js.map