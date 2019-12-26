"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../proyek/boolean/type");
const type_3 = require("../../../../user/boolean/type");
const type_4 = require("../../../../unit-kerja/boolean/type");
const type_5 = require("../../../../rencana/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.user, type_3.default)) {
        return false;
    }
    if (!array_of_1.default(value.proyek, type_2.default)) {
        return false;
    }
    if (!array_of_1.default(value.unitKerja, type_4.default)) {
        return false;
    }
    if (!array_of_1.default(value.rencana, type_5.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map