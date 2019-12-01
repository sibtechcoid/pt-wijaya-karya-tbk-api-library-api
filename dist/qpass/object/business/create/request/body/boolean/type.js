"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("../../../../../../../name/create/boolean/type");
const type_3 = require("../../../../../../../abbreviation/create/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map