"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../limit/boolean/type");
const type_2 = require("../../../../../sort/boolean/type");
const null_1 = require("../sort/null");
const type_3 = require("@dikac/t-object/boolean/type");
const where_1 = require("./where");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value, null_1.default())) {
        return false;
    }
    if (value.where !== undefined) {
        if (!where_1.default(value.where)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map