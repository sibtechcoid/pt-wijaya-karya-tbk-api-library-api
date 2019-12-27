"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../proyek/boolean/type");
const type_3 = require("../../../../jadwal-rinci/boolean/type");
const type_4 = require("../../../../rencana/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.proyek !== undefined) {
        if (!array_of_1.default(value.proyek, type_2.default)) {
            return false;
        }
    }
    if (value.jadwalRinci !== undefined) {
        if (!array_of_1.default(value.jadwalRinci, type_3.default)) {
            return false;
        }
    }
    if (value.rencana !== undefined) {
        if (!array_of_1.default(value.rencana, type_4.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map