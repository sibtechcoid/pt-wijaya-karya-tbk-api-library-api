"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../where/boolean/type");
const type_2 = require("@dikac/t-object/boolean/type");
const null_1 = require("../../../../../../user/reads/request/body/sort/null");
const type_3 = require("../../../../../../sort/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (value.where !== undefined) {
        if (!type_1.default(value)) {
            return false;
        }
    }
    if (value.sort !== undefined) {
        if (!type_3.default(value.sort, null_1.default())) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map