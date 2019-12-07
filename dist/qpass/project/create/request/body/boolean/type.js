"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const type_2 = require("t-enum/boolean/type");
const type_3 = require("../../../../../../member/create/request/body/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
const status_1 = require("../../../../../../qpass/project/status/status");
const type_4 = require("../../../../../../schedule/create/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.status, status_1.default)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    //if(value.object !== undefined){
    if (!finite_1.default(value.object)) {
        return false;
    }
    // }
    //if(value.object !== undefined){
    if (!array_of_1.default(value.members, type_3.default)) {
        return false;
    }
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map