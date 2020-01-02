"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../id/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../../../../../../member/create/request/body/boolean/type");
const realize_1 = require("../../../../../../schedule/update/request/body/boolean/realize");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!realize_1.default(value)) {
        return false;
    }
    // if(value.object !== undefined){
    //
    //     if(!IsNumber(value.object)) {
    //
    //         return false;
    //     }
    // }
    if (value.members !== undefined) {
        if (!array_of_1.default(value.members, type_2.default)) {
            return false;
        }
    }
    // if(value.type !== undefined){
    //
    //     if(!EnumType(value.type, TypeType)) {
    //
    //         return false;
    //     }
    // }
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