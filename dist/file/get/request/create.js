"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../body/create");
const create_2 = require("./path/create");
const standard_1 = require("../../../method/standard");
const type_1 = require("../../../method/type/type");
function Create(path) {
    return Object.assign(new standard_1.default(type_1.default.GET), create_2.default(path), new create_1.default(undefined));
}
exports.default = Create;
