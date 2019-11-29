"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../access/update/request/body/boolean/type");
const type_2 = require("../../../../../../qpass/object/business/update/request/body/boolean/type");
function Typez(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map