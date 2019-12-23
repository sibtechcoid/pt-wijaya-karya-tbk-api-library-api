"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-object/boolean/type");
const record_of_1 = require("t-object/boolean/record-of");
const access_1 = require("../../../../../../qpass/project/access/access");
const type_2 = require("t-enum/boolean/type");
const access_2 = require("../../../../access");
const access_3 = require("../../../../../../qpass/object/access/access");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (value.project !== undefined) {
        if (!record_of_1.default(value.project, (v) => type_2.default(v, access_1.default))) {
            return false;
        }
    }
    if (value.user !== undefined) {
        if (!record_of_1.default(value.user, (v) => type_2.default(v, access_2.default))) {
            return false;
        }
    }
    if (value.unitKerja !== undefined) {
        if (!record_of_1.default(value.unitKerja, (v) => type_2.default(v, access_3.default))) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map