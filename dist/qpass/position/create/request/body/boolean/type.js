"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-enum/boolean/type");
const group_1 = require("../../../../group/group");
const type_2 = require("../../../../../../name/create/boolean/type");
const type_3 = require("../../../../../../abbreviation/create/boolean/type");
const type_4 = require("../../../../../access/create/request/body/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_4.default(value.access)) {
        return false;
    }
    if (!type_1.default(value.group, group_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map