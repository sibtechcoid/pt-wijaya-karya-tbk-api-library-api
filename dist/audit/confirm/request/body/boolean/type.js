"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../id/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../../anggota/create/request/body/boolean/type");
const realize_1 = require("../../../../../jadwal/update/request/body/boolean/realize");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!realize_1.default(value)) {
        return false;
    }
    if (value.anggota !== undefined) {
        if (!array_of_1.default(value.anggota, type_2.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
