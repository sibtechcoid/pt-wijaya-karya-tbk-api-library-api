"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../recana/boolean/type");
const type_3 = require("../../../../jadwal-rinci/boolean/type");
const type_4 = require("../../../../proyek/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.rencana, type_2.default)) {
        return false;
    }
    if (!array_of_1.default(value.proyek, type_4.default)) {
        return false;
    }
    if (!array_of_1.default(value.jadwalRinci, type_3.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map