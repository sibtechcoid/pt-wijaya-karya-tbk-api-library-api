"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-string/boolean/type");
const type_2 = require("../../../../../../id/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value.alasan)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map