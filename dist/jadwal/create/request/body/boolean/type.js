"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plan_1 = require("../../../../update/request/body/boolean/plan");
const realize_1 = require("../../../../update/request/body/boolean/realize");
function Type(value) {
    if (!plan_1.default(value)) {
        return false;
    }
    if (!realize_1.default(value)) {
        return false;
    }
    return true;
}
exports.default = Type;
