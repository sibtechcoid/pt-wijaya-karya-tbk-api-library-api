"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../deactivate/read/request/body/boolean/type");
const type_2 = require("../../../../../limit/boolean/type");
const type_3 = require("../../../../../sort/boolean/type");
const null_1 = require("../../../../create/request/body/null");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value, null_1.default())) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map