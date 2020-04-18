"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("../../../body/create");
const create_2 = require("../../create/request/path/create");
const update_create_1 = require("../../../method/update-create");
function Create(types) {
    return Object.assign(update_create_1.default(), create_2.default(), new create_1.default(types));
}
exports.default = Create;
