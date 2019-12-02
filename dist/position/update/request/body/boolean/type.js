"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../abbreviation/update/boolean/type");
const type_2 = require("../../../../../name/update/boolean/type");
function Type(value, access) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (value.access !== undefined) {
        if (!access(value.access)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map