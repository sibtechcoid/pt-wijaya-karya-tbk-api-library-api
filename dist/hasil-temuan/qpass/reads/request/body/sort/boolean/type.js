"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structure_1 = require("@dikac/t-object/boolean/structure");
const type_1 = require("../../../../../../../sort/mode/boolean/type");
const undefinable_1 = require("@dikac/t-undefined/boolean/undefinable");
const type_2 = require("@dikac/t-object/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    let sort = {
        created: (v) => undefinable_1.default(v, type_1.default),
        id: (v) => undefinable_1.default(v, type_1.default),
        updated: (v) => undefinable_1.default(v, type_1.default),
        selesai: (v) => undefinable_1.default(v, type_1.default),
        audit: (v) => undefinable_1.default(v, type_1.default),
        mulai: (v) => undefinable_1.default(v, type_1.default),
        level: (v) => undefinable_1.default(v, type_1.default),
    };
    return structure_1.default(value, sort);
}
exports.default = Type;
//# sourceMappingURL=type.js.map