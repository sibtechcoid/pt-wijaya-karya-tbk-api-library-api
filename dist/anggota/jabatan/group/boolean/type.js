"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-enum/boolean/type");
const group_1 = require("../group");
function Type(value) {
    return type_1.default(value, group_1.default);
}
exports.default = Type;
