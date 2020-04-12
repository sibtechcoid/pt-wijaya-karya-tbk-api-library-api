"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../../../deactivate/read/request/body/boolean/type");
const type_3 = require("@dikac/t-enum/boolean/type");
const status_1 = require("../../../../../status/status");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_4 = require("@dikac/t-array/boolean/type");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const type_5 = require("../../../../../type/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const fase_1 = require("../../../../../fase/fase");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let count = {
        rencana: (v) => undefinable_1.default(v, (v) => type_4.default(v) && v.length === 2),
        realisasi: (v) => undefinable_1.default(v, (v) => type_4.default(v) && v.length === 2),
    };
    let sort = {
        unitKerja: (v) => undefinable_1.default(v, positive_1.default),
        deactivate: (v) => undefinable_1.default(v, type_2.default),
        rencana: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, compatible_1.default)),
        realisasi: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, compatible_1.default)),
        status: (v) => undefinable_1.default(v, (v) => type_3.default(v, status_1.default)),
        tipe: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, (v) => type_3.default(v, type_5.default))),
        fase: (v) => undefinable_1.default(v, (v) => array_of_1.default(v, (v) => type_3.default(v, fase_1.default))),
    };
    return structure_1.default(value, count) && structure_1.default(value, sort);
    if (!type_2.default(value)) {
        return false;
    }
    if (value.unitKerja !== undefined) {
        if (!positive_1.default(value.unitKerja)) {
            return false;
        }
    }
    if (value.status !== undefined) {
        if (!array_of_1.default(value.status, (v) => type_3.default(v, status_1.default))) {
            return false;
        }
    }
    if (value.tipe !== undefined) {
        if (!type_3.default(value.tipe, type_5.default)) {
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
