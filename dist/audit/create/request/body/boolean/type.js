"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-enum/boolean/type");
const status_1 = require("../../../../status/status");
const type_3 = require("../../../../type/type");
const type_4 = require("../../../../../jadwal/create/request/body/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_5 = require("../../../../../anggota/create/request/body/boolean/type");
const positive_1 = require("@dikac/t-number/boolean/positive");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (!positive_1.default(value.unitKerja)) {
        return false;
    }
    if (!array_of_1.default(value.anggota, type_5.default)) {
        return false;
    }
    if (!type_2.default(value.status, status_1.default)) {
        return false;
    }
    if (!type_2.default(value.tipe, type_3.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
