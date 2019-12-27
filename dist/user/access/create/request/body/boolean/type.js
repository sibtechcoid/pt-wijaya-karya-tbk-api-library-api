"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../proyek/boolean/type");
const type_3 = require("../../../../user/boolean/type");
const type_4 = require("../../../../unit-kerja/boolean/type");
const type_5 = require("../../../../rencana/boolean/type");
const type_6 = require("../../../../level-usaha/boolean/type");
const type_7 = require("../../../../jenis-usaha/boolean/type");
const type_8 = require("../../../../jenis-unit/boolean/type");
const type_9 = require("../../../../audit-program/boolean/type");
const type_10 = require("../../../../klausul/boolean/type");
const type_11 = require("../../../../prosedur/boolean/type");
const type_12 = require("../../../../level/boolean/type");
const type_13 = require("../../../../fungsi/boolean/type");
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
    if (!array_of_1.default(value.levelUsaha, type_6.default)) {
        return false;
    }
    if (!array_of_1.default(value.jenisUsaha, type_7.default)) {
        return false;
    }
    if (!array_of_1.default(value.jenisUnit, type_8.default)) {
        return false;
    }
    if (!array_of_1.default(value.auditProgram, type_9.default)) {
        return false;
    }
    if (!array_of_1.default(value.klausul, type_10.default)) {
        return false;
    }
    if (!array_of_1.default(value.prosedur, type_11.default)) {
        return false;
    }
    if (!array_of_1.default(value.fungsi, type_13.default)) {
        return false;
    }
    if (!array_of_1.default(value.level, type_12.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map