"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Realize(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.realisasi !== undefined) {
        if (!array_of_1.default(value.realisasi, compatible_1.default) || value.realisasi.length !== 2) {
            return false;
        }
    }
    return true;
}
exports.default = Realize;
//# sourceMappingURL=realize.js.map