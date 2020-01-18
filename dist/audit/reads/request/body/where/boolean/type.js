"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("../../../../../../deactivate/read/request/body/boolean/type");
const type_3 = require("@dikac/t-enum/boolean/type");
const status_1 = require("../../../../../status/status");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const type_4 = require("../../../../../type/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (value.unitKerja !== undefined) {
        if (!finite_1.default(value.unitKerja)) {
            return false;
        }
    }
    if (value.status !== undefined) {
        if (!array_of_1.default(value.status, (v) => type_3.default(v, status_1.default))) {
            return false;
        }
    }
    if (value.tipe !== undefined) {
        if (!type_3.default(value.tipe, type_4.default)) {
            return false;
        }
    }
    if (value.rencana !== undefined) {
        if (!array_of_1.default(value.rencana, compatible_1.default) || value.rencana.length !== 2) {
            return false;
        }
    }
    if (value.realisasi !== undefined) {
        if (!array_of_1.default(value.realisasi, compatible_1.default) || value.realisasi.length !== 2) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
