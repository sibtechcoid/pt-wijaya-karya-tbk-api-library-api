"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const type_2 = require("@dikac/t-enum/boolean/type");
const status_1 = require("../../../../../../qpass/project/status/status");
const type_3 = require("../../../../../../project/create/request/body/boolean/type");
function Type(value) {
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_2.default(value.status, status_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map