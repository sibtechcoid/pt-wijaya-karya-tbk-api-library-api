"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type/type");
const standard_1 = require("./standard");
function DeleteCreate() {
    return new standard_1.default(type_1.default.DELETE);
}
exports.default = DeleteCreate;
