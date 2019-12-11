"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../../../../../../../name/update/boolean/type");
const type_2 = require("../../../../../../../abbreviation/update/boolean/type");
const type_3 = require("../../../../../../../id/boolean/type");
function Typez(value) {
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_1.default(value)) {
        return false;
    }
    if (!type_2.default(value)) {
        return false;
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map