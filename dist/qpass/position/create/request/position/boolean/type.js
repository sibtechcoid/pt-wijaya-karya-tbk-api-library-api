"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../qpass/place/business/create/request/business/boolean/type");
const type_2 = require("../../access/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.access, type_2.default)) {
        return false;
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map