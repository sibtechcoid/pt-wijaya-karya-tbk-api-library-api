"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-enum/boolean/type");
const akses_1 = require("../akses");
function Type(value) {
    return type_1.default(value, akses_1.default);
}
exports.default = Type;
