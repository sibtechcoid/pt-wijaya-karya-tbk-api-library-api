"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../body/create");
const create_create_1 = require("../../../../method/create-create");
const create_2 = require("./path/create");
function Create(type) {
    return Object.assign(create_create_1.default(), create_2.default(), new create_1.default(type));
}
exports.default = Create;
