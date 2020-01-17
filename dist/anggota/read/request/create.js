"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../body/create");
const create_2 = require("../../create/request/path/create");
const read_create_1 = require("../../../method/read-create");
function Create(deactivated) {
    return Object.assign(read_create_1.default(), create_2.default(), new create_1.default(deactivated));
}
exports.default = Create;
