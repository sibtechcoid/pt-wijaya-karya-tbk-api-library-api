"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
function Type(value, entity) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.sort !== undefined) {
        for (let property in value.sort) {
            if (!(property in entity)) {
                return false;
            }
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map