"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("../mode/boolean/type");
const type_3 = require("@dikac/t-object/boolean/type");
function Type(value, properties) {
    if (!type_1.default(value)) {
        return false;
    }
    if (type_3.default(value)) {
        for (let property in value) {
            if (!properties.includes(property)) {
                return false;
            }
            if (!type_2.default(value[property])) {
                return false;
            }
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map