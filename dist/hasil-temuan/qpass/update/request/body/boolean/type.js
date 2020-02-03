"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("@dikac/t-object/boolean/type");
const array_of_1 = require("@dikac/t-array/boolean/array-of");
const type_2 = require("../hasil/boolean/type");
function Typez(value) {
    if (!type_1.default(value)) {
        return false;
    }
    return array_of_1.default(value, type_2.default);
}
exports.default = Typez;
