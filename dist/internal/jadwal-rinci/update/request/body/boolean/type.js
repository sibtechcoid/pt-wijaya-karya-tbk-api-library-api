"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_of_1 = require("t-array/boolean/array-of");
const type_1 = require("t-number/boolean/type");
const compatible_1 = require("t-date/boolean/compatible");
const type_2 = require("../../../../../../id/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (value.fungsi !== undefined) {
        if (!array_of_1.default(value.fungsi, type_1.default)) {
            return false;
        }
    }
    if (value.klausul !== undefined) {
        if (!array_of_1.default(value.klausul, type_1.default)) {
            return false;
        }
    }
    if (value.prosedur !== undefined) {
        if (!array_of_1.default(value.prosedur, type_1.default)) {
            return false;
        }
    }
    if (value.project !== undefined) {
        if (!type_1.default(value.project)) {
            return false;
        }
    }
    if (value.prosesBisnis !== undefined) {
        if (!type_1.default(value.prosesBisnis)) {
            return false;
        }
    }
    if (value.selesai !== undefined) {
        if (!compatible_1.default(value.selesai)) {
            return false;
        }
    }
    if (value.mulai !== undefined) {
        if (!compatible_1.default(value.mulai)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map