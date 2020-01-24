"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../nama/create/boolean/type");
const type_2 = require("../../../../../../singkatan/create/boolean/type");
const type_3 = require("../../../../../akses/create/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value.akses)) {
        return false;
    }
    return true;
}
exports.default = Type;
