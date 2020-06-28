"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../../../../../create/request/body/boolean/type");
const type_3 = require("../../../../../update/request/body/boolean/type");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    // audit migh be required
    let clone = Object.assign(value);
    clone.audit = Number.MAX_SAFE_INTEGER;
    return type_2.default(clone) || type_3.default(clone);
    // let sort : Validator<Required<TypeInterface>> = {
    //     level: Positive,
    //     ruangan: Positive,
    //     sampel: Positive,
    //     hasil : TypeNumber,
    //     catatan : TypeString,
    //     lampiran : (v) => ArrayOf(v, TypeString),
    // };
    //
    // return Structure(value, sort);
}
exports.default = Typez;
