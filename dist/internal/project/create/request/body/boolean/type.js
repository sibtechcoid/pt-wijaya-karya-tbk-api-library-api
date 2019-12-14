"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-enum/boolean/type");
const category_1 = require("../../../../category/category");
const type_2 = require("t-object/boolean/type");
const type_3 = require("../../../../../../project/create/request/body/boolean/type");
const status_1 = require("../../../../status/status");
function Type(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (!type_1.default(value.status, status_1.default)) {
        return false;
    }
    if (!type_1.default(value.category, category_1.default)) {
        return false;
    }
    return true;
}
exports.default = Type;
//# sourceMappingURL=type.js.map