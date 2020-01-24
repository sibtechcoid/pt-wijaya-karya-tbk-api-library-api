"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mode_1 = require("../mode");
const type_1 = require("@dikac/t-enum/boolean/type");
function Type(value) {
    return type_1.default(value, mode_1.default);
}
exports.default = Type;
