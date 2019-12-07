"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const type_2 = require("../../../../../../../id/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (value.surat !== undefined) {
        if (!finite_1.default(parseInt(value.surat.toString()))) {
            return false;
        }
    }
    console.log('buffer--------');
    console.log(value.data);
    console.log('buffer--------');
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map