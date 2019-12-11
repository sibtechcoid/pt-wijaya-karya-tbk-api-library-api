"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const type_2 = require("t-string/boolean/type");
const type_3 = require("t-enum/boolean/type");
const group_1 = require("../../../../../../position/group/group");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value.pertanyaan)) {
        return false;
    }
    if (!type_3.default(value.dari, group_1.default)) {
        return false;
    }
    if (!type_3.default(value.untuk, group_1.default)) {
        return false;
    }
    if (value.untuk === value.dari) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map