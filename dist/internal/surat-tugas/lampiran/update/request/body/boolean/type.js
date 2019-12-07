"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-number/boolean/type");
const type_3 = require("../../../../../../../id/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.surat !== undefined) {
        if (!type_2.default(value.surat)) {
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