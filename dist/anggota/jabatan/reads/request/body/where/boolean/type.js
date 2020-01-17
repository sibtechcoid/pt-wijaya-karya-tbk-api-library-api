"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../../../../deactivate/read/request/body/boolean/type");
const type_3 = require("@dikac/t-string/boolean/type");
const type_4 = require("@dikac/t-boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_5 = require("../../../../../group/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let where = {
        //  created    : (v) => Undefinable(v, DateCompatibleType),
        deactivate: (v) => undefinable_1.default(v, type_4.default),
        // id         : (v) => Undefinable(v, FiniteType),
        // updated    : (v) => Undefinable(v, DateCompatibleType),
        nama: (v) => undefinable_1.default(v, type_3.default),
        singkatan: (v) => undefinable_1.default(v, type_3.default),
        group: (v) => undefinable_1.default(v, type_5.default),
    };
    return structure_1.default(value, where);
    if (!type_2.default(value)) {
        return false;
    }
    if (value.singkatan !== undefined) {
        if (!type_3.default(value.singkatan)) {
            return false;
        }
    }
    if (value.nama !== undefined) {
        if (!type_3.default(value.nama)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
