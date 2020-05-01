"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../update/request/body/boolean/type");
const type_2 = require("../../../../create/request/body/boolean/type");
const type_3 = require("@dikac/t-object/boolean/type");
const type_4 = require("@dikac/t-array/boolean/type");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    for (let val of value) {
        if (type_2.default(val)) {
            continue;
        }
        if (type_1.default(val)) {
            continue;
        }
        return false;
    }
    return true;
}
exports.default = Type;
