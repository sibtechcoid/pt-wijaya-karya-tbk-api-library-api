"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-string/boolean/type");
const type_3 = require("@dikac/t-null/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.abbreviation !== undefined) {
        if (!(type_2.default(value.abbreviation) || type_3.default(value.abbreviation))) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map