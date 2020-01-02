"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../../name/update/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const type_2 = require("../../../../../../../id/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    if (value.prosesBisnis !== undefined) {
        if (!finite_1.default(value.prosesBisnis)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map