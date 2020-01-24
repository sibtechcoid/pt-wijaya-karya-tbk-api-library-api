"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../../body/create");
const create_2 = require("../request/path/create");
const read_create_1 = require("../../../../method/read-create");
function Create(body) {
    return Object.assign(read_create_1.default(), create_2.default(), new create_1.default(body));
}
exports.default = Create;
