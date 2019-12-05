"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-enum/boolean/type");
const category_1 = require("../../../../category/category");
const type_2 = require("../../../../../../qpass/project/update/request/body/boolean/type");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (value.object !== undefined) {
        if (!type_1.default(value.category, category_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map