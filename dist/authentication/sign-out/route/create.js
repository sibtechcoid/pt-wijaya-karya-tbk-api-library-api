"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delete_create_1 = require("../../../method/delete-create");
const create_1 = require("../../sign-in/request/path/create");
const create_2 = require("../../../route/create");
function Create() {
    return create_2.default(delete_create_1.default(), create_1.default(), (v) => true);
}
exports.default = Create;
