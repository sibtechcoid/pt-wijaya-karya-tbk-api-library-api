"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../access/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
const type_2 = require("t-enum/boolean/type");
const group_1 = require("../../../../group/group");
const type_3 = require("../../../../../../name/create/boolean/type");
const type_4 = require("../../../../../../abbreviation/create/boolean/type");
function Type(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value)) {
        return false;
    }
    if (!type_2.default(value.group, group_1.default)) {
        return false;
    }
    if (!array_of_1.default(value.access, type_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map