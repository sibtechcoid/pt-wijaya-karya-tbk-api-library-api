"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
const finite_1 = require("t-number/boolean/finite");
const compatible_1 = require("t-date/boolean/compatible");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.fungsi, finite_1.default)) {
        return false;
    }
    if (!array_of_1.default(value.klausul, finite_1.default)) {
        return false;
    }
    if (!array_of_1.default(value.prosedur, finite_1.default)) {
        return false;
    }
    if (!finite_1.default(value.project)) {
        return false;
    }
    if (!finite_1.default(value.prosesBisnis)) {
        return false;
    }
    if (!compatible_1.default(value.selesai)) {
        return false;
    }
    if (!compatible_1.default(value.mulai)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map