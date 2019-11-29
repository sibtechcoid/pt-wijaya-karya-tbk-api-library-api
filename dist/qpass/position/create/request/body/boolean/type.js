"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../object/business/create/request/body/boolean/type");
const type_2 = require("../../../../access/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
const type_3 = require("t-enum/boolean/type");
const group_1 = require("../../../../group/group");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!array_of_1.default(value.access, type_2.default)) {
        return false;
    }
    if (!type_3.default(value.group, group_1.default)) {
        return false;
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map