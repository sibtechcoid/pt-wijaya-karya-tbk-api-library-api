"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const finite_1 = require("t-number/boolean/finite");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.surat === undefined) {
        return false;
    }
    else {
        if (!finite_1.default(parseInt(value.surat.toString()))) {
            return false;
        }
    }
    //
    // console.log('buffer--------');
    // console.log(value.data);
    // console.log('buffer--------');
    // if(!IsNumber(value.data)) {
    //
    //     return false;
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map