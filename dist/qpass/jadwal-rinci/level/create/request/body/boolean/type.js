"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../../name/create/boolean/type");
const type_2 = require("t-number/boolean/type");
const type_3 = require("t-enum/boolean/type");
const type_4 = require("../../../../type/type");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.bobot)) {
        return false;
    }
    if (!type_2.default(value.point)) {
        return false;
    }
    if (!type_2.default(value.auditProgram)) {
        return false;
    }
    if (!type_3.default(value.tipe, type_4.default)) {
        return false;
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map