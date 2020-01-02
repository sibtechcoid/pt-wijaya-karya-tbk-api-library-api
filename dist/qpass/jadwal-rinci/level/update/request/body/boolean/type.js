"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../../name/update/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("@dikac/t-enum/boolean/type");
const type_3 = require("../../../../type/type");
const type_4 = require("../../../../../../../id/boolean/type");
function Type(value) {
    if (!type_4.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    if (value.bobot !== undefined) {
        if (!finite_1.default(value.bobot)) {
            return false;
        }
    }
    if (value.point !== undefined) {
        if (!finite_1.default(value.point)) {
            return false;
        }
    }
    if (value.tipe !== undefined) {
        if (!type_2.default(value.tipe, type_3.default)) {
            return false;
        }
    }
    if (value.auditProgram !== undefined) {
        if (!finite_1.default(value.auditProgram)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map