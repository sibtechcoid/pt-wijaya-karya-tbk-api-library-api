"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const structure_1 = require("@dikac/t-object/boolean/structure");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_2 = require("@dikac/t-string/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let sort = {
        audit: (v) => undefinable_1.default(v, positive_1.default),
        externalOrganisasiRep: (v) => undefinable_1.default(v, type_2.default),
        externalOrganisasiNo: (v) => undefinable_1.default(v, type_2.default),
        externalAuditNo: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
