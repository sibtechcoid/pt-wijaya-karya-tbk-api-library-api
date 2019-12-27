"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../access/create/request/body/boolean/type");
const type_2 = require("../../../../../../name/update/boolean/type");
const type_3 = require("../../../../../../abbreviation/update/boolean/type");
const type_4 = require("@dikac/t-enum/boolean/type");
const group_1 = require("../../../../group/group");
const type_5 = require("../../../../../../id/boolean/type");
function Type(value) {
    if (!type_5.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.access !== undefined) {
        if (!type_1.default(value.access)) {
            return false;
        }
    }
    if (value.group !== undefined) {
        if (!type_4.default(value.group, group_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map