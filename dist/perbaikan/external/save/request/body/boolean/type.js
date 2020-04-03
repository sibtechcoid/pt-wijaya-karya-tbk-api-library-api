"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const positive_1 = require("@dikac/t-number/boolean/positive");
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const status_1 = require("../../../../status/status");
const type_3 = require("@dikac/t-enum/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    let update = {
        id: (v) => undefinable_1.default(v, positive_1.default),
        //audit: (v) => Undefinable(v, Positive),
        status: (v) => undefinable_1.default(v, (v) => type_3.default(v, status_1.default)),
        catatan: (v) => undefinable_1.default(v, type_2.default),
    };
    return structure_1.default(value, update);
}
exports.default = Type;
