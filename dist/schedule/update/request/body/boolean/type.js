"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plan_1 = require("./plan");
const realize_1 = require("./realize");
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
//# sourceMappingURL=type.js.map