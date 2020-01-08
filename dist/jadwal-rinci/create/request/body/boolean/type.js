"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const finite_1 = require("@dikac/t-number/boolean/finite");
const compatible_1 = require("@dikac/t-date/boolean/compatible");
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_2 = require("../../../../../sort/mode/boolean/type");
const nullable_1 = require("@dikac/t-null/boolean/nullable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        project: finite_1.default,
        selesai: compatible_1.default,
        mulai: compatible_1.default,
        fungsi: (v) => array_of_1.default(v, finite_1.default),
        prosedur: (v) => array_of_1.default(v, finite_1.default),
        prosesBisnis: (v) => nullable_1.default(v, finite_1.default),
        klausul: (v) => nullable_1.default(v, (v) => array_of_1.default(v, type_2.default)),
    };
    return structure_1.default(value, sort);
    // if(!ArrayOf(value.fungsi, TypeNumber)) {
    //
    //     return false;
    // }
    //
    // if(!TypeNumber(value.prosedur)) {
    //
    //     return false;
    // }
    //
    // if(!TypeNumber(value.project)) {
    //
    //     return false;
    // }
    //
    // if(!TypeDateCompatible(value.selesai)) {
    //
    //     return false;
    // }
    //
    // if(!TypeDateCompatible(value.mulai)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map