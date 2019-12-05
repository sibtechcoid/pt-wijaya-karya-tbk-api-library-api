"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-enum/boolean/type");
const status_1 = require("../../../../status/status");
const array_of_1 = require("t-array/boolean/array-of");
const type_2 = require("../../../../../../deactivate/read/request/body/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (value.status !== undefined) {
        if (!array_of_1.default(value.status, (value) => type_1.default(value, status_1.default))) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map