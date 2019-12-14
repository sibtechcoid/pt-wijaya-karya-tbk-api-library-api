"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("t-enum/boolean/type");
const category_1 = require("../../../../category/category");
const type_2 = require("../../../../../../id/boolean/type");
const type_3 = require("../../../../../../schedule/update/request/body/boolean/type");
const finite_1 = require("t-number/boolean/finite");
const array_of_1 = require("t-array/boolean/array-of");
const type_4 = require("../../../../../../member/create/request/body/boolean/type");
const type_5 = require("t-enum/boolean/type");
const status_1 = require("../../../../status/status");
function Typez(value) {
    if (!type_2.default(value)) {
        return false;
    }
    if (!type_3.default(value)) {
        return false;
    }
    if (value.object !== undefined) {
        if (!finite_1.default(value.object)) {
            return false;
        }
    }
    if (value.members !== undefined) {
        if (!array_of_1.default(value.members, type_4.default)) {
            return false;
        }
    }
    if (value.status !== undefined) {
        if (!type_5.default(value.status, status_1.default)) {
            return false;
        }
    }
    if (value.category !== undefined) {
        if (!type_1.default(value.category, category_1.default)) {
            return false;
        }
    }
    return true;
}
exports.default = Typez;
//# sourceMappingURL=type.js.map