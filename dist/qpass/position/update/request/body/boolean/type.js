"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../access/boolean/type");
const array_of_1 = require("t-array/boolean/array-of");
const type_2 = require("../../../../../../name/update/boolean/type");
const type_3 = require("../../../../../../abbreviation/update/boolean/type");
const type_4 = require("t-object/boolean/type");
const type_5 = require("t-enum/boolean/type");
const group_1 = require("../../../../group/group");
function Typez(value) {
    if (!type_4.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.access !== undefined) {
        if (!array_of_1.default(value.access, type_1.default)) {
            return false;
        }
    }
    if (value.group !== undefined) {
        if (!type_5.default(value.group, group_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map