"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-enum/boolean/type");
const status_1 = require("../../../../status/status");
const type_2 = require("../../../../../../project/update/request/body/boolean/type");
const type_3 = require("../../../../type/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (value.type !== undefined) {
        if (!type_1.default(value.type, type_3.default)) {
            return false;
        }
    }
    if (value.status !== undefined) {
        if (!type_1.default(value.status, status_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map