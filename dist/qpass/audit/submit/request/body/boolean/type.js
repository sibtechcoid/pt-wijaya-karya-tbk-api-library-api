"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-enum/boolean/type");
const type_2 = require("../../../../type/type");
const type_3 = require("../../../../../../id/boolean/type");
const type_4 = require("../../../../../../schedule/update/request/body/boolean/type");
const finite_1 = require("@dikac/t-number/boolean/finite");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_5 = require("../../../../../member/create/request/body/boolean/type");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (value.object !== undefined) {
        if (!finite_1.default(value.object)) {
            return false;
        }
    }
    if (value.members !== undefined) {
        if (!array_of_1.default(value.members, type_5.default)) {
            return false;
        }
    }
    if (value.type !== undefined) {
        if (!type_1.default(value.type, type_2.default)) {
            return false;
        }
    }
    // if(value.status !== undefined){
    //
    //     if(!EnumType(value.status, Status)) {
    //
    //         return false;
    //     }
    // }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map